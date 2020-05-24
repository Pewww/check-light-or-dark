interface IMatchRegex {
  MATCH_RGB_RGBA_COLOR: RegExp;
}

export const MATCH_REGEX: IMatchRegex = {
  MATCH_RGB_RGBA_COLOR: /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i
};
