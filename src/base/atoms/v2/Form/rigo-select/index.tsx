import { RigoComponent, RigoCreateableComponent } from './RigoComponent';
import { RigoDefault } from './RigoDefault';
import { RigoFormControl } from './RigoFormControl';
import { RigoFormErrorLabel } from './RigoFormErrorLabel';
import { RigoFormHelperText } from './RigoFormHelperText';
import { RigoFormLabel } from './RigoFormLabel';
import { RigoSelect } from './RigoSelect';

// INTERFACE
import { SelectProps } from './interface';

export const SelectV2 = (props: SelectProps) => {
  return <RigoSelect {...props} />;
};

SelectV2.Default = RigoDefault;
SelectV2.FormLabel = RigoFormLabel;
SelectV2.HelperText = RigoFormHelperText;
SelectV2.ErrorLabel = RigoFormErrorLabel;
SelectV2.FormControl = RigoFormControl;
SelectV2.Component = RigoComponent;
SelectV2.CreateableComponent = RigoCreateableComponent;

export default SelectV2;
