package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/eldelto/ikaros/internal/tower"
	"github.com/go-chi/chi/v5"
)

func main() {
	env := tower.Init()
	defer env.Close()

	port := 8080
	r := chi.NewRouter()

	// Register controllers
	env.AssetController.Register(r)
	env.TemplateController.Register(r)
	env.WebSocketController.Register(r)

	http.Handle("/", r)

	log.Printf("Tower listening on localhost:%d", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}
