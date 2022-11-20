import Chart from "chart.js/auto";
import ColorHash from "color-hash";
import * as THREE from "three";
import { Quaternion } from "three";

const colorHash = new ColorHash();

window.onload = function () {
  connectToWebSocket();
};

const graphMap = new Map();
function initGraph(name) {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "graph-" + name);

  const graphContent = document.querySelector("#graph-content");
  graphContent.appendChild(canvas);

  const ctx = canvas.getContext("2d");

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
      },
      plugins: {
        title: {
          display: true,
          text: name
        }
      }
    }
  };

  const graph = new Chart(ctx, config);
  graphMap.set(name, graph);

  return graph;
}

function connectToWebSocket() {
  const webSocket = new WebSocket(constructWebsocketUrl("/consumers/ws"));
  webSocket.onmessage = (message) => {
    const event = JSON.parse(message.data);
    const sensorMap = parseEventToMap(event);

    if (event.graph === "inclination") {
      update3d(sensorMap);
    } else {
      pushSensorData(event.graph, sensorMap, event.timestamp);
    }
  };
}

function parseEventToMap(event) {
  const sensorMap = new Map();
  Object.keys(event).forEach((key) => {
    if (key !== "timestamp" && key !== "graph") {
      sensorMap.set(key, event[key]);
    }
  });

  return sensorMap;
}

function pushSensorData(graphName, sensorMap, timestamp) {
  let graph = graphMap.get(graphName)
  if (graph === undefined) {
    graph = initGraph(graphName);
  }

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
  const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";

  return wsProtocol + "://" + host + endpoint;
}

let quaternion = new Quaternion(0, 0, 0, 1);
let is3dInitialized = false;
function init3d() {
  const canvas = document.getElementById("3d");

  //create a scene
  const scene = new THREE.Scene();

  //create a cube
  const cube = new THREE.Mesh(
    //box geometry with a width, height and depth
    new THREE.BoxGeometry(1, 0.5, 2),

    //apply a mesh basic material to our mesh
    new THREE.MeshLambertMaterial({
      color: 0x00ffff
    })
  );
  //add our mesh to the scene
  scene.add(cube);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  scene.add(camera);
  camera.position.x = -2;
  camera.position.y = 2;
  camera.position.z = 3;
  camera.rotateX(-0.5);
  camera.rotateY(-0.5);
  camera.rotateZ(-0.3);

  const ambientLight = new THREE.HemisphereLight(0xcccccc, 0.4);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.8);
  camera.add(pointLight);

  //create renderer
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

  const updater = () => {
    //call the same function again
    window.requestAnimationFrame(updater);

    cube.setRotationFromQuaternion(quaternion);

    //render the scene again with every function call
    renderer.render(scene, camera)
  };

  updater();
}

function update3d(sensorMap) {
  if (!is3dInitialized) {
    init3d();
    is3dInitialized = true;
  }

  quaternion.x = -sensorMap.get("y");
  quaternion.y = -sensorMap.get("z");
  quaternion.z = sensorMap.get("x");
  quaternion.w = sensorMap.get("w");
};