import { InputNumberProps } from './interface';
import { RigoCheckboxContext } from './rigo-checkbox-context';

export const RigoCheckbox = (props: InputNumberProps) => {
  const { children, ...rest } = props;
  return (
    <RigoCheckboxContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </RigoCheckboxContext.Provider>
  );
};
