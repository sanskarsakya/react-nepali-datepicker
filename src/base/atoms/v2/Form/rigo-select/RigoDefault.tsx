import { Flex } from "@chakra-ui/react";
import { RigoComponent } from "./RigoComponent";
import { RigoFormControl } from "./RigoFormControl";
import { RigoFormErrorLabel } from "./RigoFormErrorLabel";
import { RigoFormHelperText } from "./RigoFormHelperText";
import { RigoFormLabel } from "./RigoFormLabel";
import { RigoSelect } from "./RigoSelect";

type PxDefaultProps = any;
export const RigoDefault = (props: PxDefaultProps) => {
  return (
    <RigoSelect {...props}>
      <RigoFormControl>
        <Flex gap={2}>
          <RigoFormLabel />
          <RigoFormHelperText />
        </Flex>
        <RigoComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoSelect>
  );
};
