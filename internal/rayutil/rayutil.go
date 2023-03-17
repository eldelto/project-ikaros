package rayutil

import (
	"fmt"

	rl "github.com/gen2brain/raylib-go/raylib"
	"github.com/jakecoffman/cp"
	"golang.org/x/exp/constraints"
)

func Clamp[A constraints.Float](value, min, max A) A {
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
	Body   *cp.Body
}

func newRect(space *cp.Space, body *cp.Body, x, y, width, height, mass float64, color rl.Color) *Rect {
	body = space.AddBody(body)
	body.SetPosition(cp.Vector{X: x, Y: y})

	shape := space.AddShape(cp.NewBox(body, width, height, 0))
	shape.SetElasticity(0)
	shape.SetFriction(0)
	shape.SetMass(mass)

	return &Rect{
		width:  width,
		height: height,
		Body:   body,
		color:  color,
	}
}

func NewDynamicRect(space *cp.Space, x, y, width, height, mass float64, color rl.Color) *Rect {
	return newRect(space, cp.NewBody(0, 0), x, y, width, height, mass, color)
}

func NewKinematicRect(space *cp.Space, x, y, width, height float64, color rl.Color) *Rect {
	return newRect(space, cp.NewKinematicBody(), x, y, width, height, 100, color)
}

func (r *Rect) Draw() {
	position := r.Body.Position()
	rectangle := rl.NewRectangle(float32(position.X), float32(position.Y), float32(r.width), float32(r.height))
	origin := rl.Vector2{X: float32(r.width / 2), Y: float32(r.height / 2)}
	rl.DrawRectanglePro(rectangle, origin, float32(r.Body.Angle()*cp.DegreeConst), r.color)
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
	markerX := Clamp(s.marker.X+deltaX, s.line.X, s.line.X+s.line.Width-s.marker.Width)
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

func MoveSliderWithKey(slider *Slider, key int32) {
	if rl.IsKeyDown(key) {
		if rl.IsKeyDown(rl.KeyLeftShift) || rl.IsKeyDown(rl.KeyRightShift) {
			slider.Move(1)
		} else {
			slider.Move(-1)
		}
	}
}
