import dayjs from "dayjs";
import { englishToNepaliNumber } from "nepali-number";
import { ENGLISH_DATE, ENGLISH_MONTHS, nepaliMonthMap, range, stitch_date } from "../../calendar-engine";
import { ADToBS, BSToAD } from "../../nepali-date-carburetor";
import { get_year_list_in_decade, validate } from "../utils";
import { Next } from "../utils/execution-pipeline";
import { debug_mode } from "./constants";
import { ICalendarStrategy } from "./interface";

/**
 * Global referece for today's date
 */
const today = dayjs().format("YYYY-MM-DD");

export const EnglishStrategy: ICalendarStrategy = {

    // todo: [REFACTOR DATE]
    setDate: (date) => (ctx, next): void => {
        debug_mode && console.log("EnglishStrategy: setDate");

        ctx.next[ctx.next.currentDateSelection] = date;

        next();
    },

    setConvrtedDate: (date) => (ctx, next): void => {
        debug_mode && console.log("NepaliStrategy: setDate");

        if (date) {
            ctx.next.date = date;
        }

        next();
    },

    setCalendarReferenceDate: function (ctx, next): void {
        if (ctx.next.isOpen) {

            debug_mode && console.log("EnglishStrategy: setCalendarReferenceDate");
            ctx.next.calendarReferenceDate = ctx.next.startDate || dayjs().format("YYYY-MM-DD");
        }
        next();
    },

    setDisableDateBefore: (disableDateBefore) => (ctx, next): void => {
        debug_mode && console.log("EnglishStrategy: setDisableDateBefore");
        if (disableDateBefore.length >= 10) {
            ctx.next.disableDateBefore = disableDateBefore || "";
        }
        next();
    },

    setDisableDateAfter: (disableDateAfter) => (ctx, next): void => {
        debug_mode && console.log("EnglishStrategy: setDisableDateAfter");
        if (disableDateAfter.length >= 10) {
            ctx.next.disableDateAfter = disableDateAfter || "";
        }
        next();
    },

    setIsTodayValid: (ctx, next) => {
        debug_mode && console.log("EnglishStrategy: setIsTodayValid");
        const validation_result = validate(today, ctx.next?.disableDateBefore, ctx.next?.disableDateAfter);
        ctx.next.isTodayValid = validation_result.is_valid;

        next();
    },

    setGridDates: function (ctx, next): void {
        if (ctx.next.isOpen) {

            debug_mode && console.log("EnglishStrategy: setGridDates");
            const weeks_in_english_month = ENGLISH_DATE.get_weeks_in_month(new Date(ctx.next.calendarReferenceDate));
            ctx.next.gridDates = range(0, weeks_in_english_month - 1).map((weekNum: number) => {
                return range(1, 7).map((weekDayNum: number) => {
                    return ENGLISH_DATE.get_day_info(
                        weekNum,
                        weekDayNum,
                        ctx.next.calendarReferenceDate,
                        ctx.next.date,
                        ctx.next.disableDateBefore,
                        ctx.next.disableDateAfter,
                        ctx.next.disabledWeekDays,
                        ctx.next.holidays,
                    );
                });
            });
        }

        next();
    },

    setMonthYearPanelData: function (ctx, next): void {
        if (ctx.next.isOpen) {

            debug_mode && console.log("EnglishStrategy: setMonthYearPanelData");
            const now = new Date(ctx.next.calendarReferenceDate);
            const nepaliDate = ADToBS(ctx.next.calendarReferenceDate);
            const splited = nepaliDate?.split("-") ?? [];
            const nepaliYear = englishToNepaliNumber(splited[0]);

            ctx.next.monthYearPanelData = `${nepaliMonthMap[now.getMonth()]} ${nepaliYear}`;
        }

        next();
    },

    setCalendarControllerLabels: function (ctx, next): void {
        if (ctx.next.isOpen) {

            debug_mode && console.log("EnglishStrategy: setCalendarControllerLabels");
            const [year, month] = ctx.next.calendarReferenceDate.split("-");
            ctx.next.controllerLabel.month = ENGLISH_MONTHS[+month - 1];
            ctx.next.controllerLabel.year = year;
        }

        next();
    },

    incrementMonth: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: incrementMonth");
        ctx.next.calendarReferenceDate = dayjs(ctx.next.calendarReferenceDate).add(1, "month").format("YYYY-MM-DD");

        next();
    },

    decrementMonth: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: decrementMonth");
        ctx.next.calendarReferenceDate = dayjs(ctx.next.calendarReferenceDate).subtract(1, "month").format("YYYY-MM-DD");

        next();
    },
    incrementYear: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: incrementYear");
        ctx.next.calendarReferenceDate = dayjs(ctx.next.calendarReferenceDate).add(1, "year").format("YYYY-MM-DD");

        next();
    },
    decrementYear: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: decrementYear");
        ctx.next.calendarReferenceDate = dayjs(ctx.next.calendarReferenceDate).subtract(1, "year").format("YYYY-MM-DD");

        next();
    },

    setTodayAsDate: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: setTodayAsDate");
        ctx.next.date = today;

        next();
    },

    setTodayAsCalendarReferenceDate: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: setTodayAsCalendarReferenceDate");
        ctx.next.calendarReferenceDate = today;
        next();
    },
    setViewModeToMonth: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: setViewModeToMonth");
        ctx.next.viewMode = "MONTH_VIEW";
        next();
    },
    setViewModeToYear: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: setViewModeToYear");
        ctx.next.viewMode = "YEAR_VIEW";
        next();
    },
    setViewModeToCalendar: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: setViewModeToCalendar");
        ctx.next.viewMode = "CALENDAR_VIEW";
        next();
    },
    setGridYears: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: setGridYears");
        const currentYear = +ctx.next.calendarReferenceDate.split("-")[0];
        const yearGrid = get_year_list_in_decade(currentYear);
        ctx.next.gridYears = [yearGrid[0] - 1, ...yearGrid, yearGrid[yearGrid.length - 1] + 1];

        next();
    },
    updateGridYearWithNextDecade: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: updateGridYearWithNextDecade");
        const currentDecadeLastYear = ctx.next.gridYears[ctx.next.gridYears.length - 1];
        const yearGrid = get_year_list_in_decade(currentDecadeLastYear);
        ctx.next.gridYears = [yearGrid[0] - 1, ...yearGrid, yearGrid[yearGrid.length - 1] + 1];

        next();
    },
    updateGridYearWithPreviousDecade: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: updateGridYearWithPreviousDecade");
        const currentDecadeLastYear = ctx.next.gridYears[0];
        const yearGrid = get_year_list_in_decade(currentDecadeLastYear);
        ctx.next.gridYears = [yearGrid[0] - 1, ...yearGrid, yearGrid[yearGrid.length - 1] + 1];

        next();
    },
    selectYear: (year) => (ctx, next): void => {
        debug_mode && console.log("EnglishStrategy: selectYear");
        ctx.next.calendarReferenceDate = stitch_date(
            {
                year,
                month: +ctx.next.calendarReferenceDate.split("-")[1],
                day: 1,
            },
            "-"
        );
        next();
    },
    updateMonthViewWithNextYear: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: updateMonthViewWithNextYear");
        const split_date = ctx.next.calendarReferenceDate.split("-");
        ctx.next.calendarReferenceDate = stitch_date({
            year: +split_date[0] + 1,
            month: +split_date[1],
            day: +split_date[2],
        });

        next();
    },
    updateMonthViewWithPreviousYear: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: updateMonthViewWithPreviousYear");
        const split_date = ctx.next.calendarReferenceDate.split("-");
        ctx.next.calendarReferenceDate = stitch_date({
            year: +split_date[0] - 1,
            month: +split_date[1],
            day: +split_date[2],
        });

        next();
    },
    selectMonth: (month) => (ctx, next): void => {
        debug_mode && console.log("EnglishStrategy: selectMonth");
        ctx.next.calendarReferenceDate = stitch_date({
            year: +ctx.next.calendarReferenceDate.split("-")[0],
            month,
            day: 1,
        },
            "-"
        );

        next();
    },
    closeCalendarPicker: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: closeCalendarPicker");
        ctx.next.isOpen = false
        next();
    },
    checkIfTodayIsValid: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: checkIfTodayIsValid");
        const validation_result = validate(today, ctx.next.disableDateBefore, ctx.next.disableDateAfter);

        if (validation_result.is_valid) {
            next();
        }
    },
    checkIfDateIsValid: function (ctx, next): void {
        // todo: [REFACTOR DATE]
        debug_mode && console.log("EnglishStrategy: checkIfDateIsValid");

        const validation_result = validate(ctx.next?.[ctx.currentDateSelection], ctx.next.disableDateBefore, ctx.next.disableDateAfter);

        if (validation_result.is_valid) {
            ctx.next.error = "";
            next();
        } else {
            ctx.next.error = validation_result.message;
        }
    },

    convertdatesToCurrentContext: function (ctx, next): void {
        debug_mode && console.log("EnglishStrategy: convertdatesToCurrentContext");
        if (ctx.next.date) {
            ctx.next.date = BSToAD(ctx.next.date);
        }
        if (ctx.next.disableDateBefore) {
            ctx.next.disableDateBefore = BSToAD(ctx.next.disableDateBefore);
        }
        if (ctx.next.disableDateAfter) {
            ctx.next.disableDateAfter = BSToAD(ctx.next.disableDateAfter);
        }
        next();
    },
    setGridMonths: function (ctx: any, next: Next<any>): void {
        if (ctx.next.isOpen) {

            debug_mode && console.log("EnglishStrategy: setGridMonths");
            ctx.next.gridMonths = ENGLISH_MONTHS;
        }
        next();
    },

    // todo: [REFACTOR DATE]
    sendChanges: (ctx: any, next: Next<any>) => {
        debug_mode && console.log("EnglishStrategy: sendChanges");

        ctx?.next?.onChange?.({ startDate: ctx.next.startDate, endDate: ctx.next.endDate });

        next();
    },
    // TODO: REMOVE LATER
    normalizeDates: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("EnglishStrategy: normalizeDates");
        next();
    },
}