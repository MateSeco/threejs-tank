import {
  CanvasTexture,
  BoxBufferGeometry,
  MeshLambertMaterial,
  Mesh,
  Vector2,
} from "three";

function getCarSideTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 32;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 128, 32);

  context.fillStyle = "#666666";
  context.fillRect(10, 8, 38, 24);
  context.fillRect(58, 8, 60, 24);

  return new CanvasTexture(canvas);
}

function getCarFrontTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 32;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 128, 32);

  context.fillStyle = "#666666";
  context.fillRect(10, 8, 108, 24);

  return new CanvasTexture(canvas);
}

export default function createCabin() {
  const carFrontTexture = getCarFrontTexture();
  const carBackTexture = getCarFrontTexture();
  const carRightTexture = getCarSideTexture();
  const carLeftTexture = getCarSideTexture();
  carLeftTexture.center = new Vector2(0.5, 0.5);
  carLeftTexture.rotation = Math.PI;
  carLeftTexture.flipY = false;

  const geometry = new BoxBufferGeometry(33, 12, 24);
  const carCabin = new Mesh(geometry, [
    new MeshLambertMaterial({ map: carFrontTexture }),
    new MeshLambertMaterial({ map: carBackTexture }),
    new MeshLambertMaterial({ color: 0xffffff }),
    new MeshLambertMaterial({ color: 0xffffff }),
    new MeshLambertMaterial({ map: carRightTexture }),
    new MeshLambertMaterial({ map: carLeftTexture }),
  ]);

  return carCabin;
}
