export const isEngDateInConversionRange = (
  yy: number,
  mm: number,
  dd: number,
): boolean => {
  return yy >= 1913 && yy <= 2033 && mm >= 1 && mm <= 12 && dd >= 1 && dd <= 31;
};
