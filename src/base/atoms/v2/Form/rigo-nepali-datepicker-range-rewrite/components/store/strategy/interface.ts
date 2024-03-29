import { ICalendarCtx } from "../../entities/model/models";
import { Next } from "../utils/execution-pipeline";

export interface ICalendarStrategy {
  /**
   * used on first open calendar mount
   * dont confuse with checkifTodayIsValid
   * @param ctx 
   * @param next 
   * @returns 
   */
  setDate: (date: string) => (ctx: any, next: Next<any>) => void;

  /**
   * set date on mount 
   * if range set start date and end date
   * if single set start date only
   * if engish set as it is
   * if nepali convert and set
   * @param date 
   * @returns 
   */
  setConvrtedDate: (date: string | { startDate: string, endDate: string }) => (ctx: any, next: Next<any>) => void;
  setCalendarReferenceDate: (ctx: any, next: Next<any>) => void;
  setDisableDateBefore: (disableDateBefore: string) => (ctx: any, next: Next<any>) => void;
  setDisableDateAfter: (disableDateAfter: string) => (ctx: any, next: Next<any>) => void;
  setIsTodayValid: (ctx: any, next: Next<any>) => void;
  setGridDates: (ctx: any, next: Next<any>) => void;
  setMonthYearPanelData: (ctx: any, next: Next<any>) => void;
  setCalendarControllerLabels: (ctx: any, next: Next<any>) => void;
  incrementMonth: (ctx: any, next: Next<any>) => void;
  decrementMonth: (ctx: any, next: Next<any>) => void;
  incrementYear: (ctx: any, next: Next<any>) => void;
  decrementYear: (ctx: any, next: Next<any>) => void;
  setTodayAsDate: (ctx: any, next: Next<any>) => void;
  setTodayAsCalendarReferenceDate: (ctx: any, next: Next<any>) => void;
  setViewModeToMonth: (ctx: any, next: Next<any>) => void;
  setViewModeToYear: (ctx: any, next: Next<any>) => void;
  setViewModeToCalendar: (ctx: any, next: Next<any>) => void;
  setGridYears: (ctx: any, next: Next<any>) => void;
  setGridMonths: (ctx: any, next: Next<any>) => void;
  updateGridYearWithPreviousDecade: (ctx: any, next: Next<any>) => void;
  updateGridYearWithNextDecade: (ctx: any, next: Next<any>) => void;
  selectYear: (year: number) => (ctx: any, next: Next<any>) => void;
  selectMonth: (month: number) => (ctx: any, next: Next<any>) => void;
  updateMonthViewWithPreviousYear: (ctx: any, next: Next<any>) => void;
  updateMonthViewWithNextYear: (ctx: any, next: Next<any>) => void;
  closeCalendarPicker: (ctx: any, next: Next<any>) => void;
  sendChanges: (ctx: { next: ICalendarCtx }, next: Next<any>) => void;

  // vvalidation
  /**
   * not sure if this is required
   * used while clicking on today button
   * @param ctx 
   * @param next 
   * @returns 
   */
  checkIfTodayIsValid: (ctx: any, next: Next<any>) => void;

  /**
    * check if the date is valid
    * used while clicking on select day, select today,
    * on date typing
    * @param ctx 
    * @param next 
    * @returns 
    */
  checkIfDateIsValid: (ctx: any, next: Next<any>) => void;

  /**
    * check if the date is valid
    * used while clicking on select day, select today,
    * on date typing
    * @param ctx 
    * @param next 
    * @returns 
    */
  checkIfStartDaetIsBeforeEndDate: (ctx: any, next: Next<any>) => void;

  /**
   *
   * Switching from nepali to english,
   * assuming the date is in nepali format 
   * converts the "date" to english format
   * does the same for Switching from english to nepali,
   */
  convertdatesToCurrentContext: (ctx: any, next: Next<any>) => void;

  /**
   * Basically does same thing as convertdatesToCurrentContext,
   * but only for napali strategy,
   * does nothing for english strategy
   * used on mount setup
   * @param ctx 
   * @param next 
   * @returns 
   */
  normalizeDates: (ctx: any, next: Next<any>) => void;

  setStartAndEndDate: (startDate: string, endDate: string) => (ctx: any, next: Next<any>) => void;
}