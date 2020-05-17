import {
  R_DEGREE,
  G_DEGREE,
  B_DEGREE
} from '../constants/degrees';

export default function getBrightness(r: number, g: number, b: number) {
  // http://alienryderflex.com/hsp.html
  const brightness = Math.sqrt(
    (R_DEGREE * r * r) +
    (G_DEGREE * g * g) +
    (B_DEGREE * b * b)
  );

  return brightness;
}
