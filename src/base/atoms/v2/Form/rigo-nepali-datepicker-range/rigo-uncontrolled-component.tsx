import { useDatePicker } from './use-date-picker';
import dayjs from 'dayjs';
import { DatePicker } from './components/ui';

export const RigoUncontrolledComponent = (props: any) => {
  
  const {
    isRhfBound = false,
    onChangeRHF,
    value: rhfValue,
    ...propRest
  } = props;

  const context = useDatePicker();

   const {
    name,
    value,
    control,
    onChange: _onChange,
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

  return (
    <DatePicker
      isRhfBound={isRhfBound}
      isNepali={false}
      onChange={handleChange}
      date={valueNormalized}
      {...contextRest}
      {...propRest}
    />
  );
};
