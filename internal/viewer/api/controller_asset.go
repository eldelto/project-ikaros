package api

import (
	"net/http"

	"github.com/eldelto/ikaros/internal/web"
)

func NewAssetController() *web.Controller {
	return &web.Controller{
		BasePath: "/assets",
		Handlers: map[web.Endpoint]web.Handler{
			{Method: "GET", Path: "/*"}: GetAsset,
		},
	}
}

func GetAsset(w http.ResponseWriter, r *http.Request) error {
	next := http.FileServer(http.FS(assetsFS))
	next = web.StaticContentMiddleware(next)
	next.ServeHTTP(w, r)

	return nil
}
