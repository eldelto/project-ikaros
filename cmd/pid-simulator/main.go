package main

import (
	"time"

	rl "github.com/gen2brain/raylib-go/raylib"
)

type Renderable interface {
	Draw()
	Simulate(time.Duration)
}

type Rect struct {
	x      int32
	y      int32
	width  int32
	height int32
	color  rl.Color
}

func (r *Rect) Draw() {
	rl.DrawRectangle(r.x, r.y, r.width, r.height, r.color)
}

func main() {
	rl.InitWindow(500, 500, "PID Simulator")
	rl.SetTargetFPS(60)

	handle := &Rect{
		x:      300,
		y:      200,
		width:  10,
		height: 200,
		color:  rl.NewColor(0, 0, 0, 255),
	}

	for !rl.WindowShouldClose() {
		rl.BeginDrawing()

		rl.ClearBackground(rl.RayWhite)

		handle.Draw()

		rl.EndDrawing()
	}

	rl.CloseWindow()
}
