import React from "react";
import { DatePickerProps } from "./interface";
import { RigoNepaliDatepickerRangeContext } from "./rigo-nepali-date-picker-context";

export const RigoNepaliDatepickerRange = (props: DatePickerProps) => {
  const { children, ...rest } = props
  return (
    <>

      <RigoNepaliDatepickerRangeContext.Provider
        value={{
          ...rest,
        }}
      >
        {children}
      </RigoNepaliDatepickerRangeContext.Provider>
    </>
  );
};

