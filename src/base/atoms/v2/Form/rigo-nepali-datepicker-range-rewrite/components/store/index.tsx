import dayjs from 'dayjs';
import _ from 'lodash';

import React from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';
import { ENGLISH_MONTHS, weeks } from '../calendar-engine';
import { ICalendarCtx, ICalendarEvents, ICalendarInternals, ICalendarProps, ICalendarState } from '../entities/model/models';
import { getStrategy } from './strategy/strategy-provider';
import { Pipeline } from './utils/execution-pipeline';
import { selectEvents } from '.';

const DEFAULT_PROPS: ICalendarProps = {
  date: '',

  // todo: [REFACTOR DATE]
  startDate: '',
  endDate: '',

  isNepali: false,
  showToggle: true,
  disableDateBefore: '',
  disableDateAfter: '',
  disabledWeekDays: [],
  holidays: [],
  onChange: () => { },
};

const INTERNAL_PROPS: ICalendarInternals = {
  currentDateSelection: 'startDate',
  isOpen: false,
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

      p.push(strategyProvider.setDate(date));
      p.push(strategyProvider.normalizeDates);
      p.push(strategyProvider.setGridMonths);
      p.push(strategyProvider.setCalendarReferenceDate);

      const { next } = await p.execute({
        next: cloned,
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

    syncDateProps: async (date) => {
      const cloned = _.cloneDeep(get().ctx);

      // GET STRATEGY
      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.setConvrtedDate(date));
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

      p.push(strategyProvider.setDate(date));
      p.push(strategyProvider.normalizeDates);
      p.push(strategyProvider.setGridMonths);
      p.push(strategyProvider.setCalendarReferenceDate);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },

    openCalendar: async (type) => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      cloned.isOpen = true;
      cloned.currentDateSelection = type;

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

    closeCalendar: async () => {
      const cloned = _.cloneDeep(get().ctx);

      cloned.isOpen = false;

      set({ ctx: cloned });
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
    selectDay: async (date) => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<{
        next: ICalendarCtx;
      }>();

      p.push(strategyProvider.setDate(date));
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);
      p.push(strategyProvider.closeCalendarPicker);
      p.push(strategyProvider.sendChanges);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },

    selectToday: async () => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.checkIfTodayIsValid);  // might not need
      p.push(strategyProvider.setTodayAsDate);
      p.push(strategyProvider.setTodayAsCalendarReferenceDate);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);
      p.push(strategyProvider.closeCalendarPicker);
      p.push(strategyProvider.sendChanges);

      const { next } = await p.execute({
        next: cloned,
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

      p.push(strategyProvider.selectYear(year));
      p.push(strategyProvider.setViewModeToMonth);

      const { next } = await p.execute({
        next: cloned,
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

      p.push(strategyProvider.selectMonth(month));
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);
      p.push(strategyProvider.setViewModeToCalendar);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },

    onDateChange: async (date) => {
      const cloned = _.cloneDeep(get().ctx);

      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();
      p.push(strategyProvider.setDate(date));
      p.push(strategyProvider.checkIfDateIsValid);
      p.push(strategyProvider.sendChanges);  // sus
      p.push(strategyProvider.setCalendarReferenceDate);
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

      const { next } = await p.execute({
        next: cloned,
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

    syncIsNepaliProps: async (isNepali) => {
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

    syncShowIsNepaliToggleProps: async (showToggle) => {
      const cloned = _.cloneDeep(get().ctx);

      // ALWAYS TOGGLE FIRST
      cloned.showToggle = showToggle;

      set({ ctx: cloned });
    },

    syncDisableDateBeforeProps: async (disableDateBefore) => {
      const cloned = _.cloneDeep(get().ctx);

      // GET STRATEGY
      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.setDisableDateBefore(disableDateBefore));
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

      const { next } = await p.execute({
        next: cloned,
      });

      set({ ctx: next });
    },

    syncDisableDateAfterProps: async (disableDateAfter) => {
      const cloned = _.cloneDeep(get().ctx);

      // GET STRATEGY
      const strategyProvider = getStrategy(cloned.isNepali as boolean);

      const p = Pipeline<any>();

      p.push(strategyProvider.setDisableDateAfter(disableDateAfter));
      p.push(strategyProvider.setGridDates);
      p.push(strategyProvider.setMonthYearPanelData);
      p.push(strategyProvider.setCalendarControllerLabels);

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

export const Syncer = (props: any) => {
  const state = useDatePickerStore();
  const { syncIsNepaliProps, syncDateProps, syncDisableDateBeforeProps, syncDisableDateAfterProps } = selectEvents(state)

  React.useEffect(() => {
    syncIsNepaliProps(props.isNepali);
  }, [props.isNepali, syncIsNepaliProps]);

  React.useEffect(() => {
    if (props.date) {
      syncDateProps(props.date);
    }
  }, [props.date, syncDateProps]);

  React.useEffect(() => {
    if (props.disableDateBefore) {
      syncDisableDateBeforeProps(props.disableDateBefore);
    }
  }, [props.disableDateBefore, syncDisableDateBeforeProps]);

  React.useEffect(() => {
    if (props.disableDateAfter) {
      syncDisableDateAfterProps(props.disableDateAfter);
    }
  }, [props.disableDateAfter, syncDisableDateAfterProps]);

  return <></>;
};

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
    <StoreContext.Provider value={store}>
      <Syncer {...props} />
      {children}
    </StoreContext.Provider>
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

