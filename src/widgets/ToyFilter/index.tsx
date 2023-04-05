import ToyFilterForm from "entities/Toy/components/ToyFilterForm";
import { useFilterCardStore } from "./lib/store";
import FilterMenu from "features/FilterMenu";
import { useToysQueryStore } from "entities/Toy/lib/store";

const ToyFilter = () => {
  const { isOpen } = useFilterCardStore();

  const { query, setQuery } = useToysQueryStore();
  return (
    <div
      className={`absolute z-[10] flex h-[100svh] w-[100vw] flex-col bg-gray-2/80 transition-all duration-300 md:w-[calc(100vw-65vw-0.25rem)] ${
        isOpen ? "" : "translate-x-[-100vw] md:translate-x-[calc(-65vw-0.5rem)]"
      }`}
    >
      <FilterMenu />
      <div className="overflow-scroll overflow-x-hidden">
        <ToyFilterForm query={query} setQuery={setQuery} />
      </div>
    </div>
  );
};

export default ToyFilter;
