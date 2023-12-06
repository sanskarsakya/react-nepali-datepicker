import { ComponentProps } from './interface';
import { RigoRhfComponent } from './rigo-rhf-component';
import { RigoUncontrolledComponent } from './rigo-uncontrolled-component';
import { useCheckbox } from './use-checkbox';

export const RigoComponent = (props: ComponentProps) => {
  const { control } = useCheckbox();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrolledComponent {...props} />;
};
