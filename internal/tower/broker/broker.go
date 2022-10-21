package broker

import (
	"fmt"
	"log"

	"github.com/eldelto/ikaros/internal/web"
	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

type consumerID struct {
	uuid.UUID
}

type consumer struct {
	id       consumerID
	wsClient *web.WSClient
}

func newConsumer(broker *Broker, conn *websocket.Conn) (*consumer, error) {
	id, err := uuid.NewRandom()
	if err != nil {
		return nil, fmt.Errorf("failed to create consumer ID: %w", err)
	}
	consumerID := consumerID{id}

	onMessage := func(client *web.WSClient, msg string) error {
		client.WriteMessage(msg)
		return nil
	}

	onError := func() {
		broker.RemoveConsumer(consumerID)
	}

	client := web.NewWSClient(conn, onMessage, onError)

	return &consumer{
		id:       consumerID,
		wsClient: client,
	}, nil
}

type producerID struct {
	uuid.UUID
}

type producer struct {
	id       producerID
	wsClient *web.WSClient
}

func newProducer(broker *Broker, conn *websocket.Conn) (*producer, error) {
	id, err := uuid.NewRandom()
	if err != nil {
		return nil, fmt.Errorf("failed to create producer ID: %w", err)
	}
	producerID := producerID{id}

	onMessage := func(client *web.WSClient, msg string) error {
		broker.ConsumerBroadcast(msg)
		return nil
	}

	onError := func() {
		broker.RemoveProducer(producerID)
	}

	client := web.NewWSClient(conn, onMessage, onError)

	return &producer{
		id:       producerID,
		wsClient: client,
	}, nil
}

type Broker struct {
	consumers map[consumerID]consumer
	producers map[producerID]producer
}

func New() *Broker {
	return &Broker{
		consumers: map[consumerID]consumer{},
		producers: map[producerID]producer{},
	}
}

func (b *Broker) RegisterConsumer(conn *websocket.Conn) error {
	consumer, err := newConsumer(b, conn)
	if err != nil {
		return err
	}

	b.consumers[consumer.id] = *consumer
	log.Printf("Registered consumer %s", consumer.id)
	return nil
}

func (b *Broker) RemoveConsumer(id consumerID) {
	delete(b.consumers, id)
	log.Printf("Removed consumer %s", id)
}

func (b *Broker) RegisterProducer(conn *websocket.Conn) error {
	producer, err := newProducer(b, conn)
	if err != nil {
		return err
	}

	b.producers[producer.id] = *producer
	log.Printf("Registered producer %s", producer.id)
	return nil
}

func (b *Broker) RemoveProducer(id producerID) {
	delete(b.producers, id)
	log.Printf("Removed producer %s", id)
}

func (b *Broker) ConsumerBroadcast(msg string) {
	for _, consumer := range b.consumers {
		consumer.wsClient.WriteMessage(msg)
	}
}
