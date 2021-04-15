import { AmbientLight, DirectionalLight } from "three";

const ambientLight = new AmbientLight(0xffffff, 0.5);

const directionalLight = new DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);

export const lights = [ambientLight, directionalLight];
