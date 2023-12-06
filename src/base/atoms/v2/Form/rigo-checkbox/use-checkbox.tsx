import React from 'react';
import { RigoCheckboxContext } from './rigo-checkbox-context';

export const useCheckbox = () => {
  const context = React.useContext(RigoCheckboxContext);
  if (context === undefined) {
    throw new Error('useInputNumber must be used within a <RigoCheckbox />');
  }
  return context;
};
