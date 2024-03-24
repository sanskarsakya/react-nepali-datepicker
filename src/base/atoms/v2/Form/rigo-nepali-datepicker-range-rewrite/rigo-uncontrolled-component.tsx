import { useDatePicker } from './use-date-picker';
import dayjs from 'dayjs';
import { DateRangeImplementation } from './range/implementation';

export const RigoUncontrolledComponent = (props: any) => {

  const {
    onChangeRHF,
    value: rhfValue,
  } = props;

  const context = useDatePicker();

  const {
    name,
    value,
    control,
    onChange: _onChange,
  } = context;

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.({
      startDate: value.startDate,
      endDate: value.endDate
    });
  };

  let valueNormalized = {
    startDate: "",
    endDate: ""
  };

  if (control) {
    if (rhfValue) {
      valueNormalized = {
        startDate: dayjs(rhfValue.startDate).format('YYYY-MM-DD'),
        endDate: dayjs(rhfValue.endDate).format('YYYY-MM-DD')
      };
    } else {
      valueNormalized = rhfValue;
    }
  } else {
    if (value) {
      valueNormalized = {
        startDate: dayjs(value.startDate).format('YYYY-MM-DD'),
        endDate: dayjs(value.endDate).format('YYYY-MM-DD')
      };
    } else {
      valueNormalized = value;
    }
  }

  return (
    <DateRangeImplementation onCHange={handleChange} value={valueNormalized} />
  );
};
