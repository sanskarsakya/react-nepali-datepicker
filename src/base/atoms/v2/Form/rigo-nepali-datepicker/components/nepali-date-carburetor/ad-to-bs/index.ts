import { getNepaliDate } from '../get-nepali-date';
import { stitchDate } from '../stitch-date';
import dayjs from 'dayjs';

export const ADToBS = (date: string) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!date) {
    return;
  }
  const [yy, mm, dd] = dayjs(date).format("YYYY-MM-DD").split('-');

  const convetedDate = getNepaliDate(parseInt(yy), parseInt(mm), parseInt(dd));

  return stitchDate(convetedDate.year, convetedDate.month, convetedDate.day);
};
