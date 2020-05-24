import {
  VALIDATE_REGEX,
  MATCH_REGEX,
  BRIGHTNESS_DEGREE,
  getBrightness,
  hexToRgb,
  rgbaToRgb
} from '@check-light-or-dark/utils';

function filterRgbOrRgba(color: string) {
  const {MATCH_RGB_RGBA_COLOR} = MATCH_REGEX;
  const [, r, g, b, a] = color.match(MATCH_RGB_RGBA_COLOR);

  const _r = parseInt(r, 10);
  const _g = parseInt(g, 10);
  const _b = parseInt(b, 10);

  if (a) {
    const _a = parseFloat(a);
    return rgbaToRgb(_r, _g, _b, _a);
  }

  return {
    r: _r,
    g: _g,
    b: _b
  };
}

export default function lightOrdarkColor(color: string) {
  const {
    VALIDATE_HEX_COLOR: hexRegex,
    VALIDATE_RGB_RGBA_COLOR: rgbRegex
  } = VALIDATE_REGEX;

  if (hexRegex.test(color)) {
    const brightness = getBrightness(
      hexToRgb(color)
    );

    return brightness > BRIGHTNESS_DEGREE
      ? 'light'
      : 'dark';
  } else if (rgbRegex.test(color)) {
    const brightness = getBrightness(
      filterRgbOrRgba(color)
    );

    return brightness > BRIGHTNESS_DEGREE
      ? 'light'
      : 'dark';
  }

  return null;
}
