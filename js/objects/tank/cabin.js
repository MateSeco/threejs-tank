import {
  CanvasTexture,
  BoxBufferGeometry,
  MeshLambertMaterial,
  Mesh,
  Vector2,
} from "three";

function getTankSideTexture() {
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

function getTankFrontTexture() {
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
  const tankFrontTexture = getTankFrontTexture();
  const tankBackTexture = getTankFrontTexture();
  const tankRightTexture = getTankSideTexture();
  const tankLeftTexture = getTankSideTexture();
  tankLeftTexture.center = new Vector2(0.5, 0.5);
  tankLeftTexture.rotation = Math.PI;
  tankLeftTexture.flipY = false;

  const geometry = new BoxBufferGeometry(33, 12, 24);
  const tankCabin = new Mesh(geometry, [
    new MeshLambertMaterial({ map: tankFrontTexture }),
    new MeshLambertMaterial({ map: tankBackTexture }),
    new MeshLambertMaterial({ color: 0xffffff }),
    new MeshLambertMaterial({ color: 0xffffff }),
    new MeshLambertMaterial({ map: tankRightTexture }),
    new MeshLambertMaterial({ map: tankLeftTexture }),
  ]);

  return tankCabin;
}
