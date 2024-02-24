// LIBS
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { When } from 'react-if';

// STORE
import { DatePickerStoreProvider, selectCtx, selectEvents, useDatePickerStore } from '../store';

// COMPONENTS
import { CalendarController } from './calendar-controller';
import { DateInput } from './date-input';
import { DatePickerBody } from './date-picker-body';
import { MonthViewMode } from './month-view-mode';
import { MonthYearPanel } from './month-year-panel';
import Today from './today';
import { YearViewMode } from './year-view-mode';

// STYLES
import { get_base_styles } from './style';

export const childOf = (childNode: any, parentNode: any): boolean =>
  parentNode.contains(childNode);

interface DatepickerComponentProps extends Record<string, any> {
  onChange?: any;
  isRhfBound?: boolean;
  isNepali?: boolean;
  date?: string;
  isDark?: boolean;
  disableDateBefore?: string;
  disableDateAfter?: string;
  disabled?: boolean;
}
export const DatepickerComponent = (props: DatepickerComponentProps) => {
  // VARIABLES
  const { isRhfBound = false, disabled, isDark = false } = props;

  // HOOKS
  const { isOpen, onOpen, onClose } = useDisclosure();

  // HEADLESS HOOK
  const state = useDatePickerStore();
  const {
    viewMode,
    error,
    monthYearPanelData
  } = selectCtx(state);

  const {
    mountSetup,
    propsIsNepaliChange,
    openCalendar,
    propsDateChange,
  } = selectEvents(state);

  const nepaliDatePickerWrapper = React.useRef<HTMLDivElement>(null);

  const styles = get_base_styles(isDark);

  // FUNCTIONS
  const handleMountSetup = () => {
    if (props) {
      mountSetup(props);
    }
  };

  const handleIsNepaliPropsChange = () => {
    propsIsNepaliChange(props.isNepali as boolean);
  };

  const handleDatePropsChange = () => {
    propsDateChange(props.date as string);
  };

  // todo: review later
  React.useEffect(handleMountSetup, []);
  React.useEffect(handleIsNepaliPropsChange, [props.isNepali]);
  React.useEffect(handleDatePropsChange, [props.date]);

  const handleClickOutside = React.useCallback(
    (event: any) => {
      if (
        nepaliDatePickerWrapper.current &&
        childOf(event.target, nepaliDatePickerWrapper.current)
      ) {
        return;
      }
      onClose();
    },
    [onClose],
  );

  React.useLayoutEffect(() => {
    // console.log('useLayoutEffect');
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  React.useLayoutEffect(() => {
    if (isOpen && nepaliDatePickerWrapper.current) {
      const nepaliDatePicker =
        nepaliDatePickerWrapper.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      const calender: HTMLDivElement | null =
        nepaliDatePickerWrapper.current.querySelector('.calender');
      if (calender) {
        setTimeout(() => {
          const calenderHeight = calender.clientHeight;

          if (calenderHeight + nepaliDatePicker.bottom > screenHeight) {
            if (calenderHeight < nepaliDatePicker.top) {
              calender.style.bottom = `${nepaliDatePicker.height}px`;
            }
          }
        }, 0);
      }
    }
  }, [isOpen]);

  return (
    <div
      id={'input-wrapper-2'}
      style={{
        position: 'relative',
      }}
      ref={nepaliDatePickerWrapper}
    >
      <DateInput
        onOpen={() => {
          openCalendar();
          onOpen();
        }}
        disabled={disabled}
        styles={styles}
      />
      <When condition={!isRhfBound && error}>
        <Text color='red.300'>{error}</Text>
      </When>

      {/* RENDER CALENDAR BODY */}
      <When condition={isOpen}>
        <Box sx={styles.panel}>
          <When condition={isOpen && viewMode === 'YEAR_VIEW'}>
            <YearViewMode styles={styles} />
          </When>

          <When condition={isOpen && viewMode === 'MONTH_VIEW'}>
            <MonthViewMode styles={styles} />
          </When>

          <When condition={isOpen && viewMode === 'CALENDAR_VIEW'}>
            <CalendarController styles={styles} />
            <MonthYearPanel styles={styles} />
            <DatePickerBody
              key={monthYearPanelData}
              styles={styles}
              onChange={props.onChange}
              onClose={onClose}
            />
            <Today
              styles={styles}
              onChange={props.onChange}
              onClose={onClose}
            />
          </When>
        </Box>
      </When>
    </div>
  );
};

interface Props extends Record<string, any> {
  isRhfBound?: boolean;
  isNepali?: boolean;
  isDark?: boolean;
  onChange?: any;
  date?: string;
  disableDateBefore?: string;
  disableDateAfter?: string;
  disabled?: boolean;
}
export const DatePicker = (props: Props) => {
  return (
    <DatePickerStoreProvider props={props}>
      <DatepickerComponent {...props} />
    </DatePickerStoreProvider>
  );
};

// Rule of thumb
// mount setup
// state setter => should not fire event which will CAUSE the loop
// events trigger
