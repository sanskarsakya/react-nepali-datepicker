import { devtools } from 'zustand/middleware';
import dayjs from 'dayjs';
import _ from 'lodash';
import _isEmpty from 'lodash/isEmpty';

import { ENGLISH_MONTHS, weeks } from '../calendar-engine';
import { getStrategy } from './strategy/strategy-provider';
import { Pipeline } from './utils/execution-pipeline';
import React from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';

export type ICalendarState = {
  // ====================
  // PROPS
  // ====================

  /**
   * Determine the direction of animation
   * while rendering
   */
  animationDirection: 'left' | 'right';

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

  // ====================
  // INTERNALS
  // ====================

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

  // ACTIONS

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

  /**
   * This is used to set the week data
   * for calendar body view
   */
  weeks: any[];
};

const createMyStore = (props: any) =>
  createStore<ICalendarState>((set, get) => ({
    date: '',
    isNepali: false,
    disableDateBefore: '',
    disableDateAfter: '',
    disabledWeekDays: props?.disabledWeekDays ?? [],
    holidays: props?.holidays ?? [],

    animationDirection: 'right',
    calendarReferenceDate: dayjs().format('YYYY-MM-DD'),
    gridDates: [],
    viewMode: 'CALENDAR_VIEW',
    monthYearPanelData: '',
    gridYears: [],
    error: '',
    gridMonths: ENGLISH_MONTHS,
    isTodayValid: false,
    weeks: weeks['en'],

    controllerLabel: {
      month: '',
      year: '',
    },

    // ACTIONS
    mountSetup: async props => {
      const { isNepali, date, disableDateBefore, disableDateAfter } =
        props || {};
      const cloned = _.cloneDeep(get());

      // note: no idea why we need to set this is here and commit to store for disable date before and after to work
      cloned.disableDateBefore = disableDateBefore;
      cloned.disableDateAfter = disableDateAfter;

      set(cloned);

      cloned.isNepali = isNepali;

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.setDate,
        // strategyProvider.setDisableDateBefore,
        // strategyProvider.setDisableDateAfter,
        strategyProvider.normalizeDates,
        strategyProvider.setGridMonths,
        strategyProvider.setCalendarReferenceDate,
      ).execute({
        next: cloned,
        params: {
          date,
          disableDateBefore,
          disableDateAfter,
        },
      });

      set(next);
    },

    propsIsNepaliChange: async (isNepali = false) => {
      const cloned = _.cloneDeep(get());

      // ALWAYS TOGGLE FIRST
      cloned.isNepali = isNepali;

      // THEN GET STRATEGY
      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.convertdatesToCurrentContext,
        strategyProvider.setCalendarReferenceDate,
        strategyProvider.setGridMonths,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
      ).execute({
        next: cloned,
      });

      set(next);
    },

    propsDateChange: async date => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.setDate,
        strategyProvider.normalizeDates,
        strategyProvider.setGridMonths,
        strategyProvider.setCalendarReferenceDate,
      ).execute({
        next: cloned,
        params: {
          date,
        },
      });

      set(next);
    },

    openCalendar: async () => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.setViewModeToCalendar,
        strategyProvider.checkIfDateIsValid,
        strategyProvider.setCalendarReferenceDate,
        strategyProvider.setIsTodayValid,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
      ).execute({ next: cloned });

      set(next);
    },
    nextMonth: async () => {
      const cloned = _.cloneDeep(get());

      cloned.animationDirection = 'right';

      set(cloned);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.incrementMonth,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
      ).execute({ next: cloned });

      set(next);
    },
    previousMonth: async () => {
      const cloned = _.cloneDeep(get());

      cloned.animationDirection = 'left';

      set(cloned);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.decrementMonth,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
      ).execute({ next: cloned });

      set(next);
    },
    nextYear: async () => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.incrementYear,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
      ).execute({ next: cloned });

      set(next);
    },
    previousYear: async () => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.decrementYear,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
      ).execute({ next: cloned });

      set(next);
    },
    selectDay: async (date, onClose, onChange) => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.setDate,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
        strategyProvider.closeCalendarPicker,
        strategyProvider.sendChanges,
      ).execute({
        next: cloned,
        params: {
          date,
          onClose,
          onChange,
        },
      });

      set(next);
    },
    selectToday: async (onClose, onChange) => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.checkIfTodayIsValid, // might not need
        strategyProvider.setTodayAsDate,
        strategyProvider.setTodayAsCalendarReferenceDate,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
        strategyProvider.closeCalendarPicker,
        strategyProvider.sendChanges,
      ).execute({
        next: cloned,
        params: {
          onClose,
          onChange,
        },
      });

      set(next);
    },
    goToMonthView: async () => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.setViewModeToMonth,
      ).execute({
        next: cloned,
      });

      set(next);
    },
    goToYearView: async () => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.setViewModeToYear,
        strategyProvider.setGridYears,
      ).execute({
        next: cloned,
      });

      set(next);
    },
    getNextDecadeYearGrid: async () => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.updateGridYearWithNextDecade,
      ).execute({
        next: cloned,
      });

      set(next);
    },
    getPreviousDecadeYearGrid: async () => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.updateGridYearWithPreviousDecade,
      ).execute({
        next: cloned,
      });

      set(next);
    },
    selectYear: async year => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.selectYear,
        strategyProvider.setViewModeToMonth,
      ).execute({
        next: cloned,
        params: {
          year,
        },
      });

      set(next);
    },

    getNextYear: async () => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.updateMonthViewWithNextYear,
      ).execute({
        next: cloned,
      });

      set(next);
    },

    getPreviousYear: async () => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.updateMonthViewWithPreviousYear,
      ).execute({
        next: cloned,
      });

      set(next);
    },

    selectMonth: async month => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.selectMonth,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
        strategyProvider.setViewModeToCalendar,
      ).execute({
        next: cloned,
        params: { month },
      });

      set(next);
    },

    onDateChange: async date => {
      const cloned = _.cloneDeep(get());

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.setDate,
        strategyProvider.checkIfDateIsValid,
        strategyProvider.sendChanges,
        strategyProvider.setCalendarReferenceDate,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
      ).execute({
        next: cloned,
        params: {
          date,
        },
      });

      set(next);
    },

    toggleContext: async () => {
      const cloned = _.cloneDeep(get());

      // ALWAYS TOGGLE FIRST
      cloned.isNepali = !cloned.isNepali;

      // THEN GET STRATEGY
      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const { next } = await Pipeline<any>(
        strategyProvider.convertdatesToCurrentContext,
        strategyProvider.setCalendarReferenceDate,
        strategyProvider.setGridMonths,
        strategyProvider.setGridDates,
        strategyProvider.setMonthYearPanelData,
        strategyProvider.setCalendarControllerLabels,
        strategyProvider.sendChanges,
      ).execute({
        next: cloned,
      });

      set(next);
    },
  }));

const StoreContext = React.createContext<ReturnType<
  typeof createMyStore
> | null>(null);

export const DatePickerStoreProvider = ({
  props,
  children,
}: {
  props: any;
  children: React.ReactNode;
}) => {
  // Reference this for singleton ->  https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md
  const store = React.useRef(createMyStore(props)).current;
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useDatePickerStore = () => {
  const store = React.useContext(StoreContext);
  if (store === null) {
    throw new Error('no provider');
  }

  return useZustandStore(store);
};
