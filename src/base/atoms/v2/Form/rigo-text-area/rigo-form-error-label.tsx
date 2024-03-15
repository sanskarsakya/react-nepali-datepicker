import * as fromFormHelpers from '../@form-helper';
import { FormErrorLable } from '../form-error-label';
import { FormErrorLabelProps } from './interface';
import { useTextArea } from './use-textarea';

export const RigoFormErrorLabel = (props: FormErrorLabelProps) => {
  const { name, errors, required } = useTextArea();

  const error =
    errors && fromFormHelpers.resolveObjectValueByPath(errors, name)?.message;
  if (!error) {
    return null;
  }
  return (
    <FormErrorLable
      // py='2px'
      lineHeight={1.4}
      px={1}
      fontSize='14px'
      message={error}
      {...props}
    />
  );
};
