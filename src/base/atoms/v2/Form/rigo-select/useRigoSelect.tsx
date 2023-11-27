import React from 'react';
import { RigoInputSelectContext } from './RigoInputSelectContext';

export const useRigoSelect = () => {
  const context = React.useContext(RigoInputSelectContext);
  if (context === undefined) {
    throw new Error('useRigoSelect must be used within a <RigoSelect />');
  }
  return context;
};
