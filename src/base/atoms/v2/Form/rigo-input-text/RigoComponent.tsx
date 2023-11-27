import { ComponentProps } from "./interface";
import { useInput } from "./useInput";
import { RigoRhfComponent } from "./RigoRhfComponent";
import { RigoUncontrolledComponent } from "./RigoUncontrolledComponent";

export const RigoComponent = (props: ComponentProps) => {
  const { control } = useInput();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrolledComponent {...props} />;
};
