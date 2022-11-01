package serial

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	"go.bug.st/serial"
)

const (
	serialDir        = "/dev"
	serialPortPrefix = "cu"
)

func ChoosePort() (string, error) {
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

func Read(serialPort string) (io.ReadCloser, error) {
	mode := &serial.Mode{
		BaudRate: 115200,
	}

	port, err := serial.Open(serialPort, mode)
	if err != nil {
		return nil, fmt.Errorf("failed to open serial port '%s': %w", serialPort, err)
	}

	return port, nil
}
