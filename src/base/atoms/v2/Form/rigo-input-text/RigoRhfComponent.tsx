import { Controller } from "react-hook-form";
import isEmpty from "lodash/isEmpty";

import * as fromFormHelpers from "../@form-helper";
import { ControlledComponentProps } from "./interface";
import { useInput } from "./useInput";
import { RigoUncontrolledComponent } from "./RigoUncontrolledComponent";

export const RigoRhfComponent = (props: ControlledComponentProps) => {
  const context = useInput();
  const { control, rule, name, required } = context;
  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromFormHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => (
        <RigoUncontrolledComponent
          value={value}
          onChangeRHF={onChange}
          {...props}
        />
      )}
    />
  );
};
