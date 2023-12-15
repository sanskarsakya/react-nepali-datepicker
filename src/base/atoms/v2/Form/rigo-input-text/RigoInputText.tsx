import { RigoDefault } from "./RigoDefault";
import { InputTextProps } from "./interface";
import { RigoComponent } from "./RigoComponent";
import { RigoFormControl } from "./RigoFormControl";
import { RigoFormErrorLabel } from "./RigoFormErrorLabel";
import { RigoFormHelperText } from "./RigoFormHelperText";
import { RigoFormLabel } from "./RigoFormLabel";
import { RigoInputTextContext } from "./RigoInputTextContext";

export const RigoInputText = (props: InputTextProps) => {
  const { children, ...rest } = props;
  return (
    <RigoInputTextContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </RigoInputTextContext.Provider>
  );
};

