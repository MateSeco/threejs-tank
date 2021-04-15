import * as THREE from "three";
import { cameras } from "./cameras/cameras";
import { lights } from "./lights/lights";
import createCar from "./objects/car";

const canvas = document.querySelector("#canvas");

const scene = new THREE.Scene();

lights.forEach((light) => scene.add(light));
const car = createCar();
scene.add(car);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, cameras[1]);
