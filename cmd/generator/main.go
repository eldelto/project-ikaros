package main

import (
	"log"
	"math"
	"os"
	"time"

	"github.com/eldelto/ikaros/internal/optional"
	"github.com/eldelto/ikaros/internal/tower"
)

const (
	subject  = "data.generator.sine"
	minValue = -math.Pi
	maxValue = math.Pi
	step     = 0.1
)

func main() {
	hostArg := optional.Empty[string]()
	if len(os.Args) > 1 {
		hostArg = optional.Of(os.Args[1])
	}
	towerHost := hostArg.GetOrElse("localhost:8080")

	towerClient := tower.NewClient(towerHost)
	if err := towerClient.Connect(); err != nil {
		log.Fatal(err)
	}
	defer towerClient.Close()

	value := minValue
	for {
		if value > maxValue {
			value = minValue
		}

		data := map[string]any{
			"sine":      math.Sin(value),
			"cosine":    math.Cos(value),
			"timestamp": time.Now(),
		}

		if err := towerClient.Send(data); err != nil {
			log.Fatalf("Failed to write to tower: %s", err)
		}

		value += 0.1
		time.Sleep(50 * time.Millisecond)
	}
}
