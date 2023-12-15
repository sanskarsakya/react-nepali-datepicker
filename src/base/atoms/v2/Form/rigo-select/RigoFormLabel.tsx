import { FormLabelProps } from '@chakra-ui/react';
import { useRigoSelect } from './useRigoSelect';
import FormLabel from "../FormLabel";

export const RigoFormLabel = (props: FormLabelProps) => {
  const { label } = useRigoSelect();
  return <FormLabel label={`${label}`} {...props} />;
};
