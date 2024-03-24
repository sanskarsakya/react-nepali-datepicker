import { getEnglishDate } from '../get-english-date';
import { stitchDate } from '../stitch-date';

export const BSToAD = (date: string) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!date) {
    return;
  }
  const [yy, mm, dd] = date.split('-');

  const convetedDate = getEnglishDate(parseInt(yy), parseInt(mm), parseInt(dd));

  return stitchDate(convetedDate.year, convetedDate.month, convetedDate.day);
};
