import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
} from "react-icons/ai";
import { useCardStore } from "../store";
import { useToysStore } from "../../../modules/toys/store";
import { api } from "../../../utils/api";

const Edit = () => {
  const { newToy, currentToy, setCurrentToy, setNewToy } = useToysStore();

  const { setIsOpen, setCardContent } = useCardStore();

  const { refetch } = api.toy.getAll.useQuery();
  const update = api.toy.update.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });
  const deleteToy = api.toy.delete.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });

  const deleteHandler = () => {
    if (currentToy) {
      deleteToy.mutate(currentToy?.id);
      setNewToy(null);
      setCardContent("empty");
      setIsOpen(false);
    }
  };

  const saveHandler = () => {
    if (newToy) {
      console.log(newToy);
      update.mutate(newToy);
      setCurrentToy(newToy);
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

export default Edit;
