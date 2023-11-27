import { Avatar, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Select, { components } from 'react-select';
import { Dropdown } from '../common/Dropdown';
import { DropdownIndicator } from '../common/DropdownIndicator';

// CUSTOM OPTIONS
const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <Avatar mr={2} size="xs" name="Kola Tioluwani" src={props.data.src} />
      {props.children}
    </components.Option>
  );
};

const selectStyles = {
  container: (provided: any) => ({
    ...provided,
    width: 250,
  }),
  control: (provided: any) => ({
    ...provided,
    margin: '8px 10px',
    borderColor: 'transparent',
    borderStyle: 'none',
    borderWidth: 0,
    boxShadow: 'none',
  }),
  option: (provided: any) => ({
    ...provided,
    padding: '8px 18px',
  }),
  menu: () => ({ boxShadow: 'inset 0 0 0 rgba(0, 0, 0, 0.1)' }),
};

export const ReporterDropdown = (props: any) => {
  const { name, value, onChange, options } = props;

  const [state, setState] = useState({
    isOpen: false,
    value: {
      label: '',
      value: '',
      src: '',
    },
    controlValue: 'All',
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      value: value,
      controlValue: value?.label,
    }));
  }, [value]);
  const toggleOpen = () => {
    setState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };
  const onSelectChange = (value: any) => {
    setState((prev) => ({
      ...prev,
      value: value,
      controlValue: value.label,
      isOpen: !prev.isOpen,
    }));
    onChange?.(value);
  };
  const { isOpen, value: localValue } = state;
  return (
    <Dropdown
      isOpen={isOpen}
      onClose={toggleOpen}
      target={
        <Button
          borderRadius="sm"
          size="sm"
          onClick={toggleOpen}
          _hover={{ bg: 'unset' }}
          fontWeight="normal"
          color="brand.label"
        >
          {localValue ? (
            <>
              <Avatar
                mr={2}
                size="xs"
                name="Kola Tioluwani"
                src={localValue?.src}
              />
              <Text>{localValue?.label}</Text>
            </>
          ) : (
            'Select Reporter'
          )}
        </Button>
      }
    >
      <Select
        autoFocus
        backspaceRemovesValue={false}
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,
          Option,
        }}
        controlShouldRenderValue={false}
        hideSelectedOptions={true}
        closeMenuOnSelect={true}
        isClearable={false}
        menuIsOpen
        onChange={onSelectChange}
        options={options}
        placeholder="Select Filter"
        styles={selectStyles}
        tabSelectsValue={false}
        value={localValue}
      />
    </Dropdown>
  );
};

export default ReporterDropdown;
