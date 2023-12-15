import { TextProps } from '@chakra-ui/react';
import * as fromFormHelpers from '../@form-helper';
import { useRigoSelect } from './useRigoSelect';
import FormErrorLable from "../FormErrorLabel";

export const RigoFormErrorLabel = (props: TextProps) => {
  const { name, errors, required } = useRigoSelect();

  if (!required) {
    return null;
  }

  const error =
    errors && fromFormHelpers.resolveObjectValueByPath(errors, name)?.message;

  return (
    <FormErrorLable
      py="2px"
      px={1}
      fontSize="14px"
      message={error}
      {...props}
    />
  );
};
