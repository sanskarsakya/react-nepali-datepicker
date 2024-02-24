// LIBS

// UTILITIES

// HELPERS

// COMPONENTS
import { RigoInputSelectContext } from './RigoInputSelectContext';
import { SelectProps } from './interface';

// 2.
/**
 * @returns
 */
export const RigoSelect = (props: SelectProps) => {
  const { children, ...rest } = props;
  return (
    <RigoInputSelectContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </RigoInputSelectContext.Provider>
  );
};
