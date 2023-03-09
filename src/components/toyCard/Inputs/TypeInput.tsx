import { type ChangeEventHandler } from "react";
import { inputStyle } from "./style";

type TypeInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

const TypeInput = ({ value, onChange }: TypeInputProps) => {
  return (
    <select
      id="materialTypes"
      name="materialTypes"
      className={inputStyle}
      value={value}
      onChange={onChange}
    >
      {materialTypes.map((type) => (
        <option value={type} key={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default TypeInput;

const materialTypes = [
  "Стекло",
  "Пластик",
  "Металл",
  "Дерево",
  "Ткань",
  "Войлок",
  "Вата",
  "Картон",
  "Фарфор",
];
