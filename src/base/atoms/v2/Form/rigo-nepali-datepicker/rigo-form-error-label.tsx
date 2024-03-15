import * as fromFormHelpers from '../@form-helper';
import { FormErrorLable } from '../form-error-label';
import { FormErrorLabelProps } from './interface';
import { useDatePicker } from './use-date-picker';

export const RigoFormErrorLabel = (props: FormErrorLabelProps) => {
  const context = useDatePicker();

  const { required, name, errors } = context;

  const error =
    errors && fromFormHelpers.resolveObjectValueByPath(errors, name)?.message;
  if (!error) {
    return null;
  }
  return (
    <FormErrorLable
      // py="2px"
      px={1}
      lineHeight={1.4}
      fontSize='14px'
      message={error}
      {...props}
    />
  );
};
