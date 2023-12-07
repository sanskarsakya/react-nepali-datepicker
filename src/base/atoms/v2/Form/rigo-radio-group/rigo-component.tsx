import { ComponentProps } from "./interface";
import { RigoRhfComponent } from "./rigo-rhf-component";
import { RigoUncontrollerComponent } from "./rigo-uncontrolled-component";
import { useRadioGroup } from "./use-radio-group";

export const RigoComponent = (props: ComponentProps) => {
  const { control } = useRadioGroup();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrollerComponent {...props} />;
};
