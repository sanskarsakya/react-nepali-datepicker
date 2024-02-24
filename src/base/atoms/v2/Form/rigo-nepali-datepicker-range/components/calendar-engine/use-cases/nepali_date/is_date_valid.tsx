import dayjs from 'dayjs';
import * as fromCalendarEngine from '../../../calendar-engine';
import { BSToAD, ADToBS } from '../../../nepali-date-carburetor';

export const validate_value = (val: string) => {
  const value = BSToAD(val)
  const valueInBS = ADToBS(value)

  if(valueInBS != val){
    return false;
  }

  try {
    return dayjs(value, 'YYYY-MM-DD', true).isValid();
  } catch (error: any) {
    return false;
  }
  
};

export function is_date_valid(val: any) {
  const MAX_YEAR_LIMIT = fromCalendarEngine.maxBSYear;
  const MIN_YEAR_LIMIT = fromCalendarEngine.minBSYear;

  const splitted_dates = val.split('-');

  return (
    parseInt(splitted_dates[0]) < MAX_YEAR_LIMIT &&
    parseInt(splitted_dates[0]) > MIN_YEAR_LIMIT &&
    validate_value(val)
  );
}
