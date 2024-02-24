import { Checkbox, Text } from '@chakra-ui/react';
import { useCheckbox } from './use-checkbox';

export const RigoUncontrolledComponent = (props: any) => {
  const { onChangeRHF, value: rhfValue, onChange, ...propsRest } = props;
  const {
    name,
    value,
    label,
    control,
    errors,
    required,
    rule,
    onChange: _onChange,
    ...contextRest
  } = useCheckbox();

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = rhfValue ?? value;

  const inputProps = {
    name,
    isChecked: valueNormalized,
    ...contextRest,
    // ...propsRest,
  };
  return (
    <Checkbox fontSize="8px" onChange={handleChange} {...inputProps} />
  );
};
