// LIBS
import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  Flex,
  useOutsideClick
} from '@chakra-ui/react';
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
import { ModeEnum } from '../entities/model/models';
import { get_base_styles } from './style';

export const DatepickerComponent = () => {


  // VARIABLES
  const ref = React.useRef<HTMLDivElement>(null)
  const startDateRef = React.useRef<HTMLInputElement>(null);
  const endDateRef = React.useRef<HTMLInputElement>(null);

  // HEADLESS HOOK
  const state = useDatePickerStore();
  const {
    isOpen,
    viewMode,
    error,
    monthYearPanelData,
    isRhfBound,
    currentDateSelection
  } = selectCtx(state);

  const {
    closeCalendar
  } = selectEvents(state);

  const styles = get_base_styles(false);

  useOutsideClick({
    ref: ref,
    handler: () => closeCalendar(),
  })

  return (
    <Flex alignItems="center" justifyContent="start">
      <div
        id={'input-wrapper-2'}
        style={{
          position: 'relative',
        }}
        ref={ref}
      >
        <Popover
          initialFocusRef={currentDateSelection === "startDate" ? startDateRef : endDateRef}
          isOpen={isOpen}
          closeOnBlur={true}>
          <PopoverTrigger>
            <Box>
              <DateInput
                styles={styles}
                ref={{
                  startDateRef,
                  endDateRef,
                }}
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
                />
              </When>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </Flex>

  );
};

interface Props extends Record<string, any> {
  isRhfBound?: boolean;
  isNepali?: boolean;
  isDark?: boolean;
  mode?: ModeEnum;
  onChange?: (date: string) => void;
  date?: string | { startDate: string, endDate: string };
  disableDateBefore?: string;
  disableDateAfter?: string;
  disabled?: boolean;
}
export const DatePicker = (props: Props) => {
  return (
    <DatePickerStoreProvider props={props}>
      <DatepickerComponent />
    </DatePickerStoreProvider>
  );
};

