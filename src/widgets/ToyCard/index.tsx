import ToyDetailedCard from "entities/Toy/components/ToyDetailedCard";
import ToyEditForm, { type ToyTmp } from "entities/Toy/components/ToyEditForm";
import { useToysStore } from "entities/Toy/lib/store";
import CardMenu from "features/CardMenu";
import { useCardStore } from "widgets/ToyCard/lib/store";

const ToyCard = () => {
  const content = useCardStore((state) => state.content);
  const isOpen = useCardStore((state) => state.isOpen);
  const currentToy = useToysStore((state) => state.currentToy);
  const { newToy, setNewToy } = useToysStore();

  return (
    <div
      className={`flex w-full flex-col bg-gray-2/80 transition-all duration-300 md:w-[calc(100vw-65vw-0.5rem)] ${
        isOpen ? "h-[calc(100svh-4rem)]" : "h-0 md:h-[calc(100svh-4rem)]"
      }`}
    >
      <CardMenu />
      <div className="overflow-scroll overflow-x-hidden">
        {content === "empty" && <></>}
        {content === "selected" && currentToy && (
          <ToyDetailedCard toy={currentToy} />
        )}
        {(content === "edit" || content === "create") && (
          <ToyEditForm
            toyTmp={newToy as ToyTmp}
            setToyTmp={setNewToy as (newToy: ToyTmp) => void}
          />
        )}
      </div>
    </div>
  );
};

export default ToyCard;
