interface IGetImageDataParams {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface ICanvasImage {
  filterBackgroundImg: (backgroundImg: string) => string;
  loadImage: (src: string) => Promise<HTMLImageElement>;
  getImageData: (params: IGetImageDataParams) => Promise<ImageData>;
  drawImage: () => Promise<CanvasImageSource>;
  isImgTag: (element: HTMLElement) => boolean;
}

export default class CanvasImage implements ICanvasImage {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private image: CanvasImageSource;

  constructor(image: CanvasImageSource) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.image = image;
  }

  filterBackgroundImg(backgroundImg: string) {
    const [, url = ''] = backgroundImg.split('"');
    return url;
  }

  loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise(resolve => {
      const image = new Image();
      image.setAttribute('src', src);
      
      image.onload = () => {
        this.ctx.drawImage(image, 0, 0);
        resolve(image);
      };
    });
  }

  isImgTag(element: HTMLElement) {
    return element.tagName === 'IMG';
  }

  drawImage(): Promise<CanvasImageSource> {
    try {
      if (this.isImgTag(this.image as HTMLElement)) {
        return new Promise(resolve => {
          this.ctx.drawImage(this.image, 0, 0);
          resolve(this.image);
        });
      }
  
      const cssObj = window.getComputedStyle(this.image as Element);
      const backgroundImg = cssObj.getPropertyValue('background-image');
  
      return this.loadImage(
        this.filterBackgroundImg(backgroundImg)
      );
    } catch(e) {
      throw Error(e);
    }
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

    return this.ctx.getImageData(x, y, width as number, height as number);
  }
}
