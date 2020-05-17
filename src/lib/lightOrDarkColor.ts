import {VALIDATE_REGEX} from '../constants/validates';
import {MATCH_REGEX} from '../constants/match';
import {BRIGHTNESS_DEGREE} from '../constants/degrees';
import getBrightness from './brightness';

function getCompleteHexColor(hexColor: string) {
  if (hexColor.length === 3) {
    const [r, g, b] = hexColor.split('');

    return `${r + r}${g + g}${b + b}`;
  }

  return hexColor;
}

function hexToRgb(hexColor: string) {
  const hexWithoutHash = hexColor.slice(1);
  const completeHexColor = getCompleteHexColor(hexWithoutHash);
  const hexToDecimal = parseInt(completeHexColor, 16);

  const r = (hexToDecimal >> 16) & 255;
  const g = (hexToDecimal >> 8) & 255;
  const b = hexToDecimal & 255;

  return {
    r,
    g,
    b
  };
}

function filterRgb(rgbColor: string) {
  const {MATCH_RGB_COLOR} = MATCH_REGEX;
  const [, r, g, b] = rgbColor.match(MATCH_RGB_COLOR);

  return {
    r: parseInt(r, 10),
    g: parseInt(g, 10),
    b: parseInt(b, 10)
  };
}

export default function lightOrdarkColor(color: string) {
  const {
    VALIDATE_HEX_COLOR: hexRegex,
    VALIDATE_RGB_COLOR: rgbRegex
  } = VALIDATE_REGEX;

  if (hexRegex.test(color)) {
    const {
      r,
      g,
      b
    } = hexToRgb(color);
    
    const brightness = getBrightness(r, g, b);

    return brightness > BRIGHTNESS_DEGREE
      ? 'light'
      : 'dark';
  } else if (rgbRegex.test(color)) {
    const {
      r,
      g,
      b
    } = filterRgb(color);

    const brightness = getBrightness(r, g, b);

    return brightness > BRIGHTNESS_DEGREE
      ? 'light'
      : 'dark';
  }

  return null;
}
