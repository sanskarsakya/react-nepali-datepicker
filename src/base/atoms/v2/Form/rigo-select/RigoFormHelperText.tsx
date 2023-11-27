import { FormHelperText, FormHelperTextProps } from '@chakra-ui/react';
import { useRigoSelect } from './useRigoSelect';

export const RigoFormHelperText = (props: FormHelperTextProps) => {
  const { required } = useRigoSelect();
  if (required) {
    return null;
  }

  return (
    <FormHelperText
      m={0}
      pl="10px"
      color="gray.500"
      fontWeight="300"
      fontSize="14px"
      {...props}
    >
      optional
    </FormHelperText>
  );
};
