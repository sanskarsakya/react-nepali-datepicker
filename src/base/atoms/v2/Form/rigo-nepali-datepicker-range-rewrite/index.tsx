import { RigoComponent } from "./rigo-component";
import { RigoDefault } from "./rigo-default";
import { RigoFormControl } from "./rigo-form-control";
import { RigoFormErrorLabel } from "./rigo-form-error-label";
import { RigoFormHelperText } from "./rigo-form-helper-text";
import { RigoFormLabel } from "./rigo-form-label";
import { RigoNepaliDatepickerRange } from "./rigo-nepali-date-picker";
import { DatePickerProps } from "./interface";
import { RangeComponent } from "./range-component";
import { RangeDefault } from "./range-defualt";

export const NepaliDatepickerRangeV2 = (props: DatePickerProps) => {
  console.log({ props })
  return <RigoNepaliDatepickerRange {...props} />;
};

NepaliDatepickerRangeV2.Default = RigoDefault;
NepaliDatepickerRangeV2.RangeDefault = RangeDefault;
NepaliDatepickerRangeV2.FormLabel = RigoFormLabel;
NepaliDatepickerRangeV2.HelperText = RigoFormHelperText;
NepaliDatepickerRangeV2.ErrorLabel = RigoFormErrorLabel;
NepaliDatepickerRangeV2.FormControl = RigoFormControl;
NepaliDatepickerRangeV2.Component = RigoComponent;
NepaliDatepickerRangeV2.RangeComponent = RangeComponent;


export default NepaliDatepickerRangeV2;
