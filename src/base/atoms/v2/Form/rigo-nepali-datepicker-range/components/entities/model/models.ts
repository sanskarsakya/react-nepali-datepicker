
export interface ICalendarProps {
    /**
     * This is the date that is used to
     * bind in date input.
     */
    date: string;

    /**
     * This is the array of week days that is used
     * to disable the week days in the calendar
     * if value is [1,2,3] then sunday, monday and tuesday
     * cells are disabled.
     */
    disabledWeekDays: number[];

    /**
     * This holds the holidays,
     * based on this cells are disabled
     */
    holidays: string[];

    /**
     * This is used to determine if the calendar
     * context is in nepali or english.
     */
    isNepali: boolean | null;

    /**
     * This is the date that is used to
     * disable dates before this date.
     */
    disableDateBefore: string;

    /**
     * This is the date that is used to
     * disable dates after this date.
     */
    disableDateAfter: string;


}

export interface ICalendarInternals {

    /**
     * Determine the direction of animation
     * while rendering
     */
    animationDirection: 'left' | 'right';


    /**
     * This is the date that is used to
     * generate the calendar grid date.
     */
    calendarReferenceDate: string;

    /**
     * This is holds the generated dates
     * for the calendar grid
     * based on calendarReferenceDate .
     */
    gridDates: any[];

    /**
     * This is used as flag to
     * switch between calendar view
     * or month view
     * or year view
     */
    viewMode: 'CALENDAR_VIEW' | 'MONTH_VIEW' | 'YEAR_VIEW';

    /**
     * This is the data that is shown in the
     * month year panel.
     */
    monthYearPanelData: string;

    /**
     * This is the data that is shown in the
     * year view mode.
     */
    gridYears: any[];

    /**
     * Holds the value for error message
     * used for chekcing if date or today date is valid
     */
    error: string;

    /**
     * This is the array of months that is used
     * to generate the month grid.
     */
    gridMonths: string[];

    /**
     * This is used to determine if today's date
     * is valid or not.
     */
    isTodayValid: boolean;

    /**
     * This is the data that is shown in the
     * calendar controller.
     */
    controllerLabel: {
        month: string;
        year: string;
    };

    /**
     * This is used to set the week data
     * for calendar body view
     */
    weeks: any[];
}

export interface ICalendarCtx extends ICalendarProps, ICalendarInternals { }

export interface ICalendarEvents {
    /**
         * This is used to setup the calendar
         */
    mountSetup: (props: any) => void;

    /**
     * This is used to sync is nepali props change
     */
    propsIsNepaliChange: (isNepali: boolean) => void;

    /**
     * This is used to sync is date props change
     */
    propsDateChange: (date: string) => void;

    /**
     * This is used to open the calendar body
     * and bind necessary data.
     *
     */
    openCalendar: () => void;

    /**
     * this is used to navigate to next month
     * from calendar controller
     */
    nextMonth: () => void;

    /**
     * This is used to navigate to previous month
     * from calendar controller
     */
    previousMonth: () => void;

    /**
     *
     * This is used to navigate to next year
     * from calendar controller
     */
    nextYear: () => void;

    /**
     *
     * This is used to navigate to previous year
     * from calendar controller
     */
    previousYear: () => void;

    /**
     * This is used to select a day from the calendar
     * grid.
     */
    selectDay: (date: string, onClose: any, onChange: any) => void;

    /**
     * This is used to select today's date
     */
    selectToday: (onClose: any, onChange: any) => void;

    /**
     * This is used to navigate to month view
     * from calendar controller
     */
    goToMonthView: () => void;

    /**
     * This is used to navigate to year view
     * from calendar controller
     */
    goToYearView: () => void;

    /**
     * This is used to update grid with
     * next decade year for year view mode
     */
    getNextDecadeYearGrid: () => void;

    /**
     * This is used to update grid with
     * previous decade year for year view mode
     */
    getPreviousDecadeYearGrid: () => void;

    /**
     * This is used to select year from year view mode
     */
    selectYear: (year: number) => void;

    /**
     * This is used to update to next year
     * from month view mode
     */
    getNextYear: () => void;

    /**
     * This is used to update to previous year
     * from month view mode
     */
    getPreviousYear: () => void;

    /**
     * This is used to select month from month view mode
     */
    selectMonth: (month: number) => void;

    /**
     *
     * This is the function that is used on
     * date input component to update the date
     * and calendar reference date.
     */
    onDateChange: (date: string) => void;

    /**
     *
     * Switch between nepali and english context
     */
    toggleContext: (context?: boolean) => void;

}

export interface ICalendarState {
    ctx: ICalendarCtx;
    events: ICalendarEvents;
}
