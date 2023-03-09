import { useToysStore } from "../modules/toys/store";
import Plus from "./Plus";
import { exampleToy } from "./toyCard/data";
import { useCardStore } from "./toyCard/store";

const CreateBtn = () => {
  const { setNewToy } = useToysStore();
  const { setCardContent, setIsOpen } = useCardStore();

  const clickHandler = () => {
    setNewToy(exampleToy);

    setCardContent("create");
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

export default CreateBtn;
