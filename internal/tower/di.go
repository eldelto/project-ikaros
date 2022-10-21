package tower

import (
	"github.com/eldelto/ikaros/internal/tower/api"
	"github.com/eldelto/ikaros/internal/tower/broker"
	"github.com/eldelto/ikaros/internal/web"
)

type Container struct {
	AssetController     *web.Controller
	TemplateController  *web.Controller
	WebSocketController *web.Controller
}

func Init() *Container {
	// Services
	broker := broker.New()

	// API
	assetControler := api.NewAssetController()
	templateControler := api.NewTemplateController()
	webSocketController := api.NewWebSocketController(broker)

	return &Container{
		AssetController:     assetControler,
		TemplateController:  templateControler,
		WebSocketController: webSocketController,
	}
}

func (c *Container) Close() {
}
