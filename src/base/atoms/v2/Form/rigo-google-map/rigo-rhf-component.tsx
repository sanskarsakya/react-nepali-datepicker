import { Controller } from 'react-hook-form';

import { ControlledComponentProps } from './definition';
import { RigoUncontrolledComponent } from './rigo-uncontrolled-component';
import { useGoogleMap } from './use-google-map';

export const RigoRhfComponent = (props: ControlledComponentProps) => {
  const { control, name, required } = useGoogleMap();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        validate: (data?: { lat: string, lng: string }) => {
          console.log(data);

          if (required && !data?.lat && !data?.lng) {
            return "Please select a location"
          }
          
          return true

        }
      }}
      render={({ field: { onChange, value } }) => (
        <RigoUncontrolledComponent
          value={value}
          onChangeRHF={onChange}
          {...props}
        />
      )}
    />
  );
};
