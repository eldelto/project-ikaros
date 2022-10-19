package tower

import (
	"github.com/eldelto/ikaros/internal/tower/api"
	"github.com/eldelto/ikaros/internal/web"
)

type Container struct {
	AssetController    *web.Controller
	TemplateController *web.Controller
}

func Init() *Container {
	// API
	assetControler := api.NewAssetController()
	templateControler := api.NewTemplateController()

	return &Container{
		AssetController:    assetControler,
		TemplateController: templateControler,
	}
}

func (c *Container) Close() {
}
