/* eslint-disable @typescript-eslint/no-unused-vars */
// import { isEmpty } from "lodash";
// import * as fromFormHelpers from "../@form-helper";
import { Controller } from 'react-hook-form';

import { ControlledComponentProps } from './interface';
import { RigoUncontrolledComponent } from './rigo-uncontrolled-component';
import { useDatePicker } from './use-date-picker';

export const RigoRhfComponent = (props: ControlledComponentProps) => {
  const context = useDatePicker();

  const { control, required, name, setData, ...contextProps } = context;

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: required,
          message: 'Required',
        },
        // validate: (value: string) => {


        //   /**
        //    * if mode is range
        //    *  if start date and end date
        //    *    validate start date is before end date
        //    * 
        //    *  if start date is required
        //    *    normal validation
        //    * 
        //    *  if end date is required
        //    * 
        //    * else : 
        //    *   if date is required
        //    *      normal validation
        //    *    
        //    */


        //   // always gets english date, avlidate for english date
        //   // const validation_result = validate(
        //   //   value,
        //   //   context.disableDateBefore as string,
        //   //   context.disableDateAfter as string,
        //   // );

        //   // // console.log({validation_result, value});

        //   // if (!validation_result.is_valid) {
        //   //   return validation_result.message;
        //   // }
        //   return true;
        // },
      }}
      render={({ field: { onChange, value } }) => (
        <RigoUncontrolledComponent
          isRhfBound={true}
          onChangeRHF={onChange}
          {...contextProps}
          {...props}
          value={value}
        />
      )}
    />
  );
};
