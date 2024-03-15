import { FormControl, FormControlProps } from '@chakra-ui/react';
import { useDatePicker } from './use-date-picker';

export const RigoFormControl = (props: FormControlProps) => {
  const { children, ...rest } = props;
  const { name, required } = useDatePicker();

  return (
    <FormControl
      id={name}
      display='flex'
      flexDirection='column'
      gap={1}
      width='100%'
      isRequired={required}
      {...rest}
    >
      {children}
    </FormControl>
  );
};
