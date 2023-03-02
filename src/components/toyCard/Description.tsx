import { type descriptionData } from "./data";

type DescriptionProps = {
  descriptionData: descriptionData;
};

const Description = ({ descriptionData }: DescriptionProps) => {
  return (
    <div className="grid grid-cols-description gap-x-2 self-start">
      {descriptionData.map((item) => (
        <DescriptionField key={item.name} name={item.name} value={item.value} />
      ))}
    </div>
  );
};

type DescriptionFieldProps = {
  name: string;
  value: string | number;
};

const DescriptionField = ({ name, value }: DescriptionFieldProps) => {
  return (
    <>
      <div className="text-sky-500">{`${name} :`}</div>
      <div>{value}</div>
    </>
  );
};

export default Description;
