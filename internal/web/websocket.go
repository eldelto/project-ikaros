package web

import (
	"fmt"
	"log"

	"github.com/gorilla/websocket"
)

type MessageHandler func(client *WSClient, msg string) error
type CloseHandler func()

type WSClient struct {
	conn    *websocket.Conn
	inbox   chan string
	onClose CloseHandler
}

func NewWSClient(conn *websocket.Conn, onMessage MessageHandler, onClose CloseHandler) *WSClient {
	client := WSClient{
		conn:    conn,
		inbox:   make(chan string, 100),
		onClose: onClose,
	}

	go client.readMessages(onMessage)
	go client.writeMessages()

	return &client
}

func (c *WSClient) WriteMessage(msg string) {
	c.inbox <- msg
}

func (c *WSClient) Close() error {
	defer c.onClose()

	if err := c.conn.Close(); err != nil {
		return fmt.Errorf("failed to close WSClient connection: %w", err)
	}

	return nil
}

func (c *WSClient) readMessages(onMessage MessageHandler) error {
	defer close(c.inbox)

	for {
		msgType, msg, err := c.conn.ReadMessage()
		if err != nil {
			return fmt.Errorf("failed to read message from websocket connection: %w", err)
		}

		if msgType != websocket.TextMessage {
			log.Println("Received unsupported message type - skipping message.")
			continue
		}

		if err := onMessage(c, string(msg)); err != nil {
			return fmt.Errorf("failed to handle message '%s': %w", string(msg), err)
		}
	}
}

func (c *WSClient) writeMessages() error {
	defer c.Close()

	for msg := range c.inbox {
		if err := c.conn.WriteMessage(websocket.TextMessage, []byte(msg)); err != nil {
			return fmt.Errorf("failed to write message to websocket connection '%s': %w", msg, err)
		}
	}

	return nil
}
