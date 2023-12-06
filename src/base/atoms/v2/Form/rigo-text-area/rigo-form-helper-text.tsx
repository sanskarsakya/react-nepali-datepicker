import { FormHelperText } from '@chakra-ui/react';
import { FormHelperTextPropsType } from './interface';
import { useTextArea } from './use-textarea';

export const RigoFormHelperText = (props: FormHelperTextPropsType) => {
  const { required } = useTextArea();
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
