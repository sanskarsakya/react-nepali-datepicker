import { Flex } from '@chakra-ui/react';
import { InputTextProps } from './interface';
import { RigoInputText } from './RigoInputText';
import { RigoFormControl } from './RigoFormControl';
import { RigoFormHelperText } from './RigoFormHelperText';
import { RigoFormLabel } from './RigoFormLabel';
import { RigoComponent } from './RigoComponent';
import { RigoFormErrorLabel } from './RigoFormErrorLabel';

export const RigoDefault = (props: InputTextProps) => {
  return (
    <RigoInputText {...props}>
      <RigoFormControl >
        <RigoFormLabel />
        <RigoComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoInputText>
  );
};
