package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/url"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/gorilla/websocket"
	"go.bug.st/serial"
)

const (
	serialDir        = "/dev"
	serialPortPrefix = "cu"
)

func main() {
	serialPortName, err := chooseserialPort()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("\nRelaying %s ...", serialPortName)

	conn, err := connectToTower()
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	serialPort, err := readFromSerialPort(serialPortName)
	if err != nil {
		log.Fatal(err)
	}
	defer serialPort.Close()

	reader := bufio.NewReader(serialPort)
	for {
		serialValue, err := reader.ReadString('\n')
		if err != nil {
			log.Fatalf("Failed to read from serial port: %s", err)
		}
		serialValue = strings.Trim(serialValue, "\r\n")

		parts := strings.Split(serialValue, "=")
		if err := writeToTower(conn, parts[0], parts[1]); err != nil {
			log.Fatalf("Failed to write to tower: %s", err)
		}
	}
}

func chooseserialPort() (string, error) {
	serialPorts := []string{}
	err := filepath.Walk(serialDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return fmt.Errorf("failed to walk directory path '%s': %w", path, err)
		}

		if info.IsDir() && path != serialDir {
			return filepath.SkipDir
		}

		if strings.HasPrefix(info.Name(), serialPortPrefix) {
			serialPorts = append(serialPorts, path)
		}

		return nil
	})
	if err != nil {
		return "", fmt.Errorf("failed to walk directory '%s': %w", serialDir, err)
	}

	fmt.Print("Choose a serial port to relay:\n\n")
	for i, filePath := range serialPorts {
		fmt.Printf("[%d] %s\n", i+1, filePath)
	}

	reader := bufio.NewReader(os.Stdin)
	userInput, err := reader.ReadString('\n')
	if err != nil {
		return "", fmt.Errorf("failed to read user input: %w", err)
	}
	userInput = strings.Trim(userInput, "\r\n")

	parsedInput, err := strconv.Atoi(userInput)
	if err != nil {
		return "", fmt.Errorf("invalid integer '%s'", userInput)
	}

	fileIndex := parsedInput - 1
	if fileIndex >= len(serialPorts) || fileIndex < 0 {
		return "", fmt.Errorf("invalid integer range '%d'. Please choose a range within 1-%d", parsedInput, len(serialPorts))
	}

	return serialPorts[fileIndex], nil
}

func connectToTower() (*websocket.Conn, error) {
	url := url.URL{Scheme: "ws", Host: "localhost:8080", Path: "/producers/ws"}

	conn, _, err := websocket.DefaultDialer.Dial(url.String(), nil)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to '%s': %w", url.String(), err)
	}

	return conn, nil
}

func writeToTower(conn *websocket.Conn, key string, value string) error {
	data := map[string]any{}
	floatValue, err := strconv.ParseFloat(value, 64)
	if err != nil {
		return fmt.Errorf("failed to convert value '%s' to float64: %w", value, err)
	}

	data[key] = floatValue
	data["timestamp"] = time.Now()
	buffer := bytes.Buffer{}
	if err := json.NewEncoder(&buffer).Encode(data); err != nil {
		return fmt.Errorf("failed to encode data point: %w", err)
	}

	if err := conn.WriteMessage(websocket.TextMessage, buffer.Bytes()); err != nil {
		return fmt.Errorf("failed to write data to connection: %w", err)
	}

	return nil
}

func readFromSerialPort(serialPort string) (io.ReadCloser, error) {
	mode := &serial.Mode{
		BaudRate: 115200,
	}

	port, err := serial.Open(serialPort, mode)
	if err != nil {
		return nil, fmt.Errorf("failed to open serial port '%s': %w", serialPort, err)
	}

	return port, nil
}
