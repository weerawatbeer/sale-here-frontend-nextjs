import { ChangeEvent, KeyboardEvent } from "react";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
  placeholder = "",
  value,
  onChange,
  onKeyDown,
  ...rest
}: InputProps) {
  return (
    <>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...rest}
      />
    </>
  );
}
