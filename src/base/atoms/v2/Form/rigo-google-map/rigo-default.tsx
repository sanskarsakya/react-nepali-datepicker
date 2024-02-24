import { Flex } from '@chakra-ui/react';
import { GoogleMapProps } from './definition';
import { RigoGoogleMap } from './rigo-textarea';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormHelperText } from './rigo-form-helper-text';
import { RigoFormLabel } from './rigo-form-label';
import { RigoComponent } from './rigo-component';
import { RigoFormErrorLabel } from './rigo-form-error-label';

export const RigoDefault = (props: GoogleMapProps) => {
  return (
    <RigoGoogleMap {...props}>
      <RigoFormControl>
        <Flex gap={2}>
          <RigoFormLabel />
          <RigoFormHelperText />
        </Flex>
        <RigoComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoGoogleMap>
  );
};
