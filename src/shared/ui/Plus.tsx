type PlusProps = {
  size: number | string;
  thickness?: number;
  hovered?: boolean;
};

const Plus = ({ size, thickness = 2, hovered }: PlusProps) => {
  return (
    <div
      className={`bg-white transition`}
      style={{
        width: size,
        height: size,
        backgroundColor: `${hovered ? "rgb(37 99 235)" : "white"}`,
        clipPath: `
         polygon(0% calc(50% - ${thickness / 2}px), 
         calc(50% - ${thickness / 2}px) calc(50% - ${thickness / 2}px), 
         calc(50% - ${thickness / 2}px) 0, 
         calc(50% + ${thickness / 2}px) 0, 
         calc(50% + ${thickness / 2}px) calc(50% - ${thickness / 2}px), 
         100% calc(50% - ${thickness / 2}px), 
         100% calc(50% + ${thickness / 2}px), 
         calc(50% + ${thickness / 2}px) calc(50% + ${thickness / 2}px), 
         calc(50% + ${thickness / 2}px) 100%, 
         calc(50% - ${thickness / 2}px) 100%, 
         calc(50% - ${thickness / 2}px) calc(50% + ${thickness / 2}px), 
         0 calc(50% + ${thickness / 2}px) 
         `,
      }}
    />
  );
};

export default Plus;
