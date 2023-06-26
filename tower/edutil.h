#ifndef EDUTIL
#define EDUTIL

#include <stdlib.h>
#include <string.h>

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

#endif
