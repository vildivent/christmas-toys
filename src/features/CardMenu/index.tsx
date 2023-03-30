import { type MouseEventHandler, type RefObject, useState } from "react";
import { useCardStore } from "widgets/ToyCard/lib/store";
import { type ToyCardState } from "entities/Toy/types";
import {
  CheckBtn,
  CloseBtn,
  DeleteBtn,
  EditBtn,
  RedBtn,
  WhiteBtn,
} from "shared/ui/buttons";
import {
  useCurrentToyStore,
  useNewToyStore,
  useDeletePhotosStore,
  useToysQueryStore,
} from "entities/Toy/lib/store";
import { fileMapper } from "./lib/fileMapper";
import { uploadNewFiles } from "./api";
import { fileListToAddMapper } from "./lib/fileListToAddMapper";
import Modal from "shared/ui/Modal";
import { api } from "shared/api/trpc";

type CardMenuProps = {
  hiddenFileInput: RefObject<HTMLInputElement>;
};

const CardMenu = ({ hiddenFileInput }: CardMenuProps) => {
  const { content, setCardContent, setIsOpen } = useCardStore();

  const { newToy, setNewToy } = useNewToyStore();
  const { currentToy, setCurrentToy } = useCurrentToyStore();

  const photosToDelete = useDeletePhotosStore((state) => state.photosToDelete);
  const { setPhotosToDelete } = useDeletePhotosStore();

  const { query } = useToysQueryStore();

  const ctx = api.useContext();

  const createToy = api.toy.create.useMutation({
    onSuccess() {
      void ctx.toy.get.invalidate(query);
    },
  });
  const deleteToy = api.toy.delete.useMutation({
    onSuccess() {
      void ctx.toy.get.invalidate(query);
    },
  });
  const updateToy = api.toy.update.useMutation({
    onSuccess() {
      void ctx.toy.get.invalidate(query);
    },
  });

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
  const [isOpen, setIsOpen] = useState(false);
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
        <DeleteBtn
          onClick={() => setIsOpen(true)}
          disabled={content !== "edit"}
        />
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} padding={true}>
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-center font-h text-lg">
            Вы действительно хотите удалить ВСЮ игрушку целиком, включая все
            фотографии?
          </h2>
          <div className="flex justify-center gap-10">
            <RedBtn
              onClick={(e) => {
                deleteHandler(e);
                setIsOpen(false);
              }}
            >
              Удалить
            </RedBtn>
            <WhiteBtn onClick={() => setIsOpen(false)}>Нет</WhiteBtn>
          </div>
        </div>
      </Modal>

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
