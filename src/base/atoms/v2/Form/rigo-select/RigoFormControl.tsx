import { FormControl, FormControlProps } from '@chakra-ui/react';
import { useRigoSelect } from './useRigoSelect';

export const RigoFormControl = (props: FormControlProps) => {
  const { children, ...rest } = props;
  const { name, required } = useRigoSelect();

  return (
    <FormControl
      id={name}
      display="flex"
      flexDirection="column"
      gap={1}
      width="100%"
      {...rest}
      isRequired={required}
    >
      {children}
    </FormControl>
  );
};
