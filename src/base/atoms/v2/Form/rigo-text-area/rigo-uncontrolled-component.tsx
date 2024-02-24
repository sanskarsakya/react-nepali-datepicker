import { Textarea } from '@chakra-ui/react';
import { useTextArea } from './use-textarea';

export const RigoUncontrolledComponent = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onChangeRHF, value: rhfValue, onChange, ...propsRest } = props;
  const {
    name,
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    label,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    errors,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    required,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rule,
    onChange: _onChange,
    ...contextRest
  } = useTextArea();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
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
  return (
    <Textarea 
    borderColor="#cccccc"
    bg="white"
    rounded="sm"
    onChange={handleChange} {...inputProps} />
  );
};
