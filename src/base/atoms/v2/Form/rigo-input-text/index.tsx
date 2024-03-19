import { RigoComponent } from "./RigoComponent";
import { RigoDefault } from "./RigoDefault";
import { RigoFormControl } from "./RigoFormControl";
import { RigoFormErrorLabel } from "./RigoFormErrorLabel";
import { RigoFormHelperText } from "./RigoFormHelperText";
import { RigoFormLabel } from "./RigoFormLabel";
import { RigoInputText } from "./RigoInputText";
import {InputTextProps} from './interface';

export const InputTextV2 = (props: InputTextProps) => {
  return <RigoInputText {...props} />;
};

InputTextV2.Default = RigoDefault;
InputTextV2.FormLabel = RigoFormLabel;
InputTextV2.HelperText = RigoFormHelperText;
InputTextV2.ErrorLabel = RigoFormErrorLabel;
InputTextV2.FormControl = RigoFormControl;
InputTextV2.Component = RigoComponent;


export default InputTextV2;
