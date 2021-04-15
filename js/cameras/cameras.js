import { PerspectiveCamera, OrthographicCamera } from "three";

const [fov, aspect, near, far] = [45, 2, 0.1, 100];
export const cameraPerspective = new PerspectiveCamera(fov, aspect, near, far);

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const cameraOrto = new OrthographicCamera(
  cameraWidth / -2, // left
  cameraWidth / 2, // right
  cameraHeight / 2, // top
  cameraHeight / -2, // bottom
  0, // near plane
  1000 // far plane
);
cameraOrto.position.set(200, 200, 200);
cameraOrto.lookAt(0, 10, 0);

export const cameras = [cameraPerspective, cameraOrto];
