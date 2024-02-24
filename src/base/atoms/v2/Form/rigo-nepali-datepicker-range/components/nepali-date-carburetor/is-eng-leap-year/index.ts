import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';

dayjs.extend(isLeapYear);

export const isEngLeapYear = (year: number) => {
  return dayjs(year + '-01-01').isLeapYear(); // true
};
