import { RigoComponent } from './rigo-component';
import { RigoDefault } from './rigo-default';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormErrorLabel } from './rigo-form-error-label';
import { RigoFormHelperText } from './rigo-form-helper-text';
import { RigoFormLabel } from './rigo-form-label';
import { RigoTextarea } from './rigo-textarea';

export const TextAreaV2 = (props: any) => {
  return <RigoTextarea {...props} />;
};

TextAreaV2.Default = RigoDefault;
TextAreaV2.FormLabel = RigoFormLabel;
TextAreaV2.HelperText = RigoFormHelperText;
TextAreaV2.ErrorLabel = RigoFormErrorLabel;
TextAreaV2.FormControl = RigoFormControl;
TextAreaV2.Component = RigoComponent;

export default TextAreaV2;
