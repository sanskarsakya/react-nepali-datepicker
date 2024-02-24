import { TextProps } from '@chakra-ui/react';
import get from "lodash/get";
import { FormErrorLable } from "../form-error-label";
import { useRigoSelect } from './useRigoSelect';

export const RigoFormErrorLabel = (props: TextProps) => {
  const { name, errors, required } = useRigoSelect();

  const error = errors && get(errors, name)?.message;
  if (!error) {
    return null;
  }
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
