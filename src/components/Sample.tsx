import Image from "next/image";
import { useToysStore } from "../modules/toys/store";
import { descriptionData } from "./toyCard/data";
import { useCardStore } from "./toyCard/store";

const Sample = () => {
  const toys = useToysStore((state) => state.toys);
  const setCurrentToy = useToysStore((state) => state.setCurrentToy);

  const setIsOpen = useCardStore((state) => state.setIsOpen);
  const setCardContent = useCardStore((state) => state.setCardContent);

  const itemClickHandler = (id: string) => {
    setCurrentToy(id);

    setCardContent("selected");
    setIsOpen(true);
  };

  return (
    <div className="flex flex-1 flex-col overflow-auto overflow-x-hidden bg-gray-2/80 p-5 md:max-w-[65vw]">
      <div className="flex flex-wrap justify-center gap-5">
        <AddNewBtn />
        {toys.map((toyItem) => (
          <div
            key={toyItem.id}
            className="relative h-56 w-36 cursor-pointer hover:scale-[1.03]"
            onClick={() => itemClickHandler(toyItem.id)}
          >
            {toyItem.images[0] && (
              <Image
                className="object-cover"
                src={toyItem.images[0].url}
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

const AddNewBtn = () => {
  const toys = useToysStore((state) => state.toys);
  const setNewToy = useToysStore((state) => state.setNewToy);

  const setCardContent = useCardStore((state) => state.setCardContent);
  const setIsOpen = useCardStore((state) => state.setIsOpen);

  const clickHandler = () => {
    setNewToy({
      id: `${+(toys[toys.length - 1]?.id || 0) + 1}`,
      title: "Ананас",
      images: [
        {
          id: "1",
          title: "Ананас1",
          url: "/pineapple.png",
          ar: 0.87,
        },
      ],
      description: descriptionData,
    });
    setCardContent("add");
    setIsOpen(true);
  };

  return (
    <button
      className="flex h-56 w-36 flex-col items-center justify-center gap-5 hover:scale-[1.03]"
      onClick={clickHandler}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-lg border">
        <Plus />
      </div>
      <span className="font-h text-xl">Добавить</span>
    </button>
  );
};
