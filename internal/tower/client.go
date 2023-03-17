package tower

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/url"
	"strings"
	"time"

	"github.com/gorilla/websocket"
)

type Client struct {
	host string
	conn *websocket.Conn
}

func NewClient(host string) *Client {
	return &Client{
		host: host,
		conn: nil,
	}
}

func (c *Client) Connect() error {
	if c.conn != nil {
		return nil
	}

	scheme := "wss"
	if strings.HasPrefix(c.host, "localhost") {
		scheme = "ws"
	}

	url := url.URL{Scheme: scheme, Host: c.host, Path: "/producers/ws"}

	conn, _, err := websocket.DefaultDialer.Dial(url.String(), nil)
	if err != nil {
		return fmt.Errorf("failed to connect to '%s': %w", url.String(), err)
	}

	c.conn = conn
	return nil
}

func (c *Client) Close() error {
	if c == nil || c.conn == nil {
		return nil
	}

	if err := c.conn.Close(); err != nil {
		return fmt.Errorf("failed to close websocket connection to host '%s': %w", c.host, err)
	}

	c.conn = nil
	return nil
}

func (c *Client) Send(data map[string]any) error {
	data["timestamp"] = time.Now()
	buffer := bytes.Buffer{}
	if err := json.NewEncoder(&buffer).Encode(data); err != nil {
		return fmt.Errorf("failed to encode data point: %w", err)
	}

	if err := c.conn.WriteMessage(websocket.TextMessage, buffer.Bytes()); err != nil {
		return fmt.Errorf("failed to write data to connection: %w", err)
	}

	return nil
}
