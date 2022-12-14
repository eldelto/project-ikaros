.DELETE_ON_ERROR:

# High-level commands
.PHONY: build
build: bin/tower bin/generator bin/serial-relay bin/serial-monitor bin/flight-controller.uf2

.PHONY: init
init: download
	@cat tools.go | grep _ | awk -F'"' '{print $$2}' | xargs -tI % go install %

.PHONY: download
download:
	@go mod download
	@npm install --prefix analyzer-web/

.PHONY: run
run: build
	@echo Starting Tower ...
	@bin/tower

.PHONY: run-loop
run-loop:
	@reflex -r "\.(go|html|css|js)$$" -R ".*node_modules.*" -s make run

.PHONY: test
test: lint
	@echo Testing ...
	@go test ./...

.PHONY: lint
lint:
	@go mod tidy
	@go fmt ./...
	@staticcheck ./...

.PHONY: test-loop
test-loop:
	@echo Waiting for file changes ...
	@reflex -r "\.(go|html|css|js)$$" -R ".*node_modules.*" make test

.PHONY: clean
clean:
	@rm -f bin/*
	@rm -rf flight-controller/build

# Tower
bin/tower: .FORCE internal/tower/api/assets/index.js $(wildcard tower/api/assets/*.css) $(wildcard tower/api/assets/*.html)
	@go build -o bin/tower cmd/tower/main.go

internal/tower/api/assets/index.js: $(wildcard analyzer-web/*.js)
	@analyzer-web/node_modules/.bin/esbuild analyzer-web/index.js \
		--bundle --minify --outfile=internal/tower/api/assets/index.js

# Flight-Controller
export PICO_SDK_PATH=../../../pico/pico-sdk
export PICO_BOARD=pico_w

flight-controller/build/Makefile: flight-controller/CMakeLists.txt
	@cd flight-controller; \
	mkdir -p build; \
	cd build; \
	cmake ..

bin/flight-controller.uf2: flight-controller/build/Makefile $(wildcard flight-controller/*.h) $(wildcard flight-controller/*.c)
	@rm -f bin/flight-controller.uf2
	@cd flight-controller/build; \
	make
	@cp flight-controller/build/flight-controller.uf2 bin/flight-controller.uf2

.PHONY: flash-pico
flash-pico: bin/flight-controller.uf2
	@picotool load -f bin/flight-controller.uf2

# Utility programs
bin/generator: .FORCE
	@go build -o bin/generator cmd/generator/main.go

bin/serial-relay: .FORCE
	@go build -o bin/serial-relay cmd/serial-relay/main.go

bin/serial-monitor: .FORCE
	@go build -o bin/serial-monitor cmd/serial-monitor/main.go

.FORCE:
