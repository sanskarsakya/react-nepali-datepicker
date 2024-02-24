import React from "react";
import { DatePickerProps } from "./interface";
import { RigoNepaliDatePickerContext } from "./rigo-nepali-date-picker-context";

export const RigoNepaliDatePicker = (props: DatePickerProps) => {
  const { children, ...rest } = props
  return (
    <>

      <RigoNepaliDatePickerContext.Provider
        value={{
          ...rest,
        }}
      >
        {children}
      </RigoNepaliDatePickerContext.Provider>
    </>
  );
};

