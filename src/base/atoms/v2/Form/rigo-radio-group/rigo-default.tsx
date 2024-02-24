import { Flex } from "@chakra-ui/react";
import { RadioGroupProps } from "./interface";
import { RigoComponent } from "./rigo-component";
import { RigoFormControl } from "./rigo-form-control";
import { RigoFormErrorLabel } from "./rigo-form-error-label";
import { RigoFormHelperText } from "./rigo-form-helper-text";
import { RigoFormLabel } from "./riog-form-label";
import { RigoRadioGroup } from "./rigo-radio-group";

export const RigoDefault = (props: RadioGroupProps) => {
  return (
    <RigoRadioGroup {...props}>
      <RigoFormControl>
          <RigoFormLabel />
        <RigoComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoRadioGroup>
  );
};
