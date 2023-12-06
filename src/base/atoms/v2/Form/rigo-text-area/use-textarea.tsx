import React from 'react';
import { RigoTextAreaContext } from './rigo-textarea-context';

export const useTextArea = () => {
  const context = React.useContext(RigoTextAreaContext);
  if (context === undefined) {
    throw new Error('useTextArea must be used within a <RigoTextAreaContext />');
  }
  return context;
};
