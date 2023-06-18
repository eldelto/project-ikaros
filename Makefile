.DELETE_ON_ERROR:

# Use GCC as compiler.
CC := gcc
WEB_CC := emcc

# Set additional compiler flags.
# TODO: Enable stricter error checking again after figuring out how to compile
#       raylib in a more lenient way.
# CFLAGS  := -Wall -Werror -Wextra -pedantic-errors -std=c17 -MMD -MP
CFLAGS  := -Wall -Wextra -std=c17 -MMD -MP
LDFLAGS += -Ldeps/raylib/src -lraylib

CFLAGS += -Ideps/raylib/src -Ideps/raygui/src
CFLAGS += -framework CoreVideo -framework IOKit -framework Cocoa -framework GLUT -framework OpenGL

# High-level commands
.PHONY: build
build: deps \
bin/tower \
bin/flight-controller.uf2

.PHONY: clean
clean:
	rm -rf bin/*
	find . -name '*.o' | xargs rm
	find . -name '*.d' | xargs rm
	rm -rf flight-controller/build

# Tower
bin/tower: tower/tower.c
	$(CC) $(CFLAGS) $^ -o $@ $(CFLAGS) $(LDFLAGS)

# Flight-Controller
export PICO_SDK_PATH=../../../pico/pico-sdk
export PICO_BOARD=pico_w

flight-controller/build/Makefile: flight-controller/CMakeLists.txt
	cd flight-controller; \
	mkdir -p build; \
	cd build; \
	cmake ..

bin/flight-controller.uf2: flight-controller/build/Makefile $(wildcard flight-controller/*.h) $(wildcard flight-controller/*.c)
	rm -f bin/flight-controller.uf2
	cd flight-controller/build; \
	make
	cp flight-controller/build/flight-controller.uf2 bin/flight-controller.uf2

.PHONY: flash-pico
flash-pico: bin/flight-controller.uf2
	picotool load -f bin/flight-controller.uf2

# Deps
deps: deps/raylib/src/libraylib.a

.PHONY: deps-clean
deps-clean:
	find deps -name '*.o' | xargs rm
	find deps -name '*.d' | xargs rm
	rm -rf deps/raylib/src/libraylib.a

deps/raylib/src/libraylib.a:
	cd deps/raylib/src && \
	$(MAKE) PLATFORM=PLATFORM_DESKTOP

-include *.d
