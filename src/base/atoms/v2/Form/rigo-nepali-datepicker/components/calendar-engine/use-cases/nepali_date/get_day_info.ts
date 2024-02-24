import * as from_utilities from "../../utilities";
import { ADToBS, BSToAD } from "../../../nepali-date-carburetor";
import { NEPALI_DATE } from ".";
import { ENGLISH_DATE } from "../english_date";
import * as fromCalendarEngine from "../../index";
import { englishToNepaliNumber } from "nepali-number";
import { check_if_in_range } from "../../../store/utils";


export const get_day_info = (weekNum: any, weekDayNum: any, date: any, selectedDate?: any, disable_date_before?: any, disable_date_after?: any, disabledWeekDays?: number[], holidays?: string[]): fromCalendarEngine.IDayInfo => {
  const firstAdDay = date.firstAdDayInBSMonth.getDay();
  let primaryDay = weekNum * 7 + weekDayNum - firstAdDay;
  let primaryMonth = date.bsMonth;
  const primaryYear = date.bsYear;

  let isCurrentMonth = true;

  if (primaryDay <= 0) {
    primaryDay = NEPALI_DATE.previous_month_days(date) + primaryDay;
    isCurrentMonth = false;
    primaryMonth = date.bsMonth === 1 ? 12 : date.bsMonth - 1;
  } else if (primaryDay > date.numberOfDaysInBSMonth) {
    primaryDay = primaryDay - date.numberOfDaysInBSMonth;
    isCurrentMonth = false;
    primaryMonth = date.bsMonth === 12 ? 1 : date.bsMonth + 1;
  }

  const today = from_utilities.split_date(ADToBS(new Date()));


  const isToday = isCurrentMonth ? today.day === primaryDay && today.month === date.bsMonth && today.year === date.bsYear : false;
  let isSelected = false;

  if (selectedDate) {
    isSelected = isCurrentMonth ? selectedDate.bsDay === primaryDay && selectedDate.bsMonth === date.bsMonth && selectedDate.bsYear === date.bsYear : false;
  }

  console.log("disable_date_after", disable_date_after)

  const engDayInfo = ENGLISH_DATE.get_eng_day_info(primaryYear, primaryMonth, primaryDay);
  const eng_disable_date_before = disable_date_before ? BSToAD(disable_date_before) : "";
  const eng_disable_date_after = disable_date_after ? BSToAD(disable_date_after) : "";


  const latest_eng_stiched_date = from_utilities.stitch_date({
    year: engDayInfo.engYear,
    month: engDayInfo.engMonth,
    day: engDayInfo.engDay,
  })

  // TODO: MOVE THIS TO CALENDAR ENGINE UTILS LATER
  const is_in_range = check_if_in_range(
    latest_eng_stiched_date,
    eng_disable_date_before,
    eng_disable_date_after
  );

  const isDayOff = (disabledWeekDays ?? []).includes(weekDayNum) || (holidays ?? []).includes(latest_eng_stiched_date);

  const isDisabled = !isCurrentMonth || !is_in_range || isDayOff;

  return {
    workingDay: primaryDay,
    workingMonth: primaryMonth,
    workingYear: primaryYear,
    primaryDay: englishToNepaliNumber(primaryDay),
    primaryMonth: englishToNepaliNumber(primaryMonth),
    primaryYear: englishToNepaliNumber(primaryYear),
    secondaryDay: engDayInfo.engDay,
    secondaryMonth: engDayInfo.engMonth,
    secondaryYear: engDayInfo.engYear,
    isCurrentMonth,
    isToday,
    isSelected,
    isDisabled,
  };
};
