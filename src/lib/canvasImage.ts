export interface IGetImageDataParams {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface ICanvasImage {
  drawImage: () => Promise<HTMLImageElement>;
  getImageData: (params: IGetImageDataParams) => Promise<ImageData>;
}

export default class CanvasImage implements ICanvasImage {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private image: string;

  constructor(image: string) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.image = image;
  }

  drawImage(): Promise<HTMLImageElement> {
    return new Promise(resolve => {
      const image = new Image();
      image.setAttribute('src', this.image);
      image.setAttribute('crossOrigin', 'anonymous');

      image.onload = () => {
        this.ctx.drawImage(image, 0, 0);
        resolve(image);
      };
    });
  }

  async getImageData({
    x = 0,
    y = 0,
    width: propsWidth = 0,
    height: propsHeight = 0
  } = {}) {
    const {
      width: _width,
      height: _height
    } = await this.drawImage();

    const width = (propsWidth !== 0 && propsWidth < _width)
      ? propsWidth
      : _width;

    const height = (propsHeight !== 0 && propsHeight < _height)
      ? propsHeight
      : _height;

    return this.ctx.getImageData(x, y, width, height);
  }
}
