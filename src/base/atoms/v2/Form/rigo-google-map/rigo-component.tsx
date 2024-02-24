import { ComponentProps } from './definition';
import { useGoogleMap } from './use-google-map';
import { RigoRhfComponent } from './rigo-rhf-component';
import { RigoUncontrolledComponent } from './rigo-uncontrolled-component';

export const RigoComponent = (props: ComponentProps) => {
  const { control } = useGoogleMap();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrolledComponent {...props} />;
};
