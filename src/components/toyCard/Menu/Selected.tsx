import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { useCardStore } from "../store";

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
export default Selected;
