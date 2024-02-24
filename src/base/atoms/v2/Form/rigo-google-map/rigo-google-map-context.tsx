import React from "react";

export const RigoGoogleMapContext = React.createContext<any>({
  label: "Sample label",
  name: "",
  control: undefined,
  errors: undefined,
  required: false,
  rule: undefined,
  value: "",
  onChange: undefined,
});
RigoGoogleMapContext.displayName = "RigoGoogleMapContext";
