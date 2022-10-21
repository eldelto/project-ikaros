package main

import (
	"bytes"
	"encoding/json"
	"log"
	"math"
	"net/url"
	"time"

	"github.com/gorilla/websocket"
)

const (
	subject  = "data.generator.sine"
	minValue = -math.Pi
	maxValue = math.Pi
	step     = 0.1
)

type dataPoint struct {
	Generator float64   `json:"generator"`
	Timestamp time.Time `json:"timestamp"`
}

func main() {
	url := url.URL{Scheme: "ws", Host: "localhost:8080", Path: "/producers/ws"}

	conn, _, err := websocket.DefaultDialer.Dial(url.String(), nil)
	if err != nil {
		log.Fatalf("Failed to connect to '%s': %s", url.String(), err)
	}
	defer conn.Close()

	value := minValue
	for {
		if value > maxValue {
			value = minValue
		}

		dp := dataPoint{math.Sin(value), time.Now()}
		buffer := bytes.Buffer{}
		if err := json.NewEncoder(&buffer).Encode(dp); err != nil {
			log.Fatalf("Failed to encode data point: %s", err)
		}

		if err := conn.WriteMessage(websocket.TextMessage, buffer.Bytes()); err != nil {
			log.Fatalf("Failed to write data to connection: %s", err)
		}

		value += 0.1
		time.Sleep(50 * time.Millisecond)
	}
}
