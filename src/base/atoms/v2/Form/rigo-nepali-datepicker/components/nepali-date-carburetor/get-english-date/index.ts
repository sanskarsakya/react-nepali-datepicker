import { getDaysInMonthMap } from '../get-days-in-month-map';
import { isNepDateInConversionRange } from '../is-nep-date-in-conversion-range';
import dayjs from 'dayjs';
import { stitchDate } from '../stitch-date';

export const getEnglishDate = (nepYY: number, nepMM: number, nepDD: number) => {
  if (isNepDateInConversionRange(nepYY, nepMM, nepDD)) {
    const startingEngYear: number = 1943;
    const startingEngMonth: number = 4;
    const startingEngDay: number = 14;

    let startingNepYear: number = 2000;

    const tempModel = {
      year: -1,
      month: -1,
      day: -1,
    };

    let totalDayDifference = 0;

    for (let i = startingNepYear; i < nepYY; i++) {
      totalDayDifference += getDaysInMonthMap().get(i)[13];
    }

    for (let i = 1; i < nepMM; i++) {
      totalDayDifference += getDaysInMonthMap().get(nepYY)[i];
    }

    totalDayDifference += nepDD;

    const [year, month, day] = dayjs(
      stitchDate(startingEngYear, startingEngMonth, startingEngDay),
    )
      .add(totalDayDifference - 1, 'day')
      .format('YYYY-MM-DD')
      .split('-');

    tempModel.year = +year;
    tempModel.month = +month;
    tempModel.day = +day;

    return tempModel;
  } else {
    throw new Error('Nepali date is not in conversion range');
  }
};
