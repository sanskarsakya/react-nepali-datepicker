import * as fromFormHelpers from '../@form-helper';
import {FormErrorLable} from '../form-error-label';
import { FormErrorLabelProps } from './definition';
import { useGoogleMap } from './use-google-map';

export const RigoFormErrorLabel = (props: FormErrorLabelProps) => {
  const { name, errors, required } = useGoogleMap();

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
