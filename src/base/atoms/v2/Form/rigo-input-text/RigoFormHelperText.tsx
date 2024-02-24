import { FormHelperText } from "@chakra-ui/react";
import { FormHelperTextPropsType } from "./interface";
import { useInput } from "./useInput";

export const RigoFormHelperText = (props: FormHelperTextPropsType) => {
  const { required } = useInput();
  if (!required) {
    return null;
  }

  return (
    <FormHelperText
      m={0}
      pl='10px'
      color='red.600'
      fontWeight='300'
      fontSize='14px'
      {...props}
    >
      *
    </FormHelperText>
  );
};
