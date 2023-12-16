import { RigoInputTextContext } from "./RigoInputTextContext";
import { InputTextProps } from "./interface";

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

