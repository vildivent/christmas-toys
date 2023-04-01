export type DescriptionRowProps = {
  title: string;
  value: string | number | Date | null | undefined;
  color?: string;
};

const DescriptionRow = ({
  title,
  value,
  color = "text-blue-500",
}: DescriptionRowProps) => {
  return (
    <>
      {value && (
        <>
          <div className={`text-end ${color}`}>{`${title} :`}</div>
          <div className="font-light">{value.toString()}</div>
        </>
      )}
    </>
  );
};

export default DescriptionRow;
