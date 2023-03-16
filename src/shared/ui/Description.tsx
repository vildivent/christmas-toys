import DescriptionRow from "./DescriptionRow";
import { type DescriptionRowProps } from "./DescriptionRow";

type DescriptionProps = {
  description: DescriptionRowProps[];
  color?: string;
};

const Description = ({ description, color }: DescriptionProps) => {
  return (
    <div className="grid grid-cols-description gap-x-2 self-start">
      {description.map((row) => (
        <DescriptionRow
          key={row.title}
          title={row.title}
          value={row.value}
          color={color}
        />
      ))}
    </div>
  );
};

export default Description;
