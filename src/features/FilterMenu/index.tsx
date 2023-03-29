import { CheckBtn, ClearFilterBtn, CloseBtn } from "shared/ui/buttons";
import { useFilterCardStore } from "widgets/ToyFilter/lib/store";

const FilterMenu = () => {
  const { setIsOpen } = useFilterCardStore();

  const checkHandler = () => {
    setIsOpen(false);
  };
  const resetHandler = () => null;
  const closeHandler = () => setIsOpen(false);

  return (
    <div className="m-5 flex justify-end gap-5 pr-2 text-2xl">
      <ClearFilterBtn onClick={resetHandler} />
      <CheckBtn onClick={checkHandler} />
      <CloseBtn onClick={closeHandler} />
    </div>
  );
};

export default FilterMenu;
