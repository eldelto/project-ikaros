package api

import (
	"net/http"

	"github.com/eldelto/ikaros/internal/web"
	"github.com/go-chi/chi/v5"
)

const templatePathUrlParam = "templatePath"

var templater = web.NewTemplater(templatesFS)

func NewTemplateController() *web.Controller {
	return &web.Controller{
		BasePath: "/",
		Handlers: map[web.Endpoint]web.Handler{
			{Method: "GET", Path: "/"}:                                  getTemplate,
			{Method: "GET", Path: "/{" + templatePathUrlParam + ":.*}"}: getTemplate,
		},
	}
}

func getTemplate(w http.ResponseWriter, r *http.Request) error {
	templatePath := chi.URLParam(r, templatePathUrlParam)
	if templatePath == "" {
		templatePath = "index.html"
	}

	return templater.Write(templatePath, map[string]string{}, w)
}
