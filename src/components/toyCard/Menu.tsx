import {
  AiOutlineEdit,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
} from "react-icons/ai";

import { useToysStore } from "../../modules/toys/store";
import { useCardStore } from "./store";

type MenuProps = {
  isModal: boolean;
};

const Menu = ({ isModal }: MenuProps) => {
  const content = useCardStore((state) => state.content);

  return (
    <div className="m-5 flex justify-end text-2xl">
      {content === "empty" && <></>}
      {content === "edit" && <Edit />}
      {content === "selected" && <Selected isModal={isModal} />}
      {content === "add" && <Add />}
    </div>
  );
};

export default Menu;

const Edit = () => {
  const currentToy = useToysStore((state) => state.currentToy);
  const deleteToy = useToysStore((state) => state.deleteToy);
  const editToy = useToysStore((state) => state.editToy);
  const newToy = useToysStore((state) => state.newToy);
  const setCurrentToy = useToysStore((state) => state.setCurrentToy);

  const setIsOpen = useCardStore((state) => state.setIsOpen);
  const setCardContent = useCardStore((state) => state.setCardContent);

  const deleteHandler = () => {
    if (currentToy) deleteToy(currentToy.id);
    setCardContent("empty");
    setIsOpen(false);
  };

  const saveHandler = () => {
    if (newToy) {
      editToy(newToy);
      setCurrentToy(newToy.id);
    }

    setCardContent("selected");
  };

  const cancelHandler = () => {
    setCardContent("selected");
  };

  return (
    <div className="flex gap-5">
      <button onClick={deleteHandler}>
        <AiOutlineDelete />
      </button>
      <button onClick={saveHandler}>
        <AiOutlineCheck />
      </button>
      <button onClick={cancelHandler}>
        <AiOutlineClose />
      </button>
    </div>
  );
};

type SelectedProps = {
  isModal: boolean;
};

const Selected = ({ isModal }: SelectedProps) => {
  const setIsOpen = useCardStore((state) => state.setIsOpen);
  const setCardContent = useCardStore((state) => state.setCardContent);

  const editHandler = () => {
    setCardContent("edit");
  };

  const closeHandler = () => {
    if (!isModal) setCardContent("empty");
    setIsOpen(false);
  };
  return (
    <div className="flex gap-5">
      <button onClick={editHandler}>
        <AiOutlineEdit />
      </button>
      <button onClick={closeHandler}>
        <AiOutlineClose />
      </button>
    </div>
  );
};

const Add = () => {
  const newToy = useToysStore((state) => state.newToy);
  const addToy = useToysStore((state) => state.addToy);
  const setCurrentToy = useToysStore((state) => state.setCurrentToy);

  const setIsOpen = useCardStore((state) => state.setIsOpen);
  const setCardContent = useCardStore((state) => state.setCardContent);

  const saveHandler = () => {
    if (newToy) {
      addToy(newToy);
      setCurrentToy(newToy.id);
    }
    setCardContent("selected");
    setIsOpen(false);
  };

  const cancelHandler = () => {
    setCardContent("selected");
    setIsOpen(false);
  };

  return (
    <div className="flex gap-5">
      <button onClick={saveHandler}>
        <AiOutlineCheck />
      </button>
      <button onClick={cancelHandler}>
        <AiOutlineClose />
      </button>
    </div>
  );
};
