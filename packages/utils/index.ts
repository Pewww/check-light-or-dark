// @constants
import {
  R_DEGREE,
  G_DEGREE,
  B_DEGREE,
  BRIGHTNESS_DEGREE
} from './src/constants/degrees';
import {MATCH_REGEX} from './src/constants/match';
import {VALIDATE_REGEX} from './src/constants/validates';

// @lib
import getBrightness from './src/lib/brightness';
import {
  hexToRgb,
  rgbaToRgb
} from './src/lib/conversion';

export {
  R_DEGREE,
  G_DEGREE,
  B_DEGREE,
  BRIGHTNESS_DEGREE,
  MATCH_REGEX,
  VALIDATE_REGEX,
  getBrightness,
  hexToRgb,
  rgbaToRgb
};
