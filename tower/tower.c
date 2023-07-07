#include <dirent.h>
#include <fcntl.h>
#include <stdbool.h>
#include <stdlib.h>
#include <sys/errno.h>
#include <termios.h>
#include <unistd.h>

#include "raylib.h"
#define RAYGUI_IMPLEMENTATION
#include "raygui.h"

#include "delto/rayutil.h"
#include "delto/serial.h"
#include "delto/util.h"

#define TTY_MSG_MAX 100
#define GRAPHS_MAX 5

static const char tty_dir[] = "/dev";
static char pico_tty[100] = "";

void find_pico_tty(void) {
    const char tty_prefix[] = "tty.usb";
    bool found = false;

    DIR *dev = opendir(tty_dir);
    if (dev == NULL) fatal_error("failed to open /dev");

    struct dirent *entry = NULL;
    while ((entry = readdir(dev))) {
        // Skip everything except character devices.
        if (entry->d_type != DT_CHR) continue;

        // Check if it could be the pico tty by prefix.
        if (strncmp(entry->d_name, tty_prefix, sizeof(tty_prefix) - 1) == 0) {
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

    panic_on_error();
}

static struct graph graphs[GRAPHS_MAX];
static unsigned int graphs_len = 0;

static struct graph *add_graph(Rectangle rect, char name[GRAPH_NAME_MAX]) {
  for(unsigned int i = 0; i < graphs_len; ++i) {
    struct graph *g = &graphs[i];
    if (string_equals(g->name, name)) return g;
  }
  
  struct graph g = graph_new(rect, name);
  graphs[graphs_len++] = g;

  return &graphs[graphs_len - 1];
}

static void free_graphs(void) {
  for (unsigned int i = graphs_len; i < graphs_len; ++i)
    graph_free(&graphs[i]);
}

struct data_point {
  char name[GRAPH_NAME_MAX];
  double value;
};

static void parse_graph_message(char message[TTY_MSG_MAX], Rectangle graph_rect) {
  char *token = "";
  struct graph *graph = NULL;
  struct data_point data_points[DATA_SETS_MAX];
  unsigned int data_points_len = 0;

  while ((token = strsep(&message, ";")) != NULL) {
    char *key = strsep(&token, "=");
    char *value = strsep(&token, "=");
    if (key == NULL || value == NULL) continue;

    if (string_equals(key, "graph")) {
      graph = add_graph(graph_rect, value);
    } else {
      struct data_point dp = {
	.name = "",
	.value = strtod(value, NULL)
      };
      strlcpy(dp.name, key, sizeof(dp.name) - 1);
      data_points[data_points_len++] = dp;

      if (data_points_len >= DATA_SETS_MAX) break;
    }
  }

  if (graph == NULL) return;
  
  for (unsigned int i = 0; i < data_points_len; ++i) {
    struct data_point dp = data_points[i];
    graph_push_or_add(graph, dp.name, dp.value * 2);
  }
}

static unsigned int graphs_to_tabs(char *tabs[GRAPHS_MAX],
				   struct graph graphs[GRAPHS_MAX],
				   unsigned int graphs_len) {
  for (unsigned int i = 0; i < graphs_len; ++i) {
    tabs[i] = graphs[i].name;
  }

  return graphs_len;
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
    char *tabs[GRAPHS_MAX];
    int active_tab = 0;

    const int control_group_width = 200;
    const Rectangle control_group = {
        .x = screen_width - (control_group_width + PADDING),
        .y = PADDING,
        .width = control_group_width,
        .height = screen_height - ( 2 * PADDING),
    };

    const Rectangle p_gain_slider = grouped_slider(control_group, 0);
    const Rectangle i_gain_slider = grouped_slider(control_group, 1);
    const Rectangle d_gain_slider = grouped_slider(control_group, 2);

    const Rectangle graph_rect = {
        .x = PADDING,
        .y = tab_bar.y + tab_bar.height + PADDING,
        .width = screen_width - (screen_width - control_group.x) - (2 * PADDING),
        .height = screen_height - (tab_bar.y + tab_bar.height + 2 * PADDING),
    };

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
    FILE *pico = openserial(pico_tty);
    if (pico == NULL) goto raylib_teardown;

    char pico_in[TTY_MSG_MAX];
    while (!WindowShouldClose()) {
        if (fgets(pico_in, TTY_MSG_MAX, pico) != NULL) {
	  parse_graph_message(pico_in, graph_rect);
        } else {
          //  perror("failed to read pico_in");
        }

        BeginDrawing();
        ClearBackground(WHITE);

	const unsigned int tabs_len = graphs_to_tabs(tabs, graphs, graphs_len);
        GuiTabBar(tab_bar, (const char **)tabs, tabs_len, &active_tab);

	if (graphs_len > 0) graph_draw(&graphs[active_tab]);

        GuiGroupBox(control_group, "Controller Gains");
        p_gain = GuiSliderBar(p_gain_slider, "P", TextFormat("%.2f", p_gain), p_gain, 0, 1);
        i_gain = GuiSliderBar(i_gain_slider, "I", TextFormat("%.2f", i_gain), i_gain, 0, 1);        d_gain = GuiSliderBar(d_gain_slider, "D", TextFormat("%.2f", d_gain), d_gain, 0, 1);

        EndDrawing();
    }

    // pico_close:
    fclose(pico);

raylib_teardown:
    CloseWindow();
    free_graphs();

    panic_on_error();

    return EXIT_SUCCESS;
}
