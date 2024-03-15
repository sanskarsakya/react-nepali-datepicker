/* eslint-disable @typescript-eslint/no-unused-vars */
import { ADToBS, BSToAD } from "../../nepali-date-carburetor";
import dayjs from "dayjs";
import { englishToNepaliNumber, nepaliToEnglishNumber } from "nepali-number";
import { NEPALI_DATE, englishMonthMap, months, parse_date, range, stitch_date } from "../../calendar-engine";
import { get_year_list_in_decade, validate } from "../utils";
import { Next } from "../utils/execution-pipeline";
import { ICalendarStrategy } from "./interface";
import { debug_mode } from "./constants";

/**
 * Global referece for today's date
 */
const today = dayjs().format("YYYY-MM-DD");

export const NepaliStrategy: ICalendarStrategy = {

    setDate: function (ctx: any, next: Next<any>): void {

        debug_mode && console.log("NepaliStrategy: setDate");

        // normalize
        ctx.next.date = ctx.params.date;

        next();
    },

    setCalendarReferenceDate: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: setCalendarReferenceDate");

        ctx.next.calendarReferenceDate = ctx.next.date || ADToBS(dayjs().format("YYYY-MM-DD"));
        next();
    },

    setDisableDateBefore: function (ctx, next): void {

        debug_mode && console.log("NepaliStrategy: setDisableDateBefore");

        if (ctx.params.disableDateBefore) {
            ctx.next.disableDateBefore = ctx.params.disableDateBefore;
        }
        next();
    },

    setDisableDateAfter: function (ctx, next): void {
        debug_mode && console.log("NepaliStrategy: setDisableDateAfter");
        if (ctx.params.disableDateAfter) {
            ctx.next.disableDateAfter = ctx.params.disableDateAfter;
        }
        next();
    },

    setIsTodayValid: function (ctx, next): void {
        debug_mode && console.log("NepaliStrategy: setIsTodayValid");
        const validation_result = validate(today, ctx.next?.disableDateBefore ? BSToAD(ctx.next.disableDateBefore) : "", ctx.next?.disableDateAfter ? BSToAD(ctx.next.disableDateAfter) : "");
        ctx.next.isTodayValid = validation_result.is_valid;

        next();
    },

    setGridDates: function (ctx, next): void {
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

        console.log(ctx.next.gridDates)
        next();
    },

    setMonthYearPanelData: function (ctx, next): void {
        debug_mode && console.log("NepaliStrategy: setMonthYearPanelData");
        const now = new Date(ctx.next.calendarReferenceDate);
        const englishDate = BSToAD(ctx.next.calendarReferenceDate);
        const splited = englishDate.split("-");
        const englishYear = nepaliToEnglishNumber(splited[0]);

        ctx.next.monthYearPanelData = `${englishMonthMap[now.getMonth()]} ${englishYear}`;

        next();
    },

    setCalendarControllerLabels: function (ctx, next): void {
        debug_mode && console.log("NepaliStrategy: setCalendarControllerLabels");
        const [year, month] = ctx.next.calendarReferenceDate.split("-");
        ctx.next.controllerLabel.month = months.ne[+month - 1];
        ctx.next.controllerLabel.year = englishToNepaliNumber(year);

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

    selectYear: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: selectYear");
        ctx.next.calendarReferenceDate = stitch_date(
            {
                year: ctx.params.year,
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

    selectMonth: (ctx: any, next: Next<any>): void => {
        debug_mode && console.log("NepaliStrategy: selectMonth");
        ctx.next.calendarReferenceDate = stitch_date({
            year: +ctx.next.calendarReferenceDate.split("-")[0],
            month: ctx.params.month,
            day: 1,
        },
            "-"
        );

        next();
    },

    checkIfTodayIsValid: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: checkIfTodayIsValid");
        const validation_result = validate(today, ctx.next?.disableDateBefore ? BSToAD(ctx.next.disableDateBefore) : "", ctx.next?.disableDateAfter ? BSToAD(ctx.next.disableDateAfter) : "");
        if (validation_result.is_valid) {
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
        ctx.params.onClose();
        next();
    },

    checkIfDateIsValid: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: checkIfDateIsValid");
        const validation_result = validate(
            ctx.next.date ? BSToAD(ctx.next.date) : "",
            ctx.next?.disableDateBefore ? BSToAD(ctx.next.disableDateBefore) : "",
            ctx.next?.disableDateAfter ? BSToAD(ctx.next.disableDateAfter) : ""
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
        debug_mode && console.log("NepaliStrategy: setGridMonths");
        ctx.next.gridMonths = months.ne
        next();
    },

    sendChanges: function (ctx: any, next: Next<any>): void {
        debug_mode && console.log("NepaliStrategy: sendChanges");
        debugger
        // ALWAYS RETURN GREGORIAN DATE
        // ctx.next.onChange(ctx.next.date);
        ctx.next.onChange({
            date: ctx.next.date ? BSToAD(ctx.next.date) : ctx.next.date,
            isNepali: ctx.next.isNepali,
        });
        // ctx.next.onChange(BSToAD(ctx.next.date));
        next();
    }
}