package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"

	"github.com/eldelto/ikaros/internal/optional"
	"github.com/eldelto/ikaros/internal/serial"
	"github.com/eldelto/ikaros/internal/tower"
)

func main() {
	hostArg := optional.Empty[string]()
	if len(os.Args) > 1 {
		hostArg = optional.Of(os.Args[1])
	}
	towerHost := hostArg.GetOrElse("localhost:8080")

	serialPortName, err := serial.ChoosePort()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("\nRelaying %s ...\n", serialPortName)

	towerClient := tower.NewClient(towerHost)
	if err := towerClient.Connect(); err != nil {
		log.Fatal(err)
	}
	defer towerClient.Close()

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
		data, err := parseCSM(serialValue)
		if err != nil {
			log.Fatalf("Failed to parse CSM value: %s", err)
		}

		if err := towerClient.Send(data); err != nil {
			log.Fatalf("Failed to write to tower: %s", err)
		}
	}
}

func parseCSM(csm string) (map[string]any, error) {
	data := map[string]any{}
	keyPairs := strings.Split(csm, ";")
	for _, keyPair := range keyPairs {
		parts := strings.Split(keyPair, "=")
		if len(parts) != 2 {
			return nil, fmt.Errorf("'%s' is not a valid key-pair", keyPair)
		}

		key := parts[0]
		value := parts[1]
		floatValue, err := strconv.ParseFloat(value, 64)
		if err != nil {
			return nil, fmt.Errorf("failed to convert value '%s' to float64: %w", value, err)
		}

		data[key] = floatValue
	}

	return data, nil
}
