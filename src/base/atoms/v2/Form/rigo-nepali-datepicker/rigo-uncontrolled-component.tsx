import { useDatePicker } from './use-date-picker';
// import { RigoNepaliDatePicker } from './components/nepali-date-picker copy';
// import { CALENDAR_MODE } from './components/nepali-date-picker copy/calendar-engine';
import dayjs from 'dayjs';
import { DatePicker } from './components/ui';

export const RigoUncontrolledComponent = (props: any) => {
  // todo: write funciton for back and forth conversion between nepali and english date for proxy rhf value and onChangeRhf function

  const {
    isRhfBound = false,
    onChangeRHF,
    value: rhfValue,
    // ...propRest
  } = props;

  const context = useDatePicker();

  // console.log('$$ - date picker uncontrlled component', context);

  const {
    name,
    value,
    control,
    // label,
    // errors,
    // required,
    // rule,
    // this is user defined value for uncontrolled component
    onChange: _onChange,
    // dateType = CALENDAR_MODE.ENGLISH,
    ...contextRest
  } = context;

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value.date);
  };

  let valueNormalized = '';

  if (control) {
    if (rhfValue) {
      valueNormalized = dayjs(rhfValue).format('YYYY-MM-DD');
    } else {
      valueNormalized = rhfValue;
    }
  } else {
    if (value) {
      valueNormalized = dayjs(value).format('YYYY-MM-DD');
    } else {
      valueNormalized = value;
    }
  }

  // console.log("valueNormalized", valueNormalized)

  return (
    <DatePicker
      isRhfBound={isRhfBound}
      isNepali={false}
      onChange={handleChange}
      date={valueNormalized}
      {...contextRest}
    />
  );
};
