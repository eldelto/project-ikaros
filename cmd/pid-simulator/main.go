package main

import (
	"fmt"
	"time"

	rl "github.com/gen2brain/raylib-go/raylib"
	"github.com/jakecoffman/cp"
	"golang.org/x/exp/constraints"
)

func clamp[A constraints.Float](value, min, max A) A {
	if value < min {
		return min
	} else if value > max {
		return max
	} else {
		return value
	}
}

type Renderable interface {
	Draw()
}

type Rect struct {
	width  float64
	height float64
	color  rl.Color
	body   *cp.Body
}

func NewDynamicRect(space *cp.Space, x, y, width, height, mass float64, color rl.Color) *Rect {
	body := space.AddBody(cp.NewBody(0, 0))
	body.SetPosition(cp.Vector{X: x, Y: y})

	shape := space.AddShape(cp.NewBox(body, width, height, 0))
	shape.SetElasticity(0)
	shape.SetFriction(0)
	shape.SetMass(mass)

	return &Rect{
		width:  width,
		height: height,
		body:   body,
		color:  color,
	}
}

// TODO: Merge with constructor above?
func NewKinematicRect(space *cp.Space, x, y, width, height float64, color rl.Color) *Rect {
	body := space.AddBody(cp.NewKinematicBody())
	body.SetPosition(cp.Vector{X: x, Y: y})

	shape := space.AddShape(cp.NewBox(body, width, height, 0))
	shape.SetElasticity(0)
	shape.SetFriction(0)
	shape.SetMass(100)

	return &Rect{
		width:  width,
		height: height,
		body:   body,
		color:  color,
	}
}

func (r *Rect) Draw() {
	position := r.body.Position()
	rectangle := rl.NewRectangle(float32(position.X), float32(position.Y), float32(r.width), float32(r.height))
	origin := rl.Vector2{X: float32(r.width / 2), Y: float32(r.height / 2)}
	rl.DrawRectanglePro(rectangle, origin, float32(r.body.Angle()*cp.DegreeConst), r.color)
}

type Slider struct {
	x      float64
	y      float64
	min    float64
	max    float64
	text   string
	line   rl.Rectangle
	marker rl.Rectangle
}

func NewSlider(x, y, min, max float64, text string) *Slider {
	line := rl.NewRectangle(float32(x), float32(y+14), 150, 2)
	marker := rl.NewRectangle(float32(x), float32(y), 5, 30)

	return &Slider{
		x:      x,
		y:      y,
		min:    min,
		max:    max,
		text:   text,
		line:   line,
		marker: marker,
	}
}

func (s *Slider) Draw() {
	black := rl.NewColor(0, 0, 0, 155)
	rl.DrawRectangleRec(s.line, black)
	rl.DrawRectangleRec(s.marker, black)

	var textSize int32 = 30
	var textX int32 = int32(s.x + float64(s.line.Width) + 10)
	var textY int32 = int32(s.y)
	rl.DrawText(s.text, textX, textY, textSize, black)

	value := s.Value()
	rl.DrawText(fmt.Sprintf("%f", value), textX+int32(len(s.text))*25, textY, textSize, black)
}

func (s *Slider) Move(deltaX float32) {
	markerX := clamp(s.marker.X+deltaX, s.line.X, s.line.X+s.line.Width-s.marker.Width)
	s.marker.X = markerX
}

func (s *Slider) Value() float64 {
	valueRange := s.max - s.min
	percent := (s.marker.X - s.line.X) / s.line.Width

	return valueRange * float64(percent)
}

func (s *Slider) SetValue(value float64) {
	valueRange := s.max - s.min
	percent := (value - s.min) / valueRange

	s.marker.X = s.line.X + (s.line.Width * float32(percent))
}

func moveSliderWithKey(slider *Slider, key int32) {
	if rl.IsKeyDown(key) {
		if rl.IsKeyDown(rl.KeyEqual) {
			slider.Move(1)
		}
		if rl.IsKeyDown(rl.KeyMinus) {
			slider.Move(-1)
		}
	}
}

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
	rl.InitWindow(500, 500, "PID Simulator")
	rl.SetTargetFPS(60)

	space := cp.NewSpace()
	space.SetGravity(gravity)

	lever := NewDynamicRect(space, 240, 250, 200, 12, 30, rl.NewColor(0, 0, 0, 255))
	handle := NewKinematicRect(space, 450, 250, 200, 12, rl.NewColor(0, 0, 0, 255))
	motor := NewDynamicRect(space, 155, 234, 30, 20, 8.5, rl.NewColor(151, 50, 168, 255))

	sliderP := NewSlider(10, 10, 0, 1000, "P")
	sliderI := NewSlider(10, 45, 0, 100, "I")
	sliderD := NewSlider(10, 80, 0, 10000, "D")

	// sliderP.SetValue(1500)
	// sliderI.SetValue(40)
	// sliderD.SetValue(9000)

	pidController := PIDController{}

	pivot := cp.NewPivotJoint(lever.body, handle.body, cp.Vector{X: 350, Y: 250})
	pivot.SetErrorBias(0.000001)
	space.AddConstraint(pivot)

	motorMountA := cp.NewPivotJoint(motor.body, lever.body, cp.Vector{X: 140, Y: 244})
	motorMountA.SetErrorBias(0)
	space.AddConstraint(motorMountA)
	motorMountB := cp.NewPivotJoint(motor.body, lever.body, cp.Vector{X: 170, Y: 244})
	motorMountB.SetErrorBias(0)
	space.AddConstraint(motorMountB)

	objects := []Renderable{
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

		moveSliderWithKey(sliderP, rl.KeyP)
		moveSliderWithKey(sliderI, rl.KeyI)
		moveSliderWithKey(sliderD, rl.KeyD)

		pidController.pGain = sliderP.Value()
		pidController.iGain = sliderI.Value()
		pidController.dGain = sliderD.Value()

		targetThrust := 0.0
		if rl.IsKeyDown(rl.KeyS) {
			targetThrust = pidController.Control(lever.body.Angle(), -0.45)
		} else {
			targetThrust = pidController.Control(lever.body.Angle(), 0)
		}

		targetThrust = clamp(targetThrust, -maxThrust, maxThrust)
		// fmt.Println(thrust)
		if rl.IsKeyDown(rl.KeyR) {
			targetThrust = 0
			pidController.iError = 0
		}
		deltaThrust := clamp(targetThrust-thrust, -maxThrustChange, maxThrustChange)
		thrust += deltaThrust
		fmt.Printf("angle=%f thrust=%f\n", lever.body.Angle(), thrust)

		rl.BeginDrawing()
		rl.ClearBackground(rl.RayWhite)

		space.Step(deltaTime.Seconds())

		forceVector := cp.NewTransformRotate(motor.body.Angle()).Vect(cp.Vector{X: 0, Y: -thrust * 300})
		motor.body.SetForce(forceVector)
		for _, o := range objects {
			o.Draw()
		}

		rl.EndDrawing()
	}

	rl.CloseWindow()
}
