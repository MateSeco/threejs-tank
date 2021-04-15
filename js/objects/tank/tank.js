import { Group, Mesh, BoxBufferGeometry, MeshLambertMaterial } from "three";
import createWheels from "./wheels";
import createCabin from "./cabin";

export default function createTank() {
  const tank = new Group();

  {
    const backWheel = createWheels();
    backWheel.name = "backWheel";
    backWheel.position.y = 6;
    backWheel.position.x = -18;
    backWheel.castShadow = true;
    tank.add(backWheel);
  }

  {
    const frontWheel = createWheels();
    frontWheel.name = "frontWheel";
    frontWheel.position.y = 6;
    frontWheel.position.x = 18;
    frontWheel.castShadow = true;
    tank.add(frontWheel);
  }

  {
    const geometry = new BoxBufferGeometry(60, 15, 30);
    const material = new MeshLambertMaterial({ color: 0xa52523 });
    const tankBody = new Mesh(geometry, material);
    tankBody.position.y = 12;
    tankBody.castShadow = true;
    tank.add(tankBody);
  }

  {
    const tankCabin = createCabin();
    tankCabin.position.x = -6;
    tankCabin.position.y = 25.5;
    tankCabin.castShadow = true;
    tank.add(tankCabin);
  }

  return tank;
}
