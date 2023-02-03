package main

import (
	"time"

	rl "github.com/gen2brain/raylib-go/raylib"
	"github.com/jakecoffman/cp"
)

type Renderable interface {
	Draw()
}

type Rect struct {
	width  float64
	height float64
	color  rl.Color
	body   *cp.Body
}

func NewDynamicRect(space *cp.Space, x, y, width, height float64, color rl.Color) *Rect {
	body := space.AddBody(cp.NewBody(0, 0))
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

var gravity = cp.Vector{X: 0, Y: 9800}

// Distances in mm
// Mass in g
func main() {
	rl.InitWindow(500, 500, "PID Simulator")
	rl.SetTargetFPS(60)

	space := cp.NewSpace()
	space.SetGravity(gravity)

	lever := NewDynamicRect(space, 250, 250, 200, 12, rl.NewColor(0, 0, 0, 255))
	handle := NewKinematicRect(space, 400, 350, 200, 12, rl.NewColor(0, 0, 0, 255))

	objects := []Renderable{}
	objects = append(objects, lever)
	objects = append(objects, handle)

	lastTime := time.Now()
	for !rl.WindowShouldClose() {
		thisTime := time.Now()
		deltaTime := thisTime.Sub(lastTime)
		lastTime = thisTime

		rl.BeginDrawing()

		rl.ClearBackground(rl.RayWhite)

		// TODO: Remove slo-mo
		space.Step(deltaTime.Seconds() / 10.0)
		// space.Step(deltaTime.Seconds())
		for _, o := range objects {
			o.Draw()
		}

		rl.EndDrawing()
	}

	rl.CloseWindow()
}
