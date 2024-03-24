import isEmpty from 'lodash/isEmpty';
import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useRigoSelect } from './useRigoSelect';
interface PxUncontrollerComponentProps extends Record<string, any> {
  onChangeRHF?: any;
  value?: any;
}

export const RigoUncontrollerComponent = (
  props: PxUncontrollerComponentProps,
) => {
  const { onChangeRHF, value: rhfValue } = props;

  const context = useRigoSelect();
  const {
    name,
    options,
    control,
    value,
    onChange: _onChange,
    returnScalarValue = false,
    components,
    ...contextRest
  } = context;

  const handleChange = (value: any) => {
    let val = value;
    if (returnScalarValue && !context.isMulti) {
      val = value.value;
    } else if (returnScalarValue && context.isMulti) {
      val = value?.map((option: any) => option.value);
    } else {
      val = value;
    }

    _onChange?.(name, val);
    onChangeRHF?.(val);
  };

  let valueNormalized = control ? rhfValue : value;

  if (returnScalarValue && !context.isMulti) {
    if (valueNormalized) {
      valueNormalized =
        context?.options?.find(
          (option: any) => option.value + '' === valueNormalized + '',
        ) ?? null;
    } else {
      valueNormalized = null;
    }
  } else if (returnScalarValue && context.isMulti) {
    if (isEmpty(valueNormalized)) {
      valueNormalized = [];
    } else {
      valueNormalized = context?.options?.filter((option: any) =>
        valueNormalized.includes(option.value),
      );
    }
  }

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
        ...components,
      }}
      theme={(theme) => {
        return (
          ({
            ...theme,
            borderRadius: 0,
            fontSize:14,
            colors: {
              ...theme.colors,
              primary25: '#EDF2F7',
              // primary: 'black',
            },
          })
        )
      }}
      {...inputProps}
    />
  );
};

export const RigoCreatableUncontrolledComponent = (
  props: PxUncontrollerComponentProps,
) => {
  const { onChangeRHF, value: rhfValue } = props;

  const {
    name,
    options,
    label,
    control,
    errors,
    required,
    rule,
    value,
    onChange: _onChange,
    onCreate: _onCreate,
    returnScalarValue = false,
    ...contextRest
  } = useRigoSelect();

  const [isLoading, setIsLoading] = React.useState(false);
  const [options1, setOptions1] = React.useState(options);
  const [pxvalue, setPxValue] = React.useState<any | null>();

  const handleChange = (value: any) => {
    setPxValue(value);
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const createOption = (label: string) => ({
    label: label,
    value: label.toLowerCase().replace(/\W/g, ''),
  });

  const valueNormalized = pxvalue ?? rhfValue ?? value;

  const inputProps = {
    name,
    value: valueNormalized,
    ...contextRest,
  };

  const handleCreatePx = (inputValue: string) => {
    const newOption = createOption(inputValue);
    _onCreate?.(newOption);
    setOptions1((prev: any) => [...prev, newOption]);
    setPxValue(newOption);
  };

  return (
    <CreatableSelect
      onChange={handleChange}
      onCreateOption={handleCreatePx}
      isClearable
      {...inputProps}
      options={options1}
    />
  );
};
