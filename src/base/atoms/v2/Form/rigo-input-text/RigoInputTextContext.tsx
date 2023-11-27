import React from "react";
import { InputTextProps } from "./interface";

export const RigoInputTextContext = React.createContext<InputTextProps>({
  label: "Sample label",
  name: "",
  control: undefined,
  errors: undefined,
  required: false,
  rule: undefined,
  value: "",
  onChange: undefined,
});
RigoInputTextContext.displayName = "RigoInputTextContext";
