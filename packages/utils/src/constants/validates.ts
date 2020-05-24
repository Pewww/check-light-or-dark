interface IValidateRegex {
  VALIDATE_HEX_COLOR: RegExp;
  VALIDATE_RGB_RGBA_COLOR: RegExp;
}

export const VALIDATE_REGEX: IValidateRegex = {
  VALIDATE_HEX_COLOR: /^#([a-f0-9]{3}){1,2}\b$/i,
  // @TODO: 좀 더 정확한 범위의 regex로 수정
  VALIDATE_RGB_RGBA_COLOR: /^rgb\(\d{1,3}%?(,\s?\d{1,3}%?){2}\)|rgba\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)$/i
};
