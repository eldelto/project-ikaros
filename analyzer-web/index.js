import Chart from "chart.js/auto";

window.onload = function () {
  init();
  connectToWebSocket();
};

function init() {
  const ctx = document.getElementById("graph").getContext("2d");

  const config = {
    type: "line",
    data: {
      datasets: [{
        label: "accelerometer0",
        data: [{ x: "2016-12-25", y: 20 }, { x: "2016-12-26", y: 10 }]
      }]
    },
  };

  const mainGraph = new Chart(ctx, config);
}

function connectToWebSocket() {
  const webSocket = new WebSocket("ws://localhost:8080/consumers/ws");
  webSocket.onmessage = (socket, event) => {
    console.log(event);
  };
}
