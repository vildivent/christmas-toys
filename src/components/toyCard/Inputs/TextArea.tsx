import { type ChangeEventHandler } from "react";
import { textInputStyle } from "./style";

type TextAreaProps = {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea = ({ id, value, onChange }: TextAreaProps) => {
  return (
    <textarea
      className={textInputStyle}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
