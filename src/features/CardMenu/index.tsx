import type { MouseEventHandler, RefObject } from "react";
import { useCardStore } from "widgets/ToyCard/lib/store";
import { type ToyCardState } from "entities/Toy/types";
import { CheckBtn, CloseBtn, DeleteBtn, EditBtn } from "shared/ui/buttons";
import {
  useCreateToy,
  useDeleteToy,
  useUpdateToy,
} from "entities/Toy/lib/hooks/api";
import {
  useCurrentToyStore,
  useNewToyStore,
  useToysPhotosStore,
} from "entities/Toy/lib/store";
import { fileMapper } from "./lib/fileMapper";
import { uploadNewFiles } from "./api";
import { fileListToAddMapper } from "./lib/fileListToAddMapper";

type CardMenuProps = {
  hiddenFileInput: RefObject<HTMLInputElement>;
};

const CardMenu = ({ hiddenFileInput }: CardMenuProps) => {
  const { content, setCardContent, setIsOpen } = useCardStore();

  const { newToy, setNewToy } = useNewToyStore();
  const { currentToy, setCurrentToy } = useCurrentToyStore();

  const photosToDelete = useToysPhotosStore((state) => state.photosToDelete);
  const { setPhotosToAdd, setPhotosToDelete } = useToysPhotosStore();

  const createToy = useCreateToy();
  const deleteToy = useDeleteToy();
  const updateToy = useUpdateToy();

  const deleteHandler = () => {
    if (content !== "edit") return;
    if (!currentToy) return;

    deleteToy.mutate(currentToy.id);
    setNewToy(null);
    setCardContent("empty");
    setIsOpen(false);
  };

  const editHandler = () => {
    setNewToy(currentToy);
    setCardContent("edit");
  };

  const checkHandler = async () => {
    if (!newToy) return;

    const files = hiddenFileInput.current?.files;
    const photos = newToy.photos.filter((photo) => photo.id.includes("local"));
    const photosToUpdate = newToy.photos.filter(
      (photo) => !photo.id.includes("local")
    );
    let photosToAdd = photos;
    let fileListToAdd: FileList | null = null;

    if (files) fileListToAdd = fileListToAddMapper(files, photosToAdd);

    if (fileListToAdd && fileListToAdd.length) {
      const data = await uploadNewFiles(fileListToAdd);
      if (data) photosToAdd = fileMapper(data, newToy.title, photos);
    }

    if (content === "create") {
      if (photos) createToy.mutate({ ...newToy, photos: photosToAdd });
      else createToy.mutate({ ...newToy });
    }
    if (content === "edit") {
      updateToy.mutate({
        ...newToy,
        photosToAdd,
        photosToDelete,
        photosToUpdate,
      });
      setCurrentToy(null);
    }

    setPhotosToDelete(null);
    setNewToy(null);
    setCardContent("empty");
    setIsOpen(false);
  };

  const closeHandler = () => {
    setPhotosToAdd(null);
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
      checkHandler={() => void checkHandler()}
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
