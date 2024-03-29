import * as fromHelpers from '../@form-helper';
import { FormErrorLable } from '../form-error-label';
import { FormErrorLabelProps } from './interface';
import { useRadioGroup } from './use-radio-group';

export const RigoFormErrorLabel = (props: FormErrorLabelProps) => {
  const { name, errors, required } = useRadioGroup();

  const error =
    errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message;
  if (!error) {
    return null;
  }
  return (
    <FormErrorLable
      // py='2px'
      px={1}
      lineHeight={1.4}
      fontSize='14px'
      message={error}
      {...props}
    />
  );
};
