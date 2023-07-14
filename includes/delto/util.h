#ifndef DELTO_UTIL
#define DELTO_UTIL

#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

/* Error handling */
static char error_msg[100] = "";

static int dlt_error(char msg[100]) {
    memcpy(error_msg, msg, sizeof(error_msg));
    return -1;
}

void dlt_panic(void) {
    fputs("\033[31mError: ", stderr);
    perror(error_msg);
    fputs("\033[0m", stderr);
    exit(EXIT_FAILURE);
}

void dlt_fatal_error(char msg[100]) {
    dlt_error(msg);
    dlt_panic();
}

void dlt_panic_on_error(void) {
    if (error_msg[0] != '\0') dlt_panic();
}

/* String functions */
bool dlt_string_equals(char *a, char *b) {
  return strncmp(a, b, 20) == 0;
}

/* Random utility functions */
double dlt_clamp_value(double value, double min, double max) {
    if (value < min) return min;
    else if (value > max) return max;
    else return value;
}

#endif
