// LIBS

// UTILITIES

// HELPERS

// COMPONENTS
import { RigoInputSelectContext } from './RigoInputSelectContext';

type PxSelectProps = any;
// 2.
/**
 * @returns
 */
export const RigoSelect = (props: PxSelectProps) => {
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
