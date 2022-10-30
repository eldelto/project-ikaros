.PHONY: build
build: bin/tower bin/generator bin/serial-relay

bin/tower: .FORCE internal/tower/api/assets/index.js
	@go build -o bin/tower cmd/tower/main.go

internal/tower/api/assets/index.js: $(wildcard analyzer-web/*.js)
	@analyzer-web/node_modules/.bin/esbuild analyzer-web/index.js \
		--bundle --minify --outfile=internal/tower/api/assets/index.js

bin/generator: .FORCE
	@go build -o bin/generator cmd/generator/main.go

bin/serial-relay: .FORCE
	@go build -o bin/serial-relay cmd/serial-relay/main.go

.PHONY: download
download:
	@go mod download
	@npm install --prefix analyzer-web/

.PHONY: init
init: download
	@cat tools.go | grep _ | awk -F'"' '{print $$2}' | xargs -tI % go install %

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
	@richgo test ./...

.PHONY: lint
lint:
	@go mod tidy
	@go fmt ./...
	@go vet ./...

.PHONY: test-loop
test-loop:
	@echo Waiting for file changes ...
	@reflex -r "\.(go|html|css|js)$$" -R ".*node_modules.*" make test

.PHONY: clean
clean:
	@rm bin/*

.FORCE:
