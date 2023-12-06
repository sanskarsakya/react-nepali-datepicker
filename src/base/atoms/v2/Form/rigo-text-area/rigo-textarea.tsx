import { InputNumberProps } from './interface';
import { RigoTextAreaContext } from './rigo-textarea-context';

export const RigoTextarea = (props: InputNumberProps) => {
  const { children, ...rest } = props;
  return (
    <RigoTextAreaContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </RigoTextAreaContext.Provider>
  );
};

