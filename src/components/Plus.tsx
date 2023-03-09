const Plus = () => {
  return (
    <div
      className="h-9 w-9 bg-white"
      style={{
        clipPath: `
         polygon(0% calc(50% - 1px), 
         calc(50% - 1px) calc(50% - 1px), 
         calc(50% - 1px) 0, 
         calc(50% + 1px) 0, 
         calc(50% + 1px) calc(50% - 1px), 
         100% calc(50% - 1px), 
         100% calc(50% + 1px), 
         calc(50% + 1px) calc(50% + 1px), 
         calc(50% + 1px) 100%, 
         calc(50% - 1px) 100%, 
         calc(50% - 1px) calc(50% + 1px), 
         0 calc(50% + 1px) 
         `,
      }}
    />
  );
};

export default Plus;
