import { FormHelperText  } from "@chakra-ui/react";
import { FormHelperTextProps } from "./interface";
import { useRadioGroup } from "./use-radio-group";

export const RigoFormHelperText = (props: FormHelperTextProps) => {
  const { required } = useRadioGroup();
  if (required) {
    return null;
  }

  return (
    <FormHelperText 
      m={0}
      pl='10px'
      color='gray.500'
      fontWeight='300'
      fontSize='14px'
      {...props}
    >
      optional
    </FormHelperText>
  );
};
