package api

import (
	"fmt"
	"net/http"

	"github.com/eldelto/ikaros/internal/tower/broker"
	"github.com/eldelto/ikaros/internal/web"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{}

func NewWebSocketController(broker *broker.Broker) *web.Controller {
	return &web.Controller{
		BasePath: "/",
		Handlers: map[web.Endpoint]web.Handler{
			{Method: "GET", Path: "/consumers/ws"}: connectConsumer(broker),
			{Method: "GET", Path: "/producers/ws"}: connectProducer(broker),
		},
	}
}

func connectConsumer(broker *broker.Broker) web.Handler {
	return func(w http.ResponseWriter, r *http.Request) error {
		conn, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			return fmt.Errorf("failed to upgrade websocket connection: %w", err)
		}

		return broker.RegisterConsumer(conn)
	}
}

func connectProducer(broker *broker.Broker) web.Handler {
	return func(w http.ResponseWriter, r *http.Request) error {
		conn, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			return fmt.Errorf("failed to upgrade websocket connection: %w", err)
		}

		return broker.RegisterProducer(conn)
	}
}
