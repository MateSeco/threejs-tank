import { Group, Mesh, BoxBufferGeometry, MeshLambertMaterial } from "three";
import createWheels from "./wheels";
import createCabin from "./cabin";

export default function createCar() {
  const car = new Group();

  {
    const backWheel = createWheels();
    backWheel.position.y = 6;
    backWheel.position.x = -18;
    car.add(backWheel);
  }

  {
    const frontWheel = createWheels();
    frontWheel.position.y = 6;
    frontWheel.position.x = 18;
    car.add(frontWheel);
  }
  {
    const geometry = new BoxBufferGeometry(60, 15, 30);
    const material = new MeshLambertMaterial({ color: 0xa52523 });
    const carBody = new Mesh(geometry, material);
    carBody.position.y = 12;
    car.add(carBody);
  }

  const carCabin = createCabin();
  console.log(carCabin);
  car.add(carCabin);

  return car;
}
