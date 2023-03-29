import { useToysQuery } from "entities/Toy/lib/store";
import { ClearFilterBtn, CloseBtn } from "shared/ui/buttons";
import { useFilterCardStore } from "widgets/ToyFilter/lib/store";

const FilterMenu = () => {
  const { setIsOpen } = useFilterCardStore();

  const { setQuery } = useToysQuery();

  const resetHandler = () => setQuery(null);
  const closeHandler = () => setIsOpen(false);

  return (
    <div className="m-5 flex justify-end gap-5 pr-2 text-2xl">
      <ClearFilterBtn onClick={resetHandler} />
      <CloseBtn onClick={closeHandler} />
    </div>
  );
};

export default FilterMenu;
