package main

import (
	"fmt"
	"time"

	rl "github.com/gen2brain/raylib-go/raylib"
	"github.com/jakecoffman/cp"
)

func clamp(value, min, max float32) float32 {
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
	pGain float64
	iGain float64
	dGain float64
}

func (c *PIDController) Control(have, want float64) float64 {
	return (want - have) * c.pGain
}

const (
	maxThrust       float64 = 300000
	maxThrustChange float64 = maxThrust / 10
)

var gravity = cp.Vector{X: 0, Y: 9800}

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

	sliderP := NewSlider(10, 10, 0, 500, "P")
	sliderI := NewSlider(10, 45, 0, 500, "I")
	sliderD := NewSlider(10, 80, 0, 500, "D")

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
		thrust := pidController.Control(lever.body.Angle(), 0)
		// fmt.Println(thrust)

		rl.BeginDrawing()
		rl.ClearBackground(rl.RayWhite)

		space.Step(deltaTime.Seconds())

		forceVector := cp.NewTransformRotate(motor.body.Angle()).Vect(cp.Vector{X: 0, Y: -300 * thrust})
		motor.body.SetForce(forceVector)
		for _, o := range objects {
			o.Draw()
		}

		rl.EndDrawing()
	}

	rl.CloseWindow()
}
