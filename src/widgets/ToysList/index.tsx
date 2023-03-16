import Image from "next/image";
import { useToysStore } from "entities/Toy/lib/store";
import { useCardStore } from "widgets/ToyCard/lib/store";

import ToyMainCard from "entities/Toy/components/ToyMainCard";
import type { ToyItem } from "shared/types";
import { AddBtn } from "shared/ui/buttons";
import { exampleToy } from "entities/Toy/constants";
import { useGetAllToys } from "entities/Toy/lib/hooks/api";

const ToysList = () => {
  const setCurrentToy = useToysStore((state) => state.setCurrentToy);

  const { setIsOpen, setCardContent } = useCardStore();

  const { data, isLoading } = useGetAllToys();

  const { setNewToy } = useToysStore();

  const btnClickHandler = () => {
    setNewToy(exampleToy);

    setCardContent("create");
    setIsOpen(true);
  };

  const itemClickHandler = (toyItem: ToyItem) => {
    setCurrentToy(toyItem);
    setCardContent("selected");
    setIsOpen(true);
  };

  return (
    <div className="flex h-[calc(100svh-4rem)] flex-col bg-gray-2/80 md:w-[65vw]">
      <div className="flex w-full flex-wrap justify-center gap-5 overflow-auto p-5">
        <div className="flex h-56 w-36 flex-col items-center justify-center">
          {isLoading ? (
            <Image src="/loading.svg" width={50} height={50} alt="Загрузка" />
          ) : (
            <AddBtn onClick={btnClickHandler} />
          )}
        </div>

        {data &&
          data.map((toyItem) => (
            <ToyMainCard
              key={toyItem.id}
              toyItem={toyItem}
              onClick={() => itemClickHandler(toyItem)}
            />
          ))}
      </div>
      <div />
    </div>
  );
};

export default ToysList;
