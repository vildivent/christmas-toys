import { type ChangeEventHandler } from "react";
import { titleInputStyle } from "./style";

type TitleInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TitleInput = ({ value, onChange }: TitleInputProps) => {
  return (
    <input
      className={titleInputStyle}
      id="title"
      type="text"
      name="title"
      value={value}
      onChange={onChange}
    />
  );
};

export default TitleInput;
