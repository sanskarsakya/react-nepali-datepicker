import { SelectProps } from './interface';
import { RigoComponent } from './RigoComponent';
import { RigoFormControl } from './RigoFormControl';
import { RigoFormErrorLabel } from './RigoFormErrorLabel';
import { RigoFormLabel } from './RigoFormLabel';
import { RigoSelect } from './RigoSelect';

export const RigoDefault = (props: SelectProps) => {
  return (
    <RigoSelect {...props}>
      <RigoFormControl>
        <RigoFormLabel />
        <RigoComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoSelect>
  );
};
