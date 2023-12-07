import {
  FormControl ,
  FormControlProps,
} from "@chakra-ui/react";
import { useRadioGroup } from "./use-radio-group";

export const RigoFormControl = (props: FormControlProps) => {
  const { children, ...rest } = props;
  const { name } = useRadioGroup();

  return (
    <FormControl
      id={name}
      display='flex'
      flexDirection='column'
      gap={2}
      width='100%'
      isRequired={false}
      {...rest}
    >
      {children}
    </FormControl>
  );
};
