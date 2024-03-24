import { InputNumberProps } from './interface';
import { RigoComponent } from './rigo-component';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormErrorLabel } from './rigo-form-error-label';
import { RigoFormLabel } from './rigo-form-label';
import { RigoTextarea } from './rigo-textarea';

export const RigoDefault = (props: any) => {
  return (
    <RigoTextarea {...props}>
      <RigoFormControl>
        <RigoFormLabel />
        <RigoComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoTextarea>
  );
};
