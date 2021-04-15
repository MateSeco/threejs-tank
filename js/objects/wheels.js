import { BoxBufferGeometry, MeshLambertMaterial, Mesh } from "three";

export default function createWheels() {
  const geometry = new BoxBufferGeometry(12, 12, 33);
  const material = new MeshLambertMaterial({ color: 0x333333 });
  const wheel = new Mesh(geometry, material);
  return wheel;
}
