import { CylinderGeometry, MeshLambertMaterial, Mesh } from "three";

export default function createWheels() {
  const geometry = new CylinderGeometry(6, 6, 33, 6);
  const material = new MeshLambertMaterial({ color: 0x333333 });
  const wheel = new Mesh(geometry, material);
  wheel.rotation.x = Math.PI * 0.5;
  return wheel;
}
