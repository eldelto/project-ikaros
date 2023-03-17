package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/eldelto/ikaros/internal/optional"
	"github.com/eldelto/ikaros/internal/rayutil"
	"github.com/eldelto/ikaros/internal/tower"
	rl "github.com/gen2brain/raylib-go/raylib"
	"github.com/jakecoffman/cp"
)

type PIDController struct {
	pGain     float64
	iGain     float64
	dGain     float64
	iError    float64
	lastError float64
}

func (c *PIDController) Control(have, want float64) float64 {
	errorValue := (want - have)
	c.iError += (errorValue * c.iGain)
	errorChange := errorValue - c.lastError
	c.lastError = errorValue

	return errorValue*c.pGain + c.iError + errorChange*c.dGain
}

const (
	maxThrust       float64 = 1000
	maxThrustChange float64 = maxThrust / 10
)

// var gravity = cp.Vector{X: 0, Y: 9800}

var gravity = cp.Vector{X: 0, Y: 9.8}

// Distances in mm
// Mass in g
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

	space := cp.NewSpace()
	space.SetGravity(gravity)

	lever := rayutil.NewDynamicRect(space, 240, 250, 200, 12, 30, rl.NewColor(0, 0, 0, 255))
	handle := rayutil.NewKinematicRect(space, 450, 250, 200, 12, rl.NewColor(0, 0, 0, 255))
	motor := rayutil.NewDynamicRect(space, 155, 234, 30, 20, 8.5, rl.NewColor(151, 50, 168, 255))

	sliderP := rayutil.NewSlider(10, 10, 0, 1000, "P")
	sliderI := rayutil.NewSlider(10, 45, 0, 100, "I")
	sliderD := rayutil.NewSlider(10, 80, 0, 10000, "D")

	// sliderP.SetValue(1500)
	// sliderI.SetValue(40)
	// sliderD.SetValue(9000)

	pidController := PIDController{}

	pivot := cp.NewPivotJoint(lever.Body, handle.Body, cp.Vector{X: 350, Y: 250})
	pivot.SetErrorBias(0.000001)
	space.AddConstraint(pivot)

	motorMountA := cp.NewPivotJoint(motor.Body, lever.Body, cp.Vector{X: 140, Y: 244})
	motorMountA.SetErrorBias(0)
	space.AddConstraint(motorMountA)
	motorMountB := cp.NewPivotJoint(motor.Body, lever.Body, cp.Vector{X: 170, Y: 244})
	motorMountB.SetErrorBias(0)
	space.AddConstraint(motorMountB)

	objects := []rayutil.Renderable{
		lever,
		handle,
		motor,
		sliderP,
		sliderI,
		sliderD,
	}

	lastTime := time.Now()
	thrust := 0.0
	for !rl.WindowShouldClose() {
		thisTime := time.Now()
		deltaTime := thisTime.Sub(lastTime)
		lastTime = thisTime

		rayutil.MoveSliderWithKey(sliderP, rl.KeyP)
		rayutil.MoveSliderWithKey(sliderI, rl.KeyI)
		rayutil.MoveSliderWithKey(sliderD, rl.KeyD)

		pidController.pGain = sliderP.Value()
		pidController.iGain = sliderI.Value()
		pidController.dGain = sliderD.Value()

		targetThrust := 0.0
		setPoint := 0.0
		if rl.IsKeyDown(rl.KeyS) {
			setPoint = -0.45
		}

		targetThrust = pidController.Control(lever.Body.Angle(), setPoint)
		targetThrust = rayutil.Clamp(targetThrust, -maxThrust, maxThrust)
		// fmt.Println(thrust)
		if rl.IsKeyDown(rl.KeyR) {
			targetThrust = 0
			pidController.iError = 0
		}
		deltaThrust := rayutil.Clamp(targetThrust-thrust, -maxThrustChange, maxThrustChange)
		thrust += deltaThrust
		fmt.Printf("angle=%f thrust=%f\n", lever.Body.Angle(), thrust)

		data := map[string]any{
			"graph":     "PID",
			"setPoint":  setPoint,
			"angle":     lever.Body.Angle(),
			"timestamp": time.Now(),
		}

		if towerClient != nil {
			if err := towerClient.Send(data); err != nil {
				log.Fatalf("Failed to write to tower: %s", err)
			}
		}

		rl.BeginDrawing()
		rl.ClearBackground(rl.RayWhite)

		space.Step(deltaTime.Seconds())

		forceVector := cp.NewTransformRotate(motor.Body.Angle()).Vect(cp.Vector{X: 0, Y: -thrust * 300})
		motor.Body.SetForce(forceVector)
		for _, o := range objects {
			o.Draw()
		}

		rl.EndDrawing()
	}

	rl.CloseWindow()
}
