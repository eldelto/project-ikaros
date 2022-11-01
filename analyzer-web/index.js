import Chart from "chart.js/auto";
import ColorHash from "color-hash";

const colorHash = new ColorHash();

window.onload = function () {
  const graph = init();
  connectToWebSocket(graph);
};

function init() {
  const ctx = document.getElementById("graph").getContext("2d");

  const config = {
    type: "line",
    data: {
      datasets: [],
    },
    options: {
      animation: false,
      normalized: true,
      spanGaps: true,
      elements: {
        point: {
          radius: 0
        }
      }
    }
  };

  return new Chart(ctx, config);
}

function connectToWebSocket(graph) {
  const webSocket = new WebSocket(constructWebsocketUrl("/consumers/ws"));
  webSocket.onmessage = (message) => {
    const event = JSON.parse(message.data);
    const sensorMap = parseEventToMap(event);
    pushSensorData(graph, sensorMap, event.timestamp);
  };
}

function parseEventToMap(event) {
  const sensorMap = new Map();
  Object.keys(event).forEach((key) => {
    if (key !== "timestamp") {
      sensorMap.set(key, event[key]);
    }
  });

  return sensorMap;
}

function pushSensorData(graph, sensorMap, timestamp) {
  Array.from(sensorMap.keys())
    .sort()
    .forEach((key, index) => {
      const value = sensorMap.get(key);
      if (graph.data.datasets.length < index + 1) {
        const color = colorHash.hex(key);
        const newDataset = {
          label: key,
          borderColor: color,
          backgroundColor: color,
          data: []
        };

        graph.data.datasets.push(newDataset);
      }

      const graphData = graph.data.datasets[index].data;
      const newData = { x: timestamp, y: value };
      graphData.push(newData);
      if (graphData.length > 200) {
        graphData.shift();
      }

    });

  graph.update();
}

function constructWebsocketUrl(endpoint) {
  const host = window.location.host;
  const wsProtocol = window.location.protocol == "https" ? "wss" : "ws";

  return wsProtocol + "://" + host + endpoint;
}
