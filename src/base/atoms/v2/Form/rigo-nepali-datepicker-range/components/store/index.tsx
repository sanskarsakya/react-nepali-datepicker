import dayjs from 'dayjs';
import _ from 'lodash';

import React from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';
import { ENGLISH_MONTHS, weeks } from '../calendar-engine';
import { ICalendarEvents, ICalendarInternals, ICalendarProps, ICalendarState } from '../entities/model/models';
import { getStrategy } from './strategy/strategy-provider';
import { Pipeline } from './utils/execution-pipeline';

const DEFAULT_PROPS: ICalendarProps = {
  date: '',
  isNepali: false,
  disableDateBefore: '',
  disableDateAfter: '',
  disabledWeekDays: [],
  holidays: [],
};

const INTERNAL_PROPS: ICalendarInternals = {
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
};

const getEvents = (get: () => ICalendarState, set: (partial: ICalendarState | Partial<ICalendarState> | ((state: ICalendarState) => ICalendarState | Partial<ICalendarState>), replace?: boolean | undefined) => void): ICalendarEvents => {
  return {
    mountSetup: async (props) => {
      const { isNepali, date, disableDateBefore, disableDateAfter } = props || {};
      const cloned = _.cloneDeep(get().ctx);

      // note: no idea why we need to set this is here and commit to store for disable date before and after to work
      cloned.disableDateBefore = disableDateBefore;
      cloned.disableDateAfter = disableDateAfter;

      set({ ctx: cloned });

      cloned.isNepali = isNepali;

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.setDate);
      p.push(strategyProvider.normalizeDates);
      p.push(strategyProvider.setGridMonths);
      p.push(strategyProvider.setCalendarReferenceDate);

      const { next } = await p.execute({
        next: cloned,
        params: {
          date,
          disableDateBefore,
          disableDateAfter,
        },
      });

      set({ ctx: next });
    },

    propsIsNepaliChange: async (isNepali = false) => {
      const cloned = _.cloneDeep(get().ctx);

      // ALWAYS TOGGLE FIRST
      cloned.isNepali = isNepali;

      // THEN GET STRATEGY
      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.convertdatesToCurrentContext);
      p.push(strategyProvider.setCalendarReferenceDate);
      p.push(strategyProvider.setGridMonths);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },

    propsDateChange: async (date) => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.setDate);
      p.push(strategyProvider.normalizeDates);
      p.push(strategyProvider.setGridMonths);
      p.push(strategyProvider.setCalendarReferenceDate);

      const { next } = await p.execute({
        next: cloned,
        params: {
          date,
        },
      });

      set({ ctx: next });
    },

    openCalendar: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.checkIfDateIsValid);
      p.push(strategyProvider.setViewModeToCalendar);
      p.push(strategyProvider.setCalendarReferenceDate);
      p.push(strategyProvider.setIsTodayValid);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

      const { next } = await p.execute({ next: cloned });

      set({ ctx: next });
    },
    nextMonth: async () => {
      const cloned = _.cloneDeep(get().ctx);

      cloned.animationDirection = 'right';

      set({ ctx: cloned });

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.incrementMonth);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

      const { next } = await p.execute({ next: cloned });

      set({ ctx: next });
    },
    previousMonth: async () => {
      const cloned = _.cloneDeep(get().ctx);

      cloned.animationDirection = 'left';

      set({ ctx: cloned });

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.decrementMonth);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

      const { next } = await p.execute({ next: cloned });

      set({ ctx: next });
    },
    nextYear: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.incrementYear);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

      const { next } = await p.execute({ next: cloned });

      set({ ctx: next });
    },
    previousYear: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.decrementYear);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

      const { next } = await p.execute({ next: cloned });

      set({ ctx: next });
    },
    selectDay: async (date, onClose, onChange) => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.setDate);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);
      p.push(strategyProvider.closeCalendarPicker);
      p.push(strategyProvider.sendChanges);

      const { next } = await p.execute({
        next: cloned,
        params: {
          date,
          onClose,
          onChange,
        },
      });

      set({ ctx: next });
    },
    selectToday: async (onClose, onChange) => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.checkIfTodayIsValid); // might not nee)
      p.push(strategyProvider.setTodayAsDate);
      p.push(strategyProvider.setTodayAsCalendarReferenceDate);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);
      p.push(strategyProvider.closeCalendarPicker);
      p.push(strategyProvider.sendChanges);

      const { next } = await p.execute({
        next: cloned,
        params: {
          onClose,
          onChange,
        },
      });

      set({ ctx: next });
    },
    goToMonthView: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.setViewModeToMonth);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },
    goToYearView: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.setViewModeToYear);
      p.push(strategyProvider.setGridYears);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },

    getNextDecadeYearGrid: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.updateGridYearWithNextDecade);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },
    getPreviousDecadeYearGrid: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.updateGridYearWithPreviousDecade);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },
    selectYear: async (year) => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.selectYear);
      p.push(strategyProvider.setViewModeToMonth);

      const { next } = await p.execute({
        next: cloned,
        params: {
          year,
        },
      });

      set({ ctx: next });
    },

    getNextYear: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.updateMonthViewWithNextYear);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },

    getPreviousYear: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.updateMonthViewWithPreviousYear);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },

    selectMonth: async (month) => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.selectMonth);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);
      p.push(strategyProvider.setViewModeToCalendar);

      const { next } = await p.execute({
        next: cloned,
        params: { month },
      });

      set({ ctx: next });
    },

    onDateChange: async (date) => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.setDate);
      p.push(strategyProvider.checkIfDateIsValid);
      p.push(strategyProvider.sendChanges);
      p.push(strategyProvider.setCalendarReferenceDate);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

      const { next } = await p.execute({
        next: cloned,
        params: {
          date,
        },
      });

      set({ ctx: next });
    },

    toggleContext: async () => {
      const cloned = _.cloneDeep(get().ctx);

      // ALWAYS TOGGLE FIRST
      cloned.isNepali = !cloned.isNepali;

      // THEN GET STRATEGY
      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.convertdatesToCurrentContext);
      p.push(strategyProvider.setCalendarReferenceDate);
      p.push(strategyProvider.setGridMonths);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);
      p.push(strategyProvider.sendChanges);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },
  };
}

const createMyStore = (initialProps: ICalendarProps) => {

  return createStore<ICalendarState>((set, get) => ({
    // ...DEFAULT_PROPS,
    ctx: {
      ...DEFAULT_PROPS,
      ...initialProps,
      ...INTERNAL_PROPS
    },
    events: getEvents(get, set)

  }));
};

// EXPORT UTILITIES
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

export * from "./selectors"

