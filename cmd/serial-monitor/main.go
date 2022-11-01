package main

import (
	"bufio"
	"fmt"
	"log"

	"github.com/eldelto/ikaros/internal/serial"
)

func main() {
	serialPortName, err := serial.ChoosePort()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("\nReading %s ...\n", serialPortName)

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

		fmt.Print(serialValue)
	}
}
