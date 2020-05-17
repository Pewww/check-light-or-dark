interface IValidateRegex {
  VALIDATE_HEX_COLOR: RegExp;
}

export const VALIDATE_REGEX: IValidateRegex = {
  VALIDATE_HEX_COLOR: /^#([a-f0-9]{3}){1,2}\b$/i
};
