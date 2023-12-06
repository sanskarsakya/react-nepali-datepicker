import { RigoComponent } from './rigo-component';
import { RigoDefault } from './rigo-default';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormErrorLabel } from './rigo-form-error-label';
import { RigoFormHelperText } from './rigo-form-helper-text';
import { RigoFormLabel } from './rigo-form-label';
import { RigoCheckbox } from './rigo-checkbox';

export const CheckboxV2 = (props: any) => {
  return <RigoCheckbox {...props} />;
};

CheckboxV2.Default = RigoDefault;
CheckboxV2.FormLabel = RigoFormLabel;
CheckboxV2.HelperText = RigoFormHelperText;
CheckboxV2.ErrorLabel = RigoFormErrorLabel;
CheckboxV2.FormControl = RigoFormControl;
CheckboxV2.Component = RigoComponent;

export default CheckboxV2;
