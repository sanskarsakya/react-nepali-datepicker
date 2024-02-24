import React, { useState } from 'react';

import CreatableSelect from 'react-select/creatable';
import { useDispatch } from 'react-redux';
import * as fromDataStore from '@rigotech/hrms-data';
import { useRigoSelect } from '../../RigoInputSelectContext';

interface Option {
  readonly label: string;
  readonly value: string;
}
interface createableProps {
  options: any;
  name: string;
  value: any;
}

export const CreateableSelect = (props: createableProps) => {
  const { optionsList, value } = props?.options;
  const { onCreateOption, ...contextRest } = useRigoSelect();
  return (
    <CreatableSelect
      isClearable
      onCreateOption={() => onCreateOption(optionsList)}
      options={optionsList}
      value={value}
      {...contextRest}
    />
  );
};
