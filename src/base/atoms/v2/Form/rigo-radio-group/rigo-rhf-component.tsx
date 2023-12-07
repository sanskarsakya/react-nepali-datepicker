import { useRadioGroup } from "./use-radio-group";
import { Controller } from "react-hook-form";
import { isEmpty } from "lodash";
import * as fromHelpers from "../@form-helper";
import * as fromFormHelpers from "../@form-helper";
import { RigoUncontrollerComponent } from "./rigo-uncontrolled-component";

export const RigoRhfComponent = (
  props: any, //PxControlledComponentProps
) => {
  const { control, rule, name, required } = useRadioGroup();
  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => {
        return (
          <RigoUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};
