import { zeroPad } from '../zero-pad';

export const stitchDate = (yy: number, mm: number, dd: number) => {
  const separator = '-';
  return `${yy}${separator}${zeroPad(mm)}${separator}${zeroPad(dd)}`;
};
