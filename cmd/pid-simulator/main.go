package main

import (
	"log"
	"os"
	"time"

	"github.com/eldelto/ikaros/internal/optional"
	"github.com/eldelto/ikaros/internal/rayutil"
	"github.com/eldelto/ikaros/internal/tower"
	rl "github.com/gen2brain/raylib-go/raylib"
)

func main() {
	hostArg := optional.Empty[string]()
	if len(os.Args) > 1 {
		hostArg = optional.Of(os.Args[1])
	}
	towerHost := hostArg.GetOrElse("localhost:8080")

	towerClient := tower.NewClient(towerHost)
	if err := towerClient.Connect(); err != nil {
		log.Println(err)
		log.Println("Continuing without Tower connection.")
		towerClient = nil
	}
	defer towerClient.Close()

	rl.InitWindow(500, 500, "PID Simulator")
	rl.SetTargetFPS(60)

	sliderP := rayutil.NewSlider(10, 10, 0, 10, "P")
	sliderI := rayutil.NewSlider(10, 45, 0, 10, "I")
	sliderD := rayutil.NewSlider(10, 80, 0, 10, "D")

	objects := []rayutil.Renderable{
		sliderP,
		sliderI,
		sliderD,
	}

	for !rl.WindowShouldClose() {
		rayutil.MoveSliderWithKey(sliderP, rl.KeyP)
		rayutil.MoveSliderWithKey(sliderI, rl.KeyI)
		rayutil.MoveSliderWithKey(sliderD, rl.KeyD)

		// pidController.pGain = sliderP.Value()
		// pidController.iGain = sliderI.Value()
		// pidController.dGain = sliderD.Value()

		// TODO: Read from serial
		angle := 0
		data := map[string]any{
			"graph":     "PID",
			"setPoint":  0,
			"angle":     angle,
			"timestamp": time.Now(),
		}

		if towerClient != nil {
			if err := towerClient.Send(data); err != nil {
				log.Fatalf("Failed to write to tower: %s", err)
			}
		}

		rl.BeginDrawing()
		rl.ClearBackground(rl.RayWhite)
		for _, o := range objects {
			o.Draw()
		}
		rl.EndDrawing()
	}
	rl.CloseWindow()
}
