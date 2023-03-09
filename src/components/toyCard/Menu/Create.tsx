import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useToysStore } from "../../../modules/toys/store";
import { useCardStore } from "../store";
import { api } from "../../../utils/api";

const Create = () => {
  const newToy = useToysStore((state) => state.newToy);
  const setCurrentToy = useToysStore((state) => state.setCurrentToy);

  const setIsOpen = useCardStore((state) => state.setIsOpen);
  const setCardContent = useCardStore((state) => state.setCardContent);

  const { refetch } = api.toy.getAll.useQuery();

  const create = api.toy.create.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });

  const saveHandler = () => {
    if (newToy) {
      create.mutate(newToy);
      setCurrentToy(newToy);
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

export default Create;
