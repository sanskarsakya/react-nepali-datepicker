import { ComponentProps } from './interface';
import { useTextArea } from './use-textarea';
import { RigoRhfComponent } from './rigo-rhf-component';
import { RigoUncontrolledComponent } from './rigo-uncontrolled-component';

export const RigoComponent = (props: ComponentProps) => {
  const { control } = useTextArea();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrolledComponent {...props} />;
};
