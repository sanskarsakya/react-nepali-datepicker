import { DatePickerProps } from './interface';
import { RigoComponent } from './rigo-component';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormErrorLabel } from './rigo-form-error-label';
import { RigoFormLabel } from './rigo-form-label';
import { RigoNepaliDatePicker } from './rigo-nepali-date-picker';

export const RigoDefault = (props: DatePickerProps) => {
  return (
    <RigoNepaliDatePicker {...props}>
      <RigoFormControl>
        <RigoFormLabel />
        <RigoComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoNepaliDatePicker>
  );
};
