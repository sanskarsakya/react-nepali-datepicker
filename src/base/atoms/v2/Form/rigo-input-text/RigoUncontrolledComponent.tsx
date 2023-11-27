import { Input } from "@chakra-ui/react";
import { UncontrollerComponentProps } from "./interface";
import { useInput } from "./useInput";

export const RigoUncontrolledComponent = (props: UncontrollerComponentProps) => {
  const { onChangeRHF, value: rhfValue, ...propsRest } = props;
  const {
    name,
    value, // this is user defined value for uncontrolled component

    // label,
    // control,
    // errors,
    // required,
    // rule,

    // this is user defined value for uncontrolled component
    onChange: _onChange,

    ...contextRest

  } = useInput();

  const handleChange = (e: any) => {
    const { value } = e.target;
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = rhfValue ?? value;

  const inputProps = {
    name,
    value: valueNormalized,
    ...contextRest,
    ...propsRest,
  };
  return <Input onChange={handleChange} {...inputProps} />;
};
