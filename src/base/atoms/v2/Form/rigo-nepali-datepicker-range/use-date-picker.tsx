import React from "react";
import { RigoNepaliDatepickerRangeContext } from "./rigo-nepali-date-picker-context";

export const useDatePicker = () => {
  const context = React.useContext(RigoNepaliDatepickerRangeContext);
  if (context === undefined) {
    throw new Error("useDatePicker must be used within a <NepaliDatePickerRangev2 />");
  }
  return context;
};
