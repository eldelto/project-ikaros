.PHONY: build
build: bin/analyzer bin/generator

bin/analyzer: .FORCE internal/analyzer/api/assets/index.js
	@go build -o bin/analyzer cmd/analyzer/main.go

internal/analyzer/api/assets/index.js: $(wildcard analyzer-web/*.js)
	@analyzer-web/node_modules/.bin/esbuild analyzer-web/index.js \
		--bundle --minify --outfile=internal/analyzer/api/assets/index.js

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
run:
	@echo Starting Analyser
	@go run cmd/analyzer/main.go

.PHONY: run-loop
run-loop:
	@reflex -r '\.(go|html|css|js)$$' -s make run

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
