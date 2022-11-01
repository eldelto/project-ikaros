package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/eldelto/ikaros/internal/serial"
	"github.com/gorilla/websocket"
)

func main() {
	serialPortName, err := serial.ChoosePort()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("\nRelaying %s ...\n", serialPortName)

	conn, err := connectToTower()
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	serialPort, err := serial.Read(serialPortName)
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
