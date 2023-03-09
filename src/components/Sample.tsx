import Image from "next/image";
import { type ToyItem, useToysStore } from "../modules/toys/store";
import { useCardStore } from "./toyCard/store";
import { api } from "../utils/api";
import CreateBtn from "./CreateBtn";

const Sample = () => {
  const setCurrentToy = useToysStore((state) => state.setCurrentToy);

  const { setIsOpen, setCardContent } = useCardStore();

  const { data, isLoading } = api.toy.getAll.useQuery();

  const itemClickHandler = (toyItem: ToyItem) => {
    setCurrentToy(toyItem);
    setCardContent("selected");
    setIsOpen(true);
  };

  return (
    <div className="flex flex-1 flex-col overflow-auto overflow-x-hidden bg-gray-2/80 p-5 pb-16 md:max-w-[65vw]">
      <div className="flex flex-wrap justify-center gap-5">
        {isLoading ? (
          <div className="flex h-56 w-36 flex-col items-center justify-center">
            <Image src="/loading.svg" width={60} height={60} alt="Загрузка" />
          </div>
        ) : (
          <CreateBtn />
        )}

        {data &&
          data.map((toyItem) => (
            <div
              key={toyItem.id}
              className="relative h-56 w-36 cursor-pointer bg-black hover:scale-[1.03]"
              onClick={() => itemClickHandler(toyItem)}
            >
              {toyItem.photos[0] && (
                <Image
                  className="object-cover"
                  src={toyItem.photos[0].url}
                  alt={toyItem.title}
                  fill
                />
              )}
            </div>
          ))}
      </div>
      <div />
    </div>
  );
};

export default Sample;
