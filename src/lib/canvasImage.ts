interface IGetImageDataParams {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface ICanvasImage {
  getImageData: (params: IGetImageDataParams) => ImageData;
}

export default class CanvasImage implements ICanvasImage {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private imageWidth: number | SVGAnimatedLength;
  private imageHeight: number | SVGAnimatedLength;

  constructor(image: CanvasImageSource) {
    this.canvas = document.createElement('canvas');

    this.imageWidth = image.width;
    this.imageHeight = image.height;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.drawImage(image, 0, 0);
  }

  getImageData({
    x = 0,
    y = 0,
    width = this.imageWidth as number,
    height = this.imageHeight as number
  }) {
    return this.ctx.getImageData(x, y, width, height);
  }
}
