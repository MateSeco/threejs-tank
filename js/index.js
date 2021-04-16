import * as THREE from "three";
import { cameras } from "./cameras/cameras";
import { lights } from "./lights/lights";
import createTrajectory from "./objects/tank/trajectory";
import createTank from "./objects/tank/tank";
import createGround from "./objects/ground/ground";
import axisGridHelper from "./helpers/axisHelper";

const canvas = document.querySelector("#canvas");

// Scene
const scene = new THREE.Scene();

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Lights
lights.forEach((light) => scene.add(light));

// Objects
const trajectory = createTrajectory();
scene.add(trajectory);

const tank = createTank();
scene.add(tank);

const ground = createGround();
scene.add(ground);

// Helpers
axisGridHelper(trajectory, "trajectory");
axisGridHelper(ground, "ground");
axisGridHelper(tank, "tank");
const helper = new THREE.CameraHelper(lights[1].shadow.camera);
scene.add(helper);

// Animation
function animate() {
  requestAnimationFrame(animate);
  tank.rotation.y += 0.01;
  tank.translateX(1);
  tank
    .getObjectByName("wheels")
    .children.map((wheel) => (wheel.rotation.y -= 0.05));
  renderer.render(scene, cameras[0]);
}

animate();
