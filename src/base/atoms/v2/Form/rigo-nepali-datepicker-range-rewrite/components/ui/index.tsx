// LIBS
import React from 'react';
import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useOutsideClick
} from '@chakra-ui/react';
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

interface DatepickerComponentProps extends Record<string, any> {
  onChange?: (date: string) => void;
  isRhfBound?: boolean;
  isNepali?: boolean;
  date?: string;
  isDark?: boolean;
  disableDateBefore?: string;
  disableDateAfter?: string;
  disabled?: boolean;
}
export const DatepickerComponent = (props: DatepickerComponentProps) => {

  console.log({
    props
  })
  // VARIABLES
  const { isRhfBound = false, disabled, isDark = false } = props;
  const ref = React.useRef<HTMLDivElement>(null)

  // HEADLESS HOOK
  const state = useDatePickerStore();
  const {
    isOpen,
    viewMode,
    error,
    monthYearPanelData
  } = selectCtx(state);

  const {
    openCalendar,
    closeCalendar
  } = selectEvents(state);

  const styles = get_base_styles(isDark);

  useOutsideClick({
    ref: ref,
    handler: () => closeCalendar(),
  })

  return (
    <div
      id={'input-wrapper-2'}
      style={{
        position: 'relative',
      }}
      ref={ref}
    >
      <Popover isOpen={isOpen} closeOnBlur={false}>
        <PopoverTrigger>
          <Box>
            <DateInput
              onOpen={() => {
                openCalendar();
              }}
              disabled={disabled}
              styles={styles}
            />
            <When condition={!isRhfBound && error}>
              <Text color='red.300'>{error}</Text>
            </When>
          </Box>
        </PopoverTrigger>
        <PopoverContent >
          <PopoverArrow />
          <PopoverBody >
            <When condition={viewMode === 'YEAR_VIEW'}>
              <YearViewMode styles={styles} />
            </When>

            <When condition={viewMode === 'MONTH_VIEW'}>
              <MonthViewMode styles={styles} />
            </When>
            <When condition={viewMode === 'CALENDAR_VIEW'}>
              <CalendarController styles={styles} />
              <MonthYearPanel styles={styles} />
              <DatePickerBody
                key={monthYearPanelData}
                styles={styles}
              />
              <Today
                styles={styles}
                onChange={props.onChange}
                onClose={closeCalendar}
              />
            </When>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

interface Props extends Record<string, any> {
  isRhfBound?: boolean;
  isNepali?: boolean;
  isDark?: boolean;
  onChange?: (date: string) => void;
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
