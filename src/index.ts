import lightOrDarkColor from './lib/lightOrDarkColor';
import CanvasImage, {IGetImageDataParams} from './lib/canvasImage';
import {BRIGHTNESS_DEGREE} from './constants/degrees';
import getBrightness from './lib/brightness';
import {rgbaToRgb} from './lib/conversion';

interface ILightOrDarkParams extends IGetImageDataParams {
  image: string;
  color?: string;
}

function filterBrightness(imageData: Uint8ClampedArray) {
  const _imageData = imageData;
  const pixels = imageData.length;
  const brightnessArr = [];

  for (let idx = 0; idx < pixels; idx += 4) {
    const r = _imageData[idx + 0];
    const g = _imageData[idx + 1];
    const b = _imageData[idx + 2];
    const a = (_imageData[idx + 3] / 255);

    brightnessArr.push(
      getBrightness(rgbaToRgb(r, g, b, a))
    );
  }

  return brightnessArr;
}

function checkLightOrDark(brightnessArr: number[]) {
  const lightArr = [];
  const darkArr = [];

  brightnessArr.forEach(b => {
    const isLight = b > BRIGHTNESS_DEGREE;

    isLight
      ? lightArr.push(1)
      : darkArr.push(1);
  });

  return lightArr.length > darkArr.length
    ? 'light'
    : 'dark';
}

export default async function lightOrDark({
  image,
  color,
  x,
  y,
  width,
  height
}: ILightOrDarkParams) {
  if (!image && !color) {
    return null;
  }

  if (color) {
    return lightOrDarkColor(color);
  }

  const canvasImage = new CanvasImage(image);
  const {data: imageData} = await canvasImage.getImageData({
    x,
    y,
    width,
    height
  });
  const brightnessArr = filterBrightness(imageData);

  return checkLightOrDark(brightnessArr);
}
