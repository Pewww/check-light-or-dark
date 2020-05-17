interface IMatchRegex {
  MATCH_RGB_COLOR: RegExp;
}

export const MATCH_REGEX: IMatchRegex = {
  MATCH_RGB_COLOR: /^rgb?\((\d+),\s*(\d+),\s*(\d+)?\)$/i
};
