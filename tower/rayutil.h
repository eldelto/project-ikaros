#ifndef RAYUTIL
#define RAYUTIL

#include <stdlib.h>

#include <raylib.h>
#undef RAYGUI_IMPLEMENTATION
#include <raygui.h>

#define PADDING 20

Rectangle sim_build_slider(const Rectangle group, const int index) {
  return (Rectangle) {
    .x = group.x + PADDING,
      .y = group.y + PADDING + (index * (15 + PADDING)),
      .width = group.width - (2 * PADDING + 10),
      .height = 20,
  };
}

Rectangle sim_build_button(const Rectangle group, const int index) {
  return (Rectangle) {
    .x = group.x + PADDING,
      .y = group.y + PADDING + (index * (15 + PADDING)),
      .width = group.width - (2 * PADDING + 10),
      .height = 30,
  };
}

struct sim_data_set {
  double* data;
  unsigned int data_len;
  unsigned int cursor;
  const char* name;
  Color color;
};

static struct sim_data_set sim_new_data_set(unsigned int length, char* name, Color color) {
  double* data = calloc(length, sizeof(double));

  return (struct sim_data_set) {
    .data = data,
    .data_len = length,
    .cursor = 0,
    .name = name,
    .color = color,
  };
}

static void sim_free_data_set(struct sim_data_set* ds) {
  free(ds->data);
  ds->data = NULL;
}

void sim_push_data_point(struct sim_data_set* ds, double value) {
  ds->cursor = ++ds->cursor % ds->data_len;
  ds->data[ds->cursor] = value;
}

double sim_get_data_point(const struct sim_data_set* const ds, unsigned int i) {
  const unsigned int index = (ds->cursor + 1 + i) % ds->data_len;
  return ds->data[index];
}


#define DATA_SETS_MAX 5
struct sim_graph {
  const Rectangle rect;
  struct sim_data_set data_sets[DATA_SETS_MAX];
  unsigned int data_sets_len;
};

struct sim_graph sim_new_graph(const Rectangle rect) {
  return (struct sim_graph) {
    .rect = rect,
    .data_sets = {0},
    .data_sets_len = 0,
  };
}

void sim_free_graph(struct sim_graph* lg) {
  for (unsigned int i = 0; i < lg->data_sets_len; ++i)
    sim_free_data_set(&lg->data_sets[i]);
}

struct sim_data_set* sim_add_data_set(struct sim_graph* lg, char* name, Color color) {
  struct sim_data_set data_set = sim_new_data_set(lg->rect.width, name, color);
  lg->data_sets_len++;
  if (lg->data_sets_len > DATA_SETS_MAX)
    lg->data_sets_len = DATA_SETS_MAX;

  const unsigned int i = lg->data_sets_len - 1;
  lg->data_sets[i] = data_set;

  return &lg->data_sets[i];
}

void sim_draw_graph(const struct sim_graph* const lg) {
  const int x = lg->rect.x;
  const int y = lg->rect.y;

  const int y_mid = y + (lg->rect.height / 2);

  DrawLine(x, y_mid, x + lg->rect.width, y_mid, BLACK);
  DrawLine(x, y, x, y + lg->rect.height, BLACK);

  for (unsigned int j = 0; j < lg->data_sets_len; ++j) {
    const struct sim_data_set data_set = lg->data_sets[j];

    DrawLine(x + PADDING, y + 5 + (PADDING * j), x + PADDING + 10, y + 5 + (PADDING * j), data_set.color);
    DrawText(data_set.name, x + PADDING + 20, y + (PADDING * j), 10, BLACK);

    for(unsigned int i = 1; i < data_set.data_len; ++i) {
      const int x_line = x + i;
      const int y_previous = y_mid - sim_get_data_point(&data_set, i - 1);
      const int y = y_mid - sim_get_data_point(&data_set, i);
      DrawLine(x_line-1, y_previous, x_line, y, data_set.color);
    }
  }
}

double sim_clamp_value(double value, double min, double max) {
  if (value < min) return min;
  else if (value > max) return max;
  else return value;
}

#endif
