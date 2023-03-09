import { type ChangeEventHandler } from "react";
import { inputStyle } from "./style";

type NumberInputProps = {
  id: string;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const NumberInput = ({ id, value, onChange }: NumberInputProps) => {
  return (
    <input
      className={inputStyle}
      id={id}
      type="number"
      name={id}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

export default NumberInput;
