import React from 'react';
import { RigoGoogleMapContext } from './rigo-google-map-context';

export const useGoogleMap = () => {
  const context = React.useContext(RigoGoogleMapContext);
  if (context === undefined) {
    throw new Error('useGoogleMap must be used within a <RigoGoogleMapContext />');
  }
  return context;
};
