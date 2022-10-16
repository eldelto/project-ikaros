package main

import (
	"log"
	"strconv"
	"time"

	"github.com/nats-io/nats.go"
)

const (
	url      = nats.DefaultURL
	subject  = "data.generator.sine"
	minValue = 0.0
	maxValue = 1.0
	step     = 0.1
)

func main() {
	nc, err := nats.Connect(url)
	if err != nil {
		log.Fatalf("Failed to connect to NATS server %s: %v", url, err)
	}
	defer nc.Drain()

	value := minValue
	for {
		if value > maxValue {
			value = minValue
		}

		nc.Publish(subject, []byte(strconv.FormatFloat(value, 'f', -1, 64)))
		value += 0.1
		time.Sleep(100 * time.Millisecond)
	}
}
