import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { UncontrollerComponentProps } from './interface';
import { useInput } from './useInput';
import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

import React from 'react';

export const RigoUncontrolledComponent = (
  props: UncontrollerComponentProps,
) => {
  const [_value, _setValue] = useState<any>('');

  const { onChangeRHF, value: rhfValue, ...propsRest } = props;
  const {
    name,
    value,
    control,
    onChange: _onChange,
    isNepaliInput = false,
    ...contextRest
  } = useInput();
  const valueNormalized = control ? rhfValue : value;
  React.useEffect(() => {
    _setValue(valueNormalized);
  }, []);

  const handleChange = (e: any) => {
    const inputval = e.target.value;
    if (isNepaliInput) {
      const returnValue = inputval
      _setValue(returnValue);
      _onChange?.(name, returnValue);
      onChangeRHF?.(returnValue);
      return;
    }
    _setValue(inputval);
    _onChange?.(name, inputval);
    onChangeRHF?.(inputval);
  };

  const inputProps = {
    name,
    value: _value ?? valueNormalized,
    ...contextRest,
    ...propsRest,
  };
  if (props?.type === 'password') {
    return (
      <PasswordInput
        borderColor='#cccccc'
        rounded='sm'
        height={'38px'}
        bg='white'
        fontSize={14}
        onChange={handleChange}
        {...inputProps}
      />
    );
  }
  return (
    <Input
      borderColor='#cccccc'
      rounded='sm'
      height={'38px'}
      bg='white'
      fontSize={14}
      onChange={handleChange}
      _hover={{ borderColor: '#a0aec0' }}
      {...inputProps}
    />
  );
};

const PasswordInput = (props: any) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <InputGroup size='md'>
      <Input
        {...props}
        _hover={{ borderColor: '#a0aec0' }}
        type={show ? 'text' : 'password'}
      />
      <InputRightElement>
        <IconButton
          bg='transparent'
          aria-label='show password'
          h='1.75rem'
          size='sm'
          color='gray.400'
          onClick={handleClick}
          _hover={{
            background: 'none',
            color: 'blue.300',
          }}
          _focus={{ boxShadow: 'none' }}
          icon={show ? <HiOutlineEyeOff /> : <HiOutlineEye />}
        />
      </InputRightElement>
    </InputGroup>
  );
};
