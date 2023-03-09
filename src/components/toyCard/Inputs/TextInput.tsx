import { type ChangeEventHandler } from "react";
import { inputStyle } from "./style";

type TextInputProps = {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({ id, value, onChange }: TextInputProps) => {
  return (
    <input
      className={inputStyle}
      id={id}
      type="text"
      name={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
