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
    }
  };

  return new Chart(ctx, config);
}

function connectToWebSocket(graph) {
  const webSocket = new WebSocket("ws://localhost:8080/consumers/ws");
  webSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const graphData = graph.data.datasets[0].data;

    graphData.push({ x: data.timestamp, y: data.gyroPitch });
    if (graphData.length > 100) {
      graphData.shift();
    }

    graph.update();
  };
}
