import { type ChangeEventHandler } from "react";

const commonInputStyle =
  "rounded-md border border-gray-500 bg-gray-2 text-white outline-none focus:border-green-600";

const inputStyle = `${commonInputStyle} px-2 font-text`;
const textInputStyle = `${inputStyle} h-40 resize-none`;
const titleInputStyle = `${commonInputStyle} px-5 text-center font-h text-3xl mb-3 w-full`;

export const SelectInput = ({
  id,
  value,
  onChange,
  options,
  className = inputStyle,
}: SelectInputProps) => {
  return (
    <select
      id={id}
      name={id}
      className={className}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const NumberInput = ({
  id,
  value,
  onChange,
  mask = (value) => value,
  className = inputStyle,
}: NumberInputProps) => {
  return (
    <input
      id={id}
      name={id}
      className={className}
      type="number"
      value={value}
      onChange={(e) => {
        e.target.value = mask(e.target.value);
        onChange(e);
      }}
      autoComplete="off"
    />
  );
};

export const TextInput = ({
  id,
  value,
  onChange,
  mask = (value) => value,
  className = inputStyle,
}: TextInputProps) => {
  return (
    <input
      id={id}
      name={id}
      className={className}
      type="text"
      value={value}
      onChange={(e) => {
        e.target.value = mask(e.target.value);
        onChange(e);
      }}
      autoComplete="off"
    />
  );
};

export const TextAreaInput = ({
  id,
  value,
  onChange,
  mask = (value) => value,
}: TextAreaProps) => {
  return (
    <textarea
      className={textInputStyle}
      id={id}
      name={id}
      value={value}
      onChange={(e) => {
        e.target.value = mask(e.target.value);
        onChange(e);
      }}
      autoComplete="off"
    />
  );
};

export const TitleInput = ({
  value,
  onChange,
  mask,
  className = titleInputStyle,
}: InputProps<string, HTMLInputElement> & Mask) => {
  return (
    <TextInput
      id="title"
      value={value}
      onChange={onChange}
      mask={mask}
      className={className}
    />
  );
};

type InputProps<ValueType, Element> = {
  value: ValueType;
  onChange: ChangeEventHandler<Element>;
  className?: string;
};
type Mask = { mask?: (value: string) => string };
type ID = { id: string };
type SelectOptions = { options: string[] | number[] };

type SelectInputProps = InputProps<string | number, HTMLSelectElement> &
  ID &
  SelectOptions;
type NumberInputProps = InputProps<number, HTMLInputElement> & ID & Mask;
type TextInputProps = InputProps<string, HTMLInputElement> & ID & Mask;
type TextAreaProps = InputProps<string, HTMLTextAreaElement> & ID & Mask;
