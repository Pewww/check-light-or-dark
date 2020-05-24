import {
  R_DEGREE,
  G_DEGREE,
  B_DEGREE
} from '../constants/degrees';

interface IBrightnessParams {
  r: number;
  g: number;
  b: number;
}

export default function getBrightness({r, g, b}: IBrightnessParams) {
  // http://alienryderflex.com/hsp.html
  const brightness = Math.sqrt(
    (R_DEGREE * r * r) +
    (G_DEGREE * g * g) +
    (B_DEGREE * b * b)
  );

  return brightness;
}
