#ifndef DELTO_SERIAL
#define DELTO_SERIAL

#include <fcntl.h>
#include <termios.h>

#include "util.h"

FILE * openserial(char *path) {
  int fd = open(path, O_RDWR | O_NOCTTY | O_NONBLOCK);
  if (fd == -1) {
    error("failed to open tty");
    return NULL;
  }

  if (fcntl(fd, F_SETFL, FNDELAY) == -1) {
    error("failed to set tty flags");
    close(fd);
    return NULL;
  }

  struct termios options;
  tcgetattr(fd, &options); 

  cfsetispeed(&options, B115200);
  cfsetospeed(&options, B115200);
  
  options.c_cflag |= (CLOCAL | CREAD);
  tcsetattr(fd, TCSAFLUSH, &options);

  // Setting no parity (8N1)
  options.c_cflag &= ~PARENB;
  options.c_cflag &= ~CSTOPB;
  options.c_cflag &= ~CSIZE;
  options.c_cflag |= CS8;

  // Set raw input mode
  options.c_lflag &= ~(ICANON | ECHO | ECHOE | ISIG);

  // Disable software flow control
  options.c_iflag &= ~(IXON | IXOFF | IXANY);
 
  FILE *serial = fdopen(fd, "r+t");
  if (serial == NULL) {
    error("failed to convert file descriptor to FILE");
    close(fd);
    return NULL;
  }

  return serial;
}

#endif
