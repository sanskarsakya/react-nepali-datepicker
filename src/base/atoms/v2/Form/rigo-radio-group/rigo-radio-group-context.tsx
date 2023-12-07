import React from "react";
import { RadioGroupProps } from "./interface";
import { Box, HStack } from "@chakra-ui/react";
export const RigoRadioGroupContext = React.createContext<RadioGroupProps>({
  label: "Sample label",
  name: "",
  control: undefined,
  errors: undefined,
  required: false,
  rule: undefined,
  value: "",
  onChange: undefined,
  options: [],
  components: { wrapper: HStack, item: Box },
});
RigoRadioGroupContext.displayName = "RigoRadioGroupContext";
