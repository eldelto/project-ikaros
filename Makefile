.PHONY: build
build:
	@echo Building cmd/viewer/main.go
	@go build -o bin/viewer cmd/viewer/main.go

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
	@echo Starting Viewer
	@go run cmd/viewer/main.go

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
