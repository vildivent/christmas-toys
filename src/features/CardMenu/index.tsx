import { useCardStore } from "widgets/ToyCard/lib/store";
import { type ToyCardState } from "entities/Toy/types";
import { type MouseEventHandler } from "react";
import { CheckBtn, CloseBtn, DeleteBtn, EditBtn } from "shared/ui/buttons";
import {
  useCreateToy,
  useDeleteToy,
  useUpdateToy,
} from "entities/Toy/lib/hooks/api";
import { useToysStore } from "entities/Toy/lib/store";

const CardMenu = () => {
  const { newToy, currentToy, setCurrentToy, setNewToy } = useToysStore();
  const content = useCardStore((state) => state.content);
  const { setCardContent, setIsOpen } = useCardStore();

  const createToy = useCreateToy();
  const deleteToy = useDeleteToy();
  const updateToy = useUpdateToy();

  const deleteHandler = () => {
    if (content === "edit") {
      if (currentToy) {
        deleteToy.mutate(currentToy?.id);
        setNewToy(null);
        setCardContent("empty");
        setIsOpen(false);
      }
    }
  };

  const editHandler = () => {
    setNewToy(currentToy);
    setCardContent("edit");
  };

  const checkHandler = () => {
    if (newToy) {
      if (content === "create") {
        createToy.mutate(newToy);
        setCurrentToy(newToy);
        setIsOpen(false);
      }
      if (content === "edit") {
        updateToy.mutate(newToy);
        setCurrentToy(newToy);
      }
    }
    setCardContent("selected");
  };

  const closeHandler = () => {
    if (content === "create" || content === "selected") {
      setCardContent("empty");
      setIsOpen(false);
    }
    if (content === "edit") setCardContent("selected");
  };

  return (
    <CardMenuAnimations
      content={content}
      deleteHandler={deleteHandler}
      editHandler={editHandler}
      checkHandler={checkHandler}
      closeHandler={closeHandler}
    />
  );
};

export default CardMenu;

type CardMenuAnimationsProps = {
  content: ToyCardState;
  deleteHandler: MouseEventHandler<HTMLButtonElement>;
  editHandler: MouseEventHandler<HTMLButtonElement>;
  checkHandler: MouseEventHandler<HTMLButtonElement>;
  closeHandler: MouseEventHandler<HTMLButtonElement>;
};

function CardMenuAnimations({
  content,
  deleteHandler,
  editHandler,
  checkHandler,
  closeHandler,
}: CardMenuAnimationsProps) {
  return (
    <div className="m-5 flex justify-end pr-2 text-2xl">
      {/* Delete */}
      <div
        className={`transition-transform duration-300 ${
          content !== "edit"
            ? " pointer-events-none translate-x-[44px] opacity-0"
            : "ml-5"
        }`}
      >
        <DeleteBtn onClick={deleteHandler} disabled={content !== "edit"} />
      </div>

      {/*Edit */}
      <div
        className={`transition-transform duration-150 ${
          content !== "selected"
            ? "pointer-events-none w-0 translate-x-[-24px] opacity-0"
            : "ml-5"
        }`}
      >
        <EditBtn onClick={editHandler} disabled={content !== "selected"} />
      </div>

      {/*Check */}
      <div
        className={`transition-transform duration-150 ${
          content !== "edit" && content !== "create"
            ? "pointer-events-none w-0 translate-x-[24px] opacity-0"
            : "ml-5"
        }`}
      >
        <CheckBtn
          onClick={checkHandler}
          disabled={content !== "edit" && content !== "create"}
        />
      </div>

      {/*Close */}
      <div
        className={`transition ${
          content === "empty" ? "pointer-events-none opacity-0" : "ml-5"
        }`}
      >
        <CloseBtn onClick={closeHandler} disabled={content === "empty"} />
      </div>
    </div>
  );
}
