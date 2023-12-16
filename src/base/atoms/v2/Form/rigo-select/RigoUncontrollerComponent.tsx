import * as _ from "lodash";
import Select from "react-select";
import { useRigoSelect } from "./useRigoSelect";

interface PxUncontrollerComponentProps extends Record<string, any> {
  onChangeRHF?: any;
  value?: any;
}

export const RigoUncontrollerComponent = (props: PxUncontrollerComponentProps,) => {
  const { onChangeRHF, value: rhfValue } = props;

  const context = useRigoSelect();
  const {
    name,
    options,
    control,
    value,
    onChange: _onChange,
  } = context

  const contextRest = _.unset(context, [
    "name",
    "options",
    "label",
    "control",
    "errors",
    "required",
    "rule",
    "value",
    "onChange"
  ])


  const handleChange = (value: any) => {

    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = control ? rhfValue : value;

  const inputProps = {
    name,
    value: valueNormalized,
    options,
    ...contextRest,
  };

  return (
    <Select
      onChange={handleChange}
      components={{
        IndicatorSeparator: () => null,
      }}
      {...inputProps}
    />
  );
};
