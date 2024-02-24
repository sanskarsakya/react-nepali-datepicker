import { Button, Center, Flex, IconButton, Text } from '@chakra-ui/react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useDatePickerStore } from '../store';

interface CalendarControllerProps {
  styles: any
}

export const CalendarController = ({
  styles
}: CalendarControllerProps) => {

  return <Flex
  px={3}
  py={0.5}
    w="full"
    alignItems="center"
    justifyContent="space-between"
    sx={styles.calendar_controller.panel}
  >
    <Flex >
      <PreviousYearButton />
      <PreviousMonthButton />
    </Flex>

    <Flex >
      <MonthButton />
      <Center>
        <Text fontSize='16px' fontWeight='600'>
          -
        </Text>
      </Center>
      <YearButton />
    </Flex>

    <Flex >
      <NextMonthButton />
      <NextYearButton />
    </Flex>
  </Flex>;

};

export const PreviousYearButton = () => {
  const { previousYear } = useDatePickerStore()

  return <IconButton
  size="sm"
    aria-label='previous-year-button'
    id="previous-year-button"
    bg="transparent"
    _hover={{ color: '#0875e1', bg: 'gray.100' }}
    icon={<AiOutlineDoubleLeft />}
    onClick={previousYear}
  />;
}


export const PreviousMonthButton = () => {
  const { previousMonth } = useDatePickerStore();

  return (
    <IconButton
    size="sm"
      aria-label='previous-month-button'
      id="previous-month-button"
      bg="transparent"
      _hover={{ color: '#0875e1', bg: 'gray.100' }}
      icon={<AiOutlineLeft />}
      onClick={previousMonth}
    // isDisabled={_selected + 1 < fromCalendarEngine.minADYear}
    />
  );
};

export const NextMonthButton = () => {
  const { nextMonth } = useDatePickerStore();

  return (
    <IconButton
    size="sm"
      aria-label='next-month-button'
      id='next-month-button'
      bg="transparent"
      _hover={{ color: '#0875e1', bg: 'gray.100' }}
      icon={<AiOutlineRight />}
      onClick={nextMonth}
    // isDisabled={_selected > fromCalendarEngine.maxADYear}
    />
  );
};


export const NextYearButton = () => {
  const { nextYear } = useDatePickerStore();

  return (
    <IconButton
    size="sm"
      aria-label='next-year-button'
      id='next-year-button'
      bg="transparent"
      _hover={{ color: '#0875e1', bg: 'gray.100' }}
      icon={<AiOutlineDoubleRight />}
      onClick={nextYear}
    // isDisabled={_selected + 1 > fromCalendarEngine.maxADYear}
    />
  );
};


export const MonthButton = () => {
  const {
    controllerLabel,
    goToMonthView,
  } = useDatePickerStore()

  return (
    <Button
    px={2}
      variant='unstyled'
      size="sm"
      color='rigo.primary'
      _hover={{ color: '#0875e1', bg: 'gray.100' }}
      rounded="none"
      onClick={goToMonthView}
    >
      <Text fontSize='sm' fontWeight='medium'>
        {controllerLabel.month}
      </Text>
    </Button>
  );
};

export const YearButton = () => {
  const {
    controllerLabel,
    goToYearView,
  } = useDatePickerStore()

  return (
    <Button
      variant='unstyled'
      px={2}
      rounded="none"
      color='rigo.primary'
      size="sm"
      _hover={{ color: '#0875e1', bg: 'gray.100' }}
      onClick={goToYearView}
    >
      <Text fontSize='sm' fontWeight='medium'>
        {controllerLabel.year}
      </Text>
    </Button>
  );
};
