import Chart from "chart.js/auto";

window.onload = function () {
  const graph = init();
  connectToWebSocket(graph);
};

function init() {
  const ctx = document.getElementById("graph").getContext("2d");

  const config = {
    type: "line",
    data: {
      datasets: [{
        label: "accelerometer0",
        borderColor: "#4287f5",
        backgroundColor: "#4287f5",
        data: []
      }],
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
  webSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const graphData = graph.data.datasets[0].data;

    graphData.push({ x: data.timestamp, y: data.generator });
    if (graphData.length > 200) {
      graphData.shift();
    }

    graph.update();
  };
}

function constructWebsocketUrl(endpoint) {
  const host = window.location.host;
  const wsProtocol = window.location.protocol == "https" ? "wss" : "ws";

  return wsProtocol + "://" + host + endpoint;
}
