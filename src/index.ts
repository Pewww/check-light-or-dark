import lightOrDarkColor from './lib/lightOrDarkColor';
import CanvasImage from './lib/canvasImage';
import {BRIGHTNESS_DEGREE} from './constants/degrees';
import getBrightness from './lib/brightness';

interface ILightOrDarkParams {
  backgroundImg: CanvasImageSource;
  targetText?: HTMLElement;
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

    // a 어케 해야함 ㅋㅋ
    const a = _imageData[idx + 3];

    brightnessArr.push(
      getBrightness(r, g, b)
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

function backgroundImgAndText(backgroundImg: CanvasImageSource, targetText: HTMLElement) {
  return null;
}

function onlyBackgroundImg(backgroundImg: CanvasImageSource) {
  const {getImageData} = new CanvasImage(backgroundImg);
  const imageData = getImageData().data;
  const brightnessArr = filterBrightness(imageData);

  return checkLightOrDark(brightnessArr);
}

export default function lightOrDark({
  backgroundImg,
  targetText,
  color
}: ILightOrDarkParams) {
  if (!backgroundImg && !targetText && !color) {
    return null;
  }

  if (color) {
    return lightOrDarkColor(color);
  }

  return targetText
    ? backgroundImgAndText(backgroundImg, targetText)
    : onlyBackgroundImg(backgroundImg);
}
