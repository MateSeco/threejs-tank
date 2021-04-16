import {
  SplineCurve,
  LineBasicMaterial,
  BufferGeometry,
  Vector2,
  Line,
} from "three";

export default function createTrajectory() {
  const curve = new SplineCurve([
    new Vector2(0, 0),
    new Vector2(50, 50),
    new Vector2(0, 100),
    new Vector2(-50, 50),
    new Vector2(0, 0),
    new Vector2(50, -50),
    new Vector2(0, -100),
    new Vector2(-50, -50),
    new Vector2(0, 0),
  ]);
  const points = curve.getPoints(20);

  const geometry = new BufferGeometry().setFromPoints(points);

  const material = new LineBasicMaterial({ color: 0xff0000 });

  const splineObject = new Line(geometry, material);
  splineObject.rotation.x = Math.PI * 0.5;
  splineObject.scale.set(2, 2, 0);

  return splineObject;
}
