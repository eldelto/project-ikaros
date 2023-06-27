#include <dirent.h>
#include <fcntl.h>
#include <stdbool.h>
#include <stdlib.h>
#include <sys/errno.h>
#include<termios.h>
#include <unistd.h>

#include <raylib.h>
#define RAYGUI_IMPLEMENTATION
#include <raygui.h>

#include "rayutil.h"
#include "delto_util.h"

// TODO:
// read from the selected device
// write to the selected device

const char tty_dir[] = "/dev";
char pico_tty[100] = "";
void find_pico_tty(void) {
  const char *tty_prefix = "tty.usb";
  bool found = false;
  
  DIR *dev = opendir(tty_dir);
  if (dev == NULL) fatal_error("failed to open /dev");

  struct dirent *entry = NULL;
  while ((entry = readdir(dev))) {
    // Skip everything except files.
    if (entry->d_type != DT_CHR) continue;
    
    // Check if it could be the pico tty by prefix.
    if (strncmp(entry->d_name, tty_prefix, strlen(tty_prefix)) == 0) {
      if (found) {
	error("failed to find unique pico tty");
	goto close_dir;
      }

      strlcat(pico_tty, tty_dir, sizeof(pico_tty));
      strlcat(pico_tty, "/", sizeof(pico_tty));
      strlcat(pico_tty, entry->d_name, sizeof(pico_tty));
      found = true;
    }
  }

  if (!found) error("failed to find pico tty");

close_dir:
  closedir(dev);

  if (error_msg[0] != '\0') panic();
}

int main(void) {
  const int screen_width = 1200;
  const int screen_height = 800;

  const Rectangle tab_bar = {
    .x = PADDING,
    .y = 20,
    .width = 50,
    .height = 20,
  };
  const char *tabs[] = {"PID", "Orientation"};
  int active_tab = 0;

  const int control_group_width = 200;
  const Rectangle control_group = {
    .x = screen_width - (control_group_width + PADDING),
    .y = PADDING,
    .width = control_group_width,
    .height = screen_height - ( 2 * PADDING),
  };

  const Rectangle p_gain_slider = sim_build_slider(control_group, 0);
  const Rectangle i_gain_slider = sim_build_slider(control_group, 1);
  const Rectangle d_gain_slider = sim_build_slider(control_group, 2);
  const Rectangle set_point_button = sim_build_button(control_group, 3);

  const Rectangle graph_rect = {
    .x = PADDING,
    .y = tab_bar.y + tab_bar.height + PADDING,
    .width = screen_width - (screen_width - control_group.x) - (2 * PADDING),
    .height = screen_height - (tab_bar.y + tab_bar.height + 2 * PADDING),
  };
  struct sim_graph sine_graph = sim_new_graph(graph_rect);
  struct sim_graph cosine_graph = sim_new_graph(graph_rect);
  struct sim_data_set *sine = sim_add_data_set(&sine_graph, "Sine", BLUE);
  struct sim_data_set *cosine = sim_add_data_set(&cosine_graph, "Cosine", RED);

  InitWindow(screen_width, screen_height, "Tower");
  SetTargetFPS(60);

  float p_gain = 0;
  float i_gain = 0;
  float d_gain = 0;
  bool second_set_point = false;

  const double set_point_1 = screen_height/2;
  const double set_point_2 = screen_height/4;

  find_pico_tty();
  printf("Connecting to tty '%s' ...\n", pico_tty);
  int pico_fd = open(pico_tty, O_RDWR | O_NOCTTY | O_NDELAY);
  if (pico_fd == -1) fatal_error("failed to open pico tty");
  if (fcntl(pico_fd, F_SETFL, FNDELAY) == -1) {
    error("failed to set tty flags");
    close(pico_fd);
    goto raylib_teardown;
  }

  struct termios tty;
  cfsetospeed(&tty, B115200);
            cfsetispeed(&tty, B9600);

            tty.c_cflag &= ~PARENB;
            tty.c_cflag &= ~CSTOPB;
            tty.c_cflag &= ~CSIZE;
            tty.c_cflag |= CS8;
            tty.c_cflag &= ~CRTSCTS; 
            tty.c_cflag |= CLOCAL | CREAD;

            tty.c_iflag |= IGNPAR | IGNCR;
            tty.c_iflag &= ~(IXON | IXOFF | IXANY);
            tty.c_lflag |= ICANON;
            tty.c_oflag &= ~OPOST;
            tcsetattr(pico_fd, TCSANOW, &tty);
	    
  FILE *pico = fdopen(pico_fd, "r+t");
  if (pico == NULL) {
    error("failed to convert file descriptor to FILE");
    close(pico_fd);
    goto raylib_teardown;
  }

  double x = 0;
#define TTY_MSG_MAX 100
  char pico_in[TTY_MSG_MAX];
  while (!WindowShouldClose()) {
    if (fgets(pico_in, TTY_MSG_MAX, pico) != NULL) {
      puts(pico_in);
    }

    const double set_point = second_set_point ? set_point_2 : set_point_1;

    x += 0.05;
    if (x >= PI) x = -PI;
    sim_push_data_point(sine, sin(x) * 100);
    sim_push_data_point(cosine, cos(x) * 100);

    BeginDrawing();
    ClearBackground(WHITE);

    GuiTabBar(tab_bar, tabs, 2, &active_tab);
    
    if (active_tab == 0) sim_draw_graph(&sine_graph);
    else sim_draw_graph(&cosine_graph);

    GuiGroupBox(control_group, "Controller Gains");
    p_gain = GuiSliderBar(p_gain_slider, "P", TextFormat("%.2f", p_gain), p_gain, 0, 1);
    i_gain = GuiSliderBar(i_gain_slider, "I", TextFormat("%.2f", i_gain), i_gain, 0, 1);
    d_gain = GuiSliderBar(d_gain_slider, "D", TextFormat("%.2f", d_gain), d_gain, 0, 1);
    if (GuiButton(set_point_button, "Change setpoint")) {
      second_set_point = !second_set_point;
    }

    EndDrawing();
  }

  // pico_close:
  fclose(pico);

 raylib_teardown:
  CloseWindow();
  sim_free_graph(&sine_graph);
  sim_free_graph(&cosine_graph);

  panic_on_error();

  return EXIT_SUCCESS;
}
