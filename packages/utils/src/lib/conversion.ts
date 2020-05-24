function getCompleteHexColor(hexColor: string) {
  if (hexColor.length === 3) {
    const [r, g, b] = hexColor.split('');

    return `${r + r}${g + g}${b + b}`;
  }

  return hexColor;
}

export function hexToRgb(hexColor: string) {
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

export function rgbaToRgb(r: number, g: number, b: number, a: number) {
  const backR = 255;
  const backG = 255;
  const backB = 255;
  const alpha = 1 - a;

  return {
    r: Math.round((alpha * backR) + (a * r)),
    g: Math.round((alpha * backG) + (a * g)),
    b: Math.round((alpha * backB) + (a * b))
  };
}
