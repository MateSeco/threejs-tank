import { AmbientLight, DirectionalLight } from "three";

const ambientLight = new AmbientLight(0xffffff, 0.4);

const directionalLight = new DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(-100, 100, 0);
directionalLight.castShadow = true;

const d = 200;
directionalLight.shadow.camera.left = -d;
directionalLight.shadow.camera.right = d;
directionalLight.shadow.camera.top = d;
directionalLight.shadow.camera.bottom = -d;

export const lights = [ambientLight, directionalLight];
