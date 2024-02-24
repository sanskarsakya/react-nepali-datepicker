import { GoogleMapProps } from './definition';
import { RigoGoogleMapContext } from './rigo-google-map-context';

export const RigoGoogleMap = (props: GoogleMapProps) => {
  const { children, ...rest } = props;
  return (
    <RigoGoogleMapContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </RigoGoogleMapContext.Provider>
  );
};

