import * as fromFormHelpers from '../@form-helper';
import FormErrorLable from '../FormErrorLabel';
import { FormErrorLabelProps } from './interface';
import { useCheckbox } from './use-checkbox';

export const RigoFormErrorLabel = (props: FormErrorLabelProps) => {
  const { name, errors, required } = useCheckbox();

  if (!required) {
    return null;
  }

  const error =
    errors && fromFormHelpers.resolveObjectValueByPath(errors, name)?.message;

  return (
    <FormErrorLable
      py='2px'
      px={1}
      fontSize='14px'
      message={error}
      {...props}
    />
  );
};
