import { ChangeEvent, useState } from 'react';

export function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue('');
    setError(false);
  };

  return {
    value,
    error,
    onChange: handleChange,
    onReset: handleReset,
    setError,
    isEmpty: !value.trim(),
  };
}
