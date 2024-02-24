import React from 'react';

// INTERFACE
import {ContextProps} from "./interface"

/**
 * 1. Define Context with default values
 * 2. Define Parent Component
 * 3. Define usable hook
 * 4. Define required child component
 * 5. Compose into default
 * 6. export all
 *
 */
// 1.

export const RigoInputSelectContext = React.createContext<ContextProps>({
  label: 'Sample label',
  name: '',
  returnScalarValue: false,
  options: [],
  control: undefined,
  errors: undefined,
  required: false,
  rule: undefined,
  value: null,
  onChange: undefined,
});
RigoInputSelectContext.displayName = 'RigoInputSelectContext';
