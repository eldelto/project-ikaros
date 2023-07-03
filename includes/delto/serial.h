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

    struct termios tty;
    cfsetospeed(&tty, B115200);
    cfsetispeed(&tty, B115200);

    // Based on the settings in https://github.com/bugst/go-serial
    tty.c_lflag &= ~ICANON;
    tty.c_lflag &= ~ECHO;
    tty.c_lflag &= ~ECHOE;
    tty.c_lflag &= ~ECHOK;
    tty.c_lflag &= ~ECHONL;
    tty.c_lflag &= ~ECHOCTL;
    tty.c_lflag &= ~ECHOPRT;
    tty.c_lflag &= ~ECHOKE;
    tty.c_lflag &= ~ISIG;
    tty.c_lflag &= ~IEXTEN;

    tty.c_iflag &= ~IXON;
    tty.c_iflag &= ~IXOFF;
    tty.c_iflag &= ~IXANY;
    tty.c_iflag &= ~INPCK;
    tty.c_iflag &= ~IGNPAR;
    tty.c_iflag &= ~PARMRK;
    tty.c_iflag &= ~ISTRIP;
    tty.c_iflag &= ~IGNBRK;
    tty.c_iflag &= ~BRKINT;
    tty.c_iflag &= ~INLCR;
    tty.c_iflag &= ~IGNCR;
    tty.c_iflag &= ~ICRNL;
    tty.c_iflag &= ~0;

    tty.c_oflag &= ~OPOST;

    tty.c_cc[VMIN] = 1;
    tty.c_cc[VTIME] = 0;
    tcsetattr(fd, TCSANOW, &tty);

    FILE *serial = fdopen(fd, "r+t");
    if (serial == NULL) {
        error("failed to convert file descriptor to FILE");
        close(fd);
        return NULL;
    }

    return serial;
}

#endif
