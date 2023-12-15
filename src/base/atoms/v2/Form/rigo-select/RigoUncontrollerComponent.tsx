import Select from "react-select";
import PriorityDropdown from "./components/PriorityDropdown";
import ReporterDropdown from "./components/ReporterDropdown";
import StatusDropdown from "./components/StatusDropdown";
import { useRigoSelect } from "./useRigoSelect";

interface PxUncontrollerComponentProps extends Record<string, any> {
  onChangeRHF?: any;
  value?: any;
}

export const RigoUncontrollerComponent = (
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

    // this is user defined value for uncontrolled component
    value,
    onChange: _onChange,

    ...contextRest
  } = useRigoSelect();

  //  explicit passing:
  // custom handle change

  // props passed:
  // name: '',
  // value: null,
  // options: null,
  // ...contextRest

  // props omited:
  // onChange: undefined,
  // label: 'Sample label',
  // control: undefined,
  // errors: undefined,
  // required: false,
  // rule: undefined,

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = rhfValue ?? value;

  const inputProps = {
    name,
    value: valueNormalized,
    options,
    ...contextRest,
  };

  /**
   * name
   * value
   * options
   * onchange
   */

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

export const PxStatusUncontrollerComponent = (
  props: PxUncontrollerComponentProps,
) => {
  const { onChangeRHF, value: rhfValue, ...rest } = props;

  const {
    name,
    options,

    // this is user defined value for uncontrolled component
    value,
    onChange: _onChange,
  } = useRigoSelect();

  const handleChange = (value: any) => {
    console.log({ value });
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = value || rhfValue;

  const inputProps = {
    name,
    options,
  };

  return (
    <StatusDropdown
      onChange={handleChange}
      {...inputProps}
      {...rest}
      value={valueNormalized}
    />
  );
};

export const PxPriorityUncontrollerComponent = (
  props: PxUncontrollerComponentProps,
) => {
  const { onChangeRHF, value: rhfValue } = props;

  const pxContext = useRigoSelect();

  const {
    name,
    options,
    label,
    control,
    errors,
    required,
    rule,

    // this is user defined value for uncontrolled component
    value,
    onChange: _onChange,

    ...contextRest
  } = pxContext;

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = rhfValue ?? value;

  const inputProps = {
    name,
    value: valueNormalized,
    options,
    ...contextRest,
  };

  return <PriorityDropdown onChange={handleChange} {...inputProps} />;
};

export const PxReporterUncontrollerComponent = (
  props: PxUncontrollerComponentProps,
) => {
  const { onChangeRHF, value: rhfValue } = props;

  const pxContext = useRigoSelect();

  const {
    name,
    options,
    label,
    control,
    errors,
    required,
    rule,

    // this is user defined value for uncontrolled component
    value,
    onChange: _onChange,

    ...contextRest
  } = pxContext;

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = rhfValue ?? value;

  const inputProps = {
    name,
    value: valueNormalized,
    options,
    ...contextRest,
  };

  return <ReporterDropdown onChange={handleChange} {...inputProps} />;
};
