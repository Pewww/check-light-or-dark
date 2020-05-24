import CanvasImage, {IGetImageDataParams} from './src/lib/canvasImage';
import {
  BRIGHTNESS_DEGREE,
  getBrightness
} from '@check-light-or-dark/utils';
// import {rgbaToRgb} from './lib/conversion';

interface ILightOrDarkParams extends IGetImageDataParams {
  image: string;
}

function filterBrightness(imageData: Uint8ClampedArray) {
  const _imageData = imageData;
  const pixels = imageData.length;
  const brightnessArr = [];

  for (let idx = 0; idx < pixels; idx += 4) {
    const r = _imageData[idx + 0];
    const g = _imageData[idx + 1];
    const b = _imageData[idx + 2];
    // const a = (_imageData[idx + 3] / 255);

    brightnessArr.push(
      getBrightness(
        // @Notice: rgbaToRgb 로직 잠시 보류
        // rgbaToRgb(r, g, b, a)
        {r, g, b}
      )
    );
  }

  return brightnessArr;
}

function checkLightOrDark(brightnessArr: number[]) {
  let lightCnt = 0;
  let darkCnt = 0;

  brightnessArr.forEach(b => {
    const isLight = b > BRIGHTNESS_DEGREE;

    isLight
      ? lightCnt += 1
      : darkCnt += 1;
  });

  return lightCnt > darkCnt
    ? 'light'
    : 'dark';
}

export default async function lightOrDark({
  image,
  x,
  y,
  width,
  height
}: ILightOrDarkParams) {
  if (!image) {
    return null;
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
