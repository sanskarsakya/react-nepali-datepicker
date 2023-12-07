import React from "react";
import { RigoRadioGroupContext } from "./rigo-radio-group-context";

export const useRadioGroup = () => {
  const context = React.useContext(RigoRadioGroupContext);
  if (context === undefined) {
    throw new Error("useRadioGroup must be used within a <RadioGroup />");
  }
  return context;
};
