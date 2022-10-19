.PHONY: build
build: bin/tower bin/generator

bin/tower: .FORCE internal/tower/api/assets/index.js
	@go build -o bin/tower cmd/tower/main.go

internal/tower/api/assets/index.js: $(wildcard analyzer-web/*.js)
	@analyzer-web/node_modules/.bin/esbuild analyzer-web/index.js \
		--bundle --minify --outfile=internal/tower/api/assets/index.js

bin/generator: .FORCE
	@go build -o bin/generator cmd/generator/main.go

.PHONY: download
download:
	@echo Download go.mod dependencies
	@go mod download

.PHONY: install-tools
install-tools: download
	@echo Installing tools from tools.go
	@cat tools.go | grep _ | awk -F'"' '{print $$2}' | xargs -tI % go install %

.PHONY: run
run: build
	@echo Starting Tower
	@bin/tower

.PHONY: run-loop
run-loop:
	@reflex -r "\.(go|html|css|js)$$" -R ".*node_modules.*" -s make run

.PHONY: test
test:
	@echo Testing Pythia
	@richgo test ./...

.PHONY: test-loop
test-loop:
	@echo Waiting for file changes ...
	@reflex -r '\.go$$' make test

.PHONY: clean
clean:
	@rm bin/*

.FORCE:
