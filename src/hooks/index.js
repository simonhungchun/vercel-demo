import { useState } from 'react';

export const useDataBinding = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

export default {};
