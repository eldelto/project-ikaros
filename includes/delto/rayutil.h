#ifndef DELTO_RAYUTIL
#define DELTO_RAYUTIL

#include <stdlib.h>

#include "raylib.h"
#undef RAYGUI_IMPLEMENTATION
#include "raygui.h"

#define PADDING 20

const Color random_colors[] = {
  GREEN,
  BLUE,
  PINK,
  LIME,
  PURPLE,
  ORANGE,
  BROWN,
  RED,
};
unsigned int random_color_index = 0;
static Color get_random_color(void) {
  if (++random_color_index > (sizeof(random_colors) / sizeof(Color)) - 1)
    random_color_index = 0;
  return random_colors[random_color_index];
}

/* RayGUI helper */
Rectangle grouped_slider(const Rectangle group, const int index) {
  return (Rectangle) {
    .x = group.x + PADDING,
      .y = group.y + PADDING + (index * (15 + PADDING)),
      .width = group.width - (2 * PADDING + 10),
      .height = 20,
  };
}

Rectangle grouped_button(const Rectangle group, const int index) {
  return (Rectangle) {
    .x = group.x + PADDING,
      .y = group.y + PADDING + (index * (15 + PADDING)),
      .width = group.width - (2 * PADDING + 10),
      .height = 30,
  };
}

/* Graph */
#define GRAPH_NAME_MAX 20
struct graph_data_set {
  double* data;
  unsigned int data_len;
  unsigned int cursor;
  char name[GRAPH_NAME_MAX];
  Color color;
};

static struct graph_data_set graph_data_set_new(unsigned int length, char* name, Color color) {
  double* data = calloc(length, sizeof(double));

  struct graph_data_set ds = {
    .data = data,
    .data_len = length,
    .cursor = 0,
    .color = color,
  };
  strlcpy(ds.name, name, sizeof(ds.name) - 1);

  return ds;
}

static void graph_data_set_free(struct graph_data_set* ds) {
  free(ds->data);
  ds->data = NULL;
}

void graph_data_set_push(struct graph_data_set* ds, double value) {
  ds->cursor = ++ds->cursor % ds->data_len;
  ds->data[ds->cursor] = value;
}

double graph_data_set_get(const struct graph_data_set* const ds, unsigned int i) {
  const unsigned int index = (ds->cursor + 1 + i) % ds->data_len;
  return ds->data[index];
}

#define DATA_SETS_MAX 5
struct graph {
  Rectangle rect;
  char name[GRAPH_NAME_MAX];
  struct graph_data_set data_sets[DATA_SETS_MAX];
  unsigned int data_sets_len;
};

struct graph graph_new(const Rectangle rect, char *name) {
  struct graph g = {
    .rect = rect,
    .data_sets = {0},
    .data_sets_len = 0,
  };
  strlcpy(g.name, name, sizeof(g.name) - 1);

  return g;
}

void graph_free(struct graph* lg) {
  for (unsigned int i = 0; i < lg->data_sets_len; ++i)
    graph_data_set_free(&lg->data_sets[i]);
}

struct graph_data_set* graph_add_data_set(struct graph* lg, char* name, Color color) {
  struct graph_data_set data_set = graph_data_set_new(lg->rect.width, name, color);
  lg->data_sets_len++;
  if (lg->data_sets_len > DATA_SETS_MAX)
    lg->data_sets_len = DATA_SETS_MAX;

  const unsigned int i = lg->data_sets_len - 1;
  lg->data_sets[i] = data_set;

  return &lg->data_sets[i];
}

struct graph_data_set * graph_push_or_add(struct graph *g, char *name, double value) {
  struct graph_data_set *data_set = NULL;
  for(unsigned int i = 0; i < g->data_sets_len; ++i) {
    struct graph_data_set *ds = &g->data_sets[i];
    if (strncmp(name, ds->name, sizeof(ds->name) - 1) == 0) {
      data_set = ds;
      break;
    }
  }

  if (data_set == NULL) {
    data_set = graph_add_data_set(g, name, get_random_color());
  }

  graph_data_set_push(data_set, value);
  return data_set;
}

void graph_draw(const struct graph* const lg) {
  const int x = lg->rect.x;
  const int y = lg->rect.y;

  const int y_mid = y + (lg->rect.height / 2);

  DrawLine(x, y_mid, x + lg->rect.width, y_mid, BLACK);
  DrawLine(x, y, x, y + lg->rect.height, BLACK);

  for (unsigned int j = 0; j < lg->data_sets_len; ++j) {
    const struct graph_data_set data_set = lg->data_sets[j];

    DrawLine(x + PADDING, y + 5 + (PADDING * j), x + PADDING + 10, y + 5 + (PADDING * j), data_set.color);
    DrawText(data_set.name, x + PADDING + 20, y + (PADDING * j), 10, BLACK);

    for(unsigned int i = 1; i < data_set.data_len; ++i) {
      const int x_line = x + i;
      const int y_previous = y_mid - graph_data_set_get(&data_set, i - 1);
      const int y = y_mid - graph_data_set_get(&data_set, i);
      DrawLineEx((Vector2){x_line-1, y_previous}, (Vector2){x_line, y}, 1.5, data_set.color);
    }
  }
}

#endif
