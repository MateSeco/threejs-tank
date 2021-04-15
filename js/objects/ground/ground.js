import { PlaneGeometry, MeshLambertMaterial, Mesh, DoubleSide } from "three";

export default function createGround() {
  const geometry = new PlaneGeometry(400, 400);
  const material = new MeshLambertMaterial({
    color: 0xcc8866,
  });
  const ground = new Mesh(geometry, material);
  ground.rotation.x = Math.PI * -0.5;
  ground.receiveShadow = true;

  return ground;
}
