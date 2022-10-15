package web

import (
	"log"
	"net/http"
	"path"

	"github.com/go-chi/chi/v5"
)

type Endpoint struct {
	Path   string
	Method string
}

type Handler func(http.ResponseWriter, *http.Request) error

type Controller struct {
	BasePath string
	Handlers map[Endpoint]Handler
}

func (c *Controller) Register(router chi.Router) {
	for endpoint, handler := range c.Handlers {
		path := path.Join(c.BasePath, endpoint.Path)
		router.Method(endpoint.Method, path, ControllerMiddleware(handler))
		log.Printf("Registered handler for %s %s", endpoint.Method, path)
	}
}
