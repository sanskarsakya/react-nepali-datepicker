export enum ModeEnum {
    SINGLE = "single",
    RANGE = "range"

}
export interface ICalendarProps {
    // todo: min=ght not need
    /**
     * This is the date that is used to
     * bind in date input.
     */
    date: string | { startDate: string, endDate: string };

    // todo: [REFACTOR DATE]
    /**
     * When in range mode, use this as start date
     */
    startDate: string;

    // todo: [REFACTOR DATE]
    /**
     * When in range mode, use this as end date
     */
    endDate: string;

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
     * This is used to determine if the calendar
     * context is in nepali or english.
     */
    mode: ModeEnum;

    /**
     * Determine if the is nepali toggle button should
     * be shown or not
     */
    showToggle: boolean;

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

    /**
     * This is the change handler
     */
    onChange: (date: string) => void;

    /**
     * This is the determine if input should be 
     * disabled or not
     */
    isDisabled?: boolean;

    /**
     * This is the determine if input should be 
     * disabled or not
     */
    isRhfBound?: boolean;

}

export interface ICalendarInternals {

    /**
     * Determine if internals are used for start or end date
     */
    currentDateSelection: "startDate" | "endDate";
    /**
     * Determine if the calendar body is open orr not
     */
    isOpen: boolean;

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
     * This is sync the isNepali props
     */
    syncIsNepaliProps: (isNepali: boolean) => void;

    /**
     * This is sync the date props
     */
    syncDateProps: (date: string) => void;

    /**
     * This is sync the disalbe date beofre
     */
    syncDisableDateBeforeProps: (disableDateBefore: string) => void;

    /**
     * This is sync the disalbe date beofre
     */
    syncDisableDateAfterProps: (disableDateAfter: string) => void;

    /**
     * This is sync the hide/show calendar cepali toggle
     */
    syncShowIsNepaliToggleProps: (show: boolean) => void;

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
    openCalendar: (type: "startDate" | "endDate",) => void;

    /**
     * This is used to close the calendar body
     */
    closeCalendar: () => void;

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
    selectDay: (date: string) => void;

    /**
     * This is used to select today's date
     */
    selectToday: () => void;

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

    /**
     * This sets the start and end date
     * @param context 
     * @returns 
     */
    setStartAndEndDate: (params: {
        startDate: string,
        endDate: string,
    }) => void;

}

export interface ICalendarState {
    ctx: ICalendarCtx;
    events: ICalendarEvents;
}
