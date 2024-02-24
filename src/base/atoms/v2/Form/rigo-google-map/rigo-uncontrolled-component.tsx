import { GoogleMap } from './components';
import { useGoogleMap } from './use-google-map';

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
  } = useGoogleMap();

  const convertToExportValue = (value: { lat: number, lng: number }) => {
    return `${value.lat}, ${value.lng }`
  }

  const handleChange = (value: { lat: number, lng: number }) => {
    const convertedValue = convertToExportValue(value)
    _onChange?.(name, convertedValue);
    onChangeRHF?.(convertedValue);
  };

  const convertToimportValue = (value: any) => {
    return value
  }

  let valueNormalized = control ? rhfValue : value;

  valueNormalized = convertToimportValue(valueNormalized)

  return (
    <GoogleMap
      value={valueNormalized}
      onChange={handleChange} />
  );
};
