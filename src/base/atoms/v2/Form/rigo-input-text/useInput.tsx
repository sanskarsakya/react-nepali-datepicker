import React from "react";
import { RigoInputTextContext } from "./RigoInputTextContext";

export const useInput = () => {
  const context = React.useContext(RigoInputTextContext);
  if (context === undefined) {
    throw new Error("useDatePicker must be used within a <InputText />");
  }
  return context;
};
