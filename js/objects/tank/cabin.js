import {
  CanvasTexture,
  SphereGeometry,
  MeshLambertMaterial,
  Mesh,
  Vector2,
} from "three";

export default function createCabin() {
  const geometry = new SphereGeometry(
    15,
    16,
    6,
    0,
    2 * Math.PI,
    0,
    Math.PI * 0.55
  );
  const material = new MeshLambertMaterial({ color: 0x4b5320 });
  const tankCabin = new Mesh(geometry, material);

  return tankCabin;
}
