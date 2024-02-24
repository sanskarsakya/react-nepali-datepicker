export const isNepDateInConversionRange = (
  yy: number,
  mm: number,
  dd: number,
) => {
  return yy >= 1970 && yy <= 2090 && mm >= 1 && mm <= 12 && dd >= 1 && dd <= 32;
};
