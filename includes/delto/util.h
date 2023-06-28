#ifndef DELTO_UTIL
#define DELTO_UTIL

#include <stdlib.h>
#include <string.h>

/* Error handling */
char error_msg[100] = "";
static int error(char msg[100]) {
  memcpy(error_msg, msg, sizeof(error_msg));
  return -1;
}

void panic(void) {
  fputs("\033[31mError: ", stderr);
  perror(error_msg);
  fputs("\033[0m", stderr);
  exit(EXIT_FAILURE);
}

void fatal_error(char msg[100]) {
  error(msg);
  panic();
}

void panic_on_error(void) {
  if (error_msg[0] != '\0') panic();
}


/* Random utility functions */
double clamp_value(double value, double min, double max) {
  if (value < min) return min;
  else if (value > max) return max;
  else return value;
}

#endif
