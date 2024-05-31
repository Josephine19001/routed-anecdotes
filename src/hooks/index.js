import { useState } from 'react';

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return { type, value, onChange, reset };
};

export const useResetFields = (...fields) => {
  const reset = () => {
    fields.forEach((field) => {
      field.reset();
    });
  };

  return reset;
};
