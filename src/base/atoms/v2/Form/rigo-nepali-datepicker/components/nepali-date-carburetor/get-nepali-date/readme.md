```
import { getDaysInMonthMap } from '../get-days-in-month-map';
import { getReferenceMap } from '../get-reference-map';
import { isEngDateInConversionRange } from '../is-eng-date-in-conversion-range';
import { stitchDate } from '../stitch-date';
import dayjs from 'dayjs';
export const getNepaliDate = (
  engYY: number,
  engMM: number,
  engDD: number,
): {
  year: number;
  month: number;
  day: number;
} => {
  const tempModel = {
    year: -1,
    month: -1,
    day: -1,
    //   dayOfWeek: -1,
  };

  if (isEngDateInConversionRange(engYY, engMM, engDD)) {
    let startingEngYear = 1913;
    let startingEngMonth = 4;
    let startingEngDay = 13;
    let totalEngDaysCount = 0;

    let startingNepYear = 1970;
    let startingNepMonth = 1;
    let startingNepDay = 1;

    const ref = getReferenceMap();

    if (ref[engYY]) {
      startingEngYear = 2024;
      startingEngMonth = 1;
      startingEngDay = 1;

      startingNepYear = 2080;
      startingNepMonth = 9;
      startingNepDay = 16;
    }

    // start day of week for 1913/4/13 is Sunday  as 1
    const startingDayOfWeek = 1; // 1913/4/13 is a Sunday

    let nepYY, nepMM, nepDD;
    let dayOfWeek = startingDayOfWeek;

    const base = new Date(
      stitchDate(startingEngYear, startingEngMonth, startingEngDay),
    );
    const newDate = new Date(stitchDate(engYY, engMM, engDD)); // July 24th

    totalEngDaysCount = Math.ceil(dayjs(newDate).diff(base, 'day', true));

    nepYY = startingNepYear;
    nepMM = startingNepMonth;
    nepDD = startingNepDay;

    const x = getDaysInMonthMap();

    while (totalEngDaysCount !== 0) {
      const daysInMonth = x.get(nepYY)[nepMM];
      nepDD++;
      if (nepDD > daysInMonth) {
        nepMM++;
        nepDD = 1;
      }
      if (nepMM > 12) {
        nepYY++;
        nepMM = 1;
      }

      dayOfWeek++;
      if (dayOfWeek > 7) {
        dayOfWeek = 1;
      }
      totalEngDaysCount--;
    }

    tempModel.year = nepYY;
    tempModel.month = nepMM;
    tempModel.day = nepDD;
    // tempModel.dayOfWeek = dayOfWeek;

    return tempModel;
  } else {
    throw new Error('Invalid English Date');
  }
};

```