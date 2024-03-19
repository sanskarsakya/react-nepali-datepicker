import { RadioGroupProps } from "./interface";
import { RigoComponent } from "./rigo-component";
import { RigoDefault } from "./rigo-default";
import { RigoFormControl } from "./rigo-form-control";
import { RigoFormErrorLabel } from "./rigo-form-error-label";
import { RigoFormHelperText } from "./rigo-form-helper-text";
import { RigoFormLabel } from "./riog-form-label";
import { RigoRadioGroup } from "./rigo-radio-group";

export const RadioGroupV2 = (props: RadioGroupProps) => {
  return <RigoRadioGroup {...props} />;
};

RadioGroupV2.Default = RigoDefault;
RadioGroupV2.FormLabel = RigoFormLabel;
RadioGroupV2.HelperText = RigoFormHelperText;
RadioGroupV2.ErrorLabel = RigoFormErrorLabel;
RadioGroupV2.FormControl = RigoFormControl;
RadioGroupV2.Component = RigoComponent;

export default RadioGroupV2;
