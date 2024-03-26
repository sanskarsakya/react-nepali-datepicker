/* eslint-disable @typescript-eslint/no-unused-vars */
import { ADToBS, BSToAD } from "../../nepali-date-carburetor";
import dayjs from "dayjs";
import { englishToNepaliNumber, nepaliToEnglishNumber } from "nepali-number";
import { NEPALI_DATE, englishMonthMap, months, parse_date, range, stitch_date } from "../../calendar-engine";
import { get_year_list_in_decade, validate } from "../utils";
import { Next } from "../utils/execution-pipeline";
import { ICalendarStrategy } from "./interface";
import { debug_mode } from "./constants";
import { ModeEnum } from "../../entities/model/models";

/**
 * Global referece for today's date
 */
const today = dayjs().format("YYYY-MM-DD");

export const NepaliStrategy: ICalendarStrategy = {

    // todo: [REFACTOR DATE]
    setDate: (date) => (ctx, next): void => {

        debug_mode && console.log("NepaliStrategy: setDate");

        if (date) {
            ctx.next[ctx.next.currentDateSelection] = date;
        }

        next();
    },
    setConvrtedDate: (date) => (ctx, next): void => {

        debug_mode && console.log("NepaliStrategy: setDate");

        if (ctx.next.mode === ModeEnum.RANGE) {
            const localDate = date as { startDate: string, endDate: string }
            if (localDate.startDate && localDate.endDate) {
                ctx.next.startDate = ADToBS(localDate.startDate);
                ctx.next.endDate = ADToBS(localDate.endDate)
            }
        } else {
            if (date) {
                if (date) {
                    ctx.next.date = ADToBS(date as string);
                }
            }
        }

        next();
    },

    setCalendarReferenceDate: function (ctx: any, next: Next<any>): void {
        if (ctx.next.isOpen) {
            debug_mode && console.log("NepaliStrategy: setCalendarReferenceDate");
            ctx.next.calendarReferenceDate = ctx.next[ctx.next.currentDateSelection] || ADToBS(dayjs().format("YYYY-MM-DD"));
        }
        next();
    },

    setDisableDateBefore: (disableDateBefore) => (ctx, next): void => {

        debug_mode && console.log("NepaliStrategy: setDisableDateBefore");

        if (disableDateBefore) {
            ctx.next.disableDateBefore = ADToBS(disableDateBefore) || "";
        }
        next();
    },

    setDisableDateAfter: (disableDateAfter) => (ctx, next): void => {
        debug_mode && console.log("NepaliStrategy: setDisableDateAfter");
        if (disableDateAfter) {
            ctx.next.disableDateAfter = ADToBS(disableDateAfter) || "";
        }
        next();
    },

    setIsTodayValid: function (ctx, next): void {
        debug_mode && console.log("NepaliStrategy: setIsTodayValid");

        let ddBefore = ""
        if (ctx?.next?.disableDateBefore) {
            ddBefore = BSToAD(ctx.next.disableDateBefore) as string
        }

        let ddAfter = ""
        if (ctx?.next?.disableDateAfter) {
            ddAfter = BSToAD(ctx.next.disableDateAfter) as string
        }

        const validation_result = validate(today, ddBefore, ddAfter);
        ctx.next.isTodayValid = validation_result.is_valid;

        next();
    },

    setGridDates: function (ctx, next): void {
        if (ctx.next.isOpen) {

            debug_mode && console.log("NepaliStrategy: setGridDates");
            const weeks_in_month = NEPALI_DATE.get_weeks_in_month(parse_date(ctx.next.calendarReferenceDate));

            ctx.next.gridDates = range(0, weeks_in_month).map((weekNum: number) => {
                return range(1, 7).map((weekDayNum: number) => {
                    return NEPALI_DATE.get_day_info(
                        weekNum,
                        weekDayNum,
                        parse_date(ctx.next.calendarReferenceDate),
                        parse_date(ctx.next.date),
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
            debug_mode && console.log("NepaliStrategy: setMonthYearPanelData");
            const now = new Date(ctx.next.calendarReferenceDate);
            const englishDate = BSToAD(ctx.next.calendarReferenceDate);
            const splited = englishDate?.split("-") ?? [];
            const englishYear = nepaliToEnglishNumber(splited[0]);

            ctx.next.monthYearPanelData = `${englishMonthMap[now.getMonth()]} ${englishYear}`;
        }

        next();
    },

    setCalendarControllerLabels: function (ctx, next): void {
        if (ctx.next.isOpen) {

            debug_mode && console.log("NepaliStrategy: setCalendarControllerLabels");
            const [year, month] = ctx.next.calendarReferenceDate.split("-");
            ctx.next.controllerLabel.month = months.ne[+month - 1];
            ctx.next.controllerLabel.year = englishToNepaliNumber(year);
        }

        next();
    },

    incrementMonth: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: incrementMonth");
        ctx.next.calendarReferenceDate = dayjs(ctx.next.calendarReferenceDate).add(1, "month").format("YYYY-MM-DD");
        next();
    },

    decrementMonth: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: decrementMonth");
        ctx.next.calendarReferenceDate = dayjs(ctx.next.calendarReferenceDate).subtract(1, "month").format("YYYY-MM-DD");
        next();
    },

    incrementYear: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: incrementYear");
        ctx.next.calendarReferenceDate = dayjs(ctx.next.calendarReferenceDate).add(1, "year").format("YYYY-MM-DD");
        next();
    },

    decrementYear: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: decrementYear");
        ctx.next.calendarReferenceDate = dayjs(ctx.next.calendarReferenceDate).subtract(1, "year").format("YYYY-MM-DD");
        next();
    },



    setViewModeToMonth: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: setViewModeToMonth");
        ctx.next.viewMode = "MONTH_VIEW";
        next();
    },

    setViewModeToYear: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: setViewModeToYear");
        ctx.next.viewMode = "YEAR_VIEW";
        next();
    },

    setViewModeToCalendar: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: setViewModeToCalendar");
        ctx.next.viewMode = "CALENDAR_VIEW";
        next();
    },

    setGridYears: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: setGridYears");
        const currentYear = +ctx.next.calendarReferenceDate.split("-")[0];
        const yearGrid = get_year_list_in_decade(currentYear);
        ctx.next.gridYears = [yearGrid[0] - 1, ...yearGrid, yearGrid[yearGrid.length - 1] + 1];
        next();
    },

    updateGridYearWithPreviousDecade: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: updateGridYearWithPreviousDecade");
        const currentDecadeLastYear = ctx.next.gridYears[0];
        const yearGrid = get_year_list_in_decade(currentDecadeLastYear);
        ctx.next.gridYears = [yearGrid[0] - 1, ...yearGrid, yearGrid[yearGrid.length - 1] + 1];
    },

    updateGridYearWithNextDecade: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: updateGridYearWithNextDecade");
        const currentDecadeLastYear = ctx.next.gridYears[ctx.next.gridYears.length - 1];
        const yearGrid = get_year_list_in_decade(currentDecadeLastYear);
        ctx.next.gridYears = [yearGrid[0] - 1, ...yearGrid, yearGrid[yearGrid.length - 1] + 1];
        next();

    },

    selectYear: (year) => (ctx, next): void => {
        debug_mode && console.log("NepaliStrategy: selectYear");
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

    updateMonthViewWithPreviousYear: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: updateMonthViewWithPreviousYear");
        const split_date = ctx.next.calendarReferenceDate.split("-");
        ctx.next.calendarReferenceDate = stitch_date({
            year: +split_date[0] - 1,
            month: +split_date[1],
            day: +split_date[2],
        });

        next();
    },

    updateMonthViewWithNextYear: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: updateMonthViewWithNextYear");
        const split_date = ctx.next.calendarReferenceDate.split("-");
        ctx.next.calendarReferenceDate = stitch_date({
            year: +split_date[0] + 1,
            month: +split_date[1],
            day: +split_date[2],
        });

        next();
    },

    selectMonth: (month) => (ctx, next): void => {
        debug_mode && console.log("NepaliStrategy: selectMonth");
        ctx.next.calendarReferenceDate = stitch_date({
            year: +ctx.next.calendarReferenceDate.split("-")[0],
            month,
            day: 1,
        },
            "-"
        );

        next();
    },

    checkIfTodayIsValid: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: checkIfTodayIsValid");

        let ddBefore = ""
        if (ctx?.next?.disableDateBefore) {
            ddBefore = BSToAD(ctx.next.disableDateBefore) as string
        }

        let ddAfter = ""
        if (ctx?.next?.disableDateAfter) {
            ddAfter = BSToAD(ctx.next.disableDateAfter) as string
        }

        const validation_result = validate(today, ddBefore, ddAfter);
        if (validation_result.is_valid) {
            next();
        }

    },

    checkIfStartDaetIsBeforeEndDate: function (ctx, next): void {
        // todo: [REFACTOR DATE]
        debug_mode && console.log("NepaliStrategy: checkIfStartDaetIsBeforeEndDate");

        // if mode is range then proceed

        if (ctx.next.mode === ModeEnum.SINGLE) {
            return next()
        }

        const start_date = ctx.next.startDate;
        const end_date = ctx.next.endDate;

        if (start_date && end_date) {
            const isValid = dayjs(BSToAD(start_date)).isBefore(dayjs(BSToAD(end_date)));

            if (isValid) {
                ctx.next.error = "";
                next();
            } else {
                ctx.next.error = "start date cannot be after end date";
            }
        } else {
            next();
        }
    },

    setTodayAsDate: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: setTodayAsDate");
        ctx.next.date = ADToBS(today);
        next();
    },

    setTodayAsCalendarReferenceDate: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: setTodayAsCalendarReferenceDate");
        ctx.next.calendarReferenceDate = ADToBS(today);
        next();
    },

    closeCalendarPicker: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: closeCalendarPicker");
        ctx.next.isOpen = false;
        next();
    },

    checkIfDateIsValid: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: checkIfDateIsValid");

        let ddBefore = ""
        if (ctx?.next?.disableDateBefore) {
            ddBefore = BSToAD(ctx.next.disableDateBefore) as string
        }

        let ddAfter = ""
        if (ctx?.next?.disableDateAfter) {
            ddAfter = BSToAD(ctx.next.disableDateAfter) as string
        }

        const validation_result = validate(
            ctx.next.date ? BSToAD(ctx.next?.[ctx.currentDateSelection]) as string : "",
            ddBefore,
            ddAfter
        );

        if (validation_result.is_valid) {
            ctx.next.error = "";
            next();
        } else {
            ctx.next.error = validation_result.message;
        }
    },

    convertdatesToCurrentContext: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: convertdatesToCurrentContext");
        if (ctx.next.mode === ModeEnum.RANGE) {
            if (ctx.next.startDate) {
                ctx.next.startDate = ADToBS(ctx.next.startDate);
            }
            if (ctx.next.endDate) {
                ctx.next.endDate = ADToBS(ctx.next.endDate);
            }
        } else {
            if (ctx.next.startDate) {
                ctx.next.startDate = ADToBS(ctx.next.startDate);
            }
        }
        if (ctx.next.disableDateBefore) {
            ctx.next.disableDateBefore = ADToBS(ctx.next.disableDateBefore);
        }
        if (ctx.next.disableDateAfter) {
            ctx.next.disableDateAfter = ADToBS(ctx.next.disableDateAfter);
        }
        next();
    },

    normalizeDates: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: normalizeDates");
        if (ctx.next.date) {
            ctx.next.date = ADToBS(ctx.next.date);
        }
        if (ctx.next.disableDateBefore) {
            ctx.next.disableDateBefore = ADToBS(ctx.next.disableDateBefore);
        }
        if (ctx.next.disableDateAfter) {
            ctx.next.disableDateAfter = ADToBS(ctx.next.disableDateAfter);
        }
        next();
    },

    setGridMonths: function (ctx: any, next: Next<any>): void {
        if (ctx.next.isOpen) {
            debug_mode && console.log("NepaliStrategy: setGridMonths");
            ctx.next.gridMonths = months.ne
        }
        next();
    },

    // todo: [REFACTOR DATE]
    sendChanges: (ctx: any, next: Next<any>): void => {
        debug_mode && console.log("NepaliStrategy: sendChanges");
        if (ctx.next.mode === ModeEnum.RANGE) {
            const startDate = ctx.next.startDate ? BSToAD(ctx.next.startDate) : ctx.next.startDate
            const endDate = ctx.next.endDate ? BSToAD(ctx.next.endDate) : ctx.next.endDate

            ctx?.next?.onChange?.({ startDate, endDate });

        } else {

            const startDate = ctx.next.startDate ? BSToAD(ctx.next.startDate) : ctx.next.startDate
            ctx?.next?.onChange?.(startDate);
        }


        next();
    },

    setStartAndEndDate: (startDate, endDate) => (ctx: any, next: Next<any>): void => {
        debug_mode && console.log("NepaliStrategy: setStartAndEndDate");

        ctx.next.startDate = startDate ? ADToBS(startDate) : "";
        ctx.next.endDate = endDate ? ADToBS(endDate) : "";

        next();
    },
}