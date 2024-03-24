import { isEmpty } from "lodash";
import * as from_utilities from ".";
import { lookUp, BSToAD } from '../../nepali-date-carburetor';

export const parse_date = (date: string, separator = "-"): any => {
  if (isEmpty(date)) {
    return null;
  }
  const { year, month, day }: any = from_utilities.split_date(date, separator);

  // from_utilities.validateDateObject({year, month, day});

  const adDate = new Date(BSToAD(date) as string);

  const firstAdDateInBSMonth = new Date(BSToAD(from_utilities.stitch_date({ year, month, day: 1 }, separator)) as string);
  const numberOfDaysInMonth = lookUp().get(year)[month];

  return {
    adDate,
    bsDay: day,
    bsMonth: month,
    bsYear: year,
    firstAdDayInBSMonth: firstAdDateInBSMonth,
    numberOfDaysInBSMonth: numberOfDaysInMonth,
    weekDay: adDate.getDay(),
  };
};
