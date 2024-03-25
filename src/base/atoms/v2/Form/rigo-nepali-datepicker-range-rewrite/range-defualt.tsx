import { DatePickerProps } from './interface';
import { RangeComponent } from './range-component';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormErrorLabel } from './rigo-form-error-label';
import { RigoFormLabel } from './rigo-form-label';
import { RigoNepaliDatepickerRange } from './rigo-nepali-date-picker';

export const RangeDefault = (props: DatePickerProps) => {
  return (
    <RigoNepaliDatepickerRange {...props}>
      <RigoFormControl>
        <RigoFormLabel />
        <RangeComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoNepaliDatepickerRange>
  );
};
