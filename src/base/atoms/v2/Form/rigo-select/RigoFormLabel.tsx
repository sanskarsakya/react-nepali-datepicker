import { FormLabelProps } from '@chakra-ui/react';
import { useRigoSelect } from './useRigoSelect';
import {FormLabel} from "../form-label";

export const RigoFormLabel = (props: FormLabelProps) => {
  const { label } = useRigoSelect();
  return <FormLabel label={`${label}`} {...props} />;
};
