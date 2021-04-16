import { Group, Mesh, BoxBufferGeometry, MeshLambertMaterial } from "three";
import createWheels from "./wheels";
import createCabin from "./cabin";

export default function createTank() {
  const tank = new Group();
  const wheels = new Group();

  {
    const backWheel = createWheels();
    backWheel.position.y = 6;
    backWheel.position.x = -18;
    backWheel.castShadow = true;
    wheels.add(backWheel);
  }

  {
    const middleWheel = createWheels();
    middleWheel.position.y = 6;
    middleWheel.castShadow = true;
    wheels.add(middleWheel);
  }

  {
    const frontWheel = createWheels();
    frontWheel.position.y = 6;
    frontWheel.position.x = 18;
    frontWheel.castShadow = true;
    wheels.add(frontWheel);
  }

  wheels.name = "wheels";
  tank.add(wheels);

  {
    const geometry = new BoxBufferGeometry(50, 15, 30);
    const material = new MeshLambertMaterial({ color: 0x4b5320 });
    const tankBody = new Mesh(geometry, material);
    tankBody.position.y = 6;
    tankBody.castShadow = true;
    tank.add(tankBody);
  }

  {
    const tankCabin = createCabin();
    tankCabin.position.y = 18;
    tankCabin.castShadow = true;
    tank.add(tankCabin);
  }

  return tank;
}
