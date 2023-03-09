import { type ChangeEventHandler } from "react";
import { inputStyle } from "./style";

type DateInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

const DateInput = ({ value, onChange }: DateInputProps) => {
  return (
    <select
      id="dates"
      name="dates"
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

export default DateInput;

const materialTypes = [
  "",
  "Современные",
  "90-е",
  "80-е",
  "70-е",
  "60-е",
  "50-е",
  "40-е",
  "30-е",
  "20-е",
  "10-е",
  "19-й век",
  "18-й век",
];
