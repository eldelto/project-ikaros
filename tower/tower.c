#include <stdlib.h>
#include <stdbool.h>

#include <raylib.h>
#define RAYGUI_IMPLEMENTATION
#include <raygui.h>

#include "rayutil.h"

int main(void) {
  const int screen_width = 1000;
  const int screen_height = 564;

  const int control_group_width = 200;
  const Rectangle control_group = {
    .x = screen_width - (control_group_width + PADDING),
    .y = PADDING,
    .width = control_group_width,
    .height = screen_height - (3 * PADDING),
  };

  const Rectangle p_gain_slider = sim_build_slider(control_group, 0);
  const Rectangle i_gain_slider = sim_build_slider(control_group, 1);
  const Rectangle d_gain_slider = sim_build_slider(control_group, 2);
  const Rectangle set_point_button = sim_build_button(control_group, 3);

  InitWindow(screen_width, screen_height, "Tower");
  SetTargetFPS(60);

  float p_gain = 0;
  float i_gain = 0;
  float d_gain = 0;
  bool second_set_point = false;

  const double set_point_1 = screen_height/2;
  const double set_point_2 = screen_height/4;

  double thrust = 0;

  while (!WindowShouldClose()) {
    const double set_point = second_set_point ? set_point_2 : set_point_1;

    BeginDrawing();
    ClearBackground(WHITE);

    GuiGroupBox(control_group, "Controller Gains");
    p_gain = GuiSliderBar(p_gain_slider, "P", TextFormat("%.2f", p_gain), p_gain, 0, 1);
    i_gain = GuiSliderBar(i_gain_slider, "I", TextFormat("%.2f", i_gain), i_gain, 0, 1);
    d_gain = GuiSliderBar(d_gain_slider, "D", TextFormat("%.2f", d_gain), d_gain, 0, 1);
    if (GuiButton(set_point_button, "Change setpoint")) {
      second_set_point = !second_set_point;
    }

    EndDrawing();
  }

  CloseWindow();

  return EXIT_SUCCESS;
}
