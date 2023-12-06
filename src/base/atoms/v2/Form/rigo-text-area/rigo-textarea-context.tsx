import React from "react";

export const RigoTextAreaContext = React.createContext<any>({
  label: "Sample label",
  name: "",
  control: undefined,
  errors: undefined,
  required: false,
  rule: undefined,
  value: "",
  onChange: undefined,
});
RigoTextAreaContext.displayName = "RigoTextAreaContext";
