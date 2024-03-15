import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
} from '@chakra-ui/react';

interface FormLabelProps extends ChakraFormLabelProps {
  label?: string;
  customLabel?: any;
}

export const FormLabel = ({ label, customLabel, ...rest }: FormLabelProps) => {
  if (customLabel) {
    return customLabel;
  }

  if (label) {
    return (
      <ChakraFormLabel
        test-id={`form-label`}
        color='#2e2e2e'
        fontWeight='400'
        fontSize='14px'
        p={0}
        m={0}
        // lineHeight='1.5'
        {...rest}
      >
        {label}
      </ChakraFormLabel>
    );
  }
  return null;
};
