import { useRef } from "react";
import { type Image } from "@prisma/client";
import ToyDetailedCard from "entities/Toy/components/ToyDetailedCard";
import ToyEditForm, { type ToyTmp } from "entities/Toy/components/ToyEditForm";
import {
  useCurrentToyStore,
  useNewToyStore,
  useDeletePhotosStore,
} from "entities/Toy/lib/store";
import CardMenu from "features/CardMenu";
import { useCardStore } from "widgets/ToyCard/lib/store";

const ToyCard = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const content = useCardStore((state) => state.content);
  const isOpen = useCardStore((state) => state.isOpen);

  const { newToy, setNewToy } = useNewToyStore();
  const { currentToy } = useCurrentToyStore();

  const { photosToDelete, setPhotosToDelete } = useDeletePhotosStore();

  const deleteImgHandler = (id: string) => {
    if (!newToy?.photos) return;
    if (!id.includes("local"))
      setPhotosToDelete(photosToDelete ? [...photosToDelete, id] : [id]);

    const filteredPhotos = newToy.photos.filter((photo) => photo.id !== id);
    if (!filteredPhotos.find((photo) => photo.isMain) && filteredPhotos[0]) {
      filteredPhotos[0].isMain = true;
    }

    setNewToy({
      ...newToy,
      photos: filteredPhotos,
    });
  };

  const setMainImgHandler = (id: string) => {
    const currentPhoto = newToy?.photos.find((photo) => photo.id === id);
    if (!currentPhoto || !newToy || !newToy?.photos) return;

    currentPhoto.isMain = true;
    const photos = newToy.photos.map((photo) => ({
      ...photo,
      isMain: photo.id === id ? photo.isMain : false,
    }));

    setNewToy({ ...newToy, photos });
  };

  const fileInputChangeHandler = (files: FileList | null) => {
    if (!files || !newToy) return;

    const filteredLocals = newToy.photos.filter(
      (photo) => !photo.id.includes("local")
    );

    const filesArray: Image[] = [];
    for (let i = 0; i < files.length; i++) {
      const current = files[i];
      filesArray.push({
        id: `local_${i}`,
        title: current?.name || `local_${i}`,
        url: current ? URL.createObjectURL(current) : "",
        aspect_ratio: 0,
        isMain: !filteredLocals.length && i === 0 ? true : false,
        toyId: null,
      });
    }

    setNewToy({
      ...newToy,
      photos: [...filteredLocals, ...filesArray],
    });
  };

  return (
    <div
      className={`flex w-full flex-col bg-gray-2/80 transition-all duration-300 md:w-[calc(100vw-65vw-0.25rem)] ${
        isOpen
          ? "h-[calc(100svh-4rem+0.25rem)]"
          : "h-0 md:h-[calc(100svh-4rem+0.25rem)]"
      }`}
    >
      <CardMenu hiddenFileInput={hiddenFileInput} />
      <div className="overflow-scroll overflow-x-hidden">
        {content === "empty" && <></>}
        {content === "selected" && currentToy && (
          <ToyDetailedCard toy={currentToy} />
        )}
        {(content === "edit" || content === "create") && (
          <ToyEditForm
            toyTmp={newToy as ToyTmp}
            hiddenFileInput={hiddenFileInput}
            setToyTmp={setNewToy as (newToy: ToyTmp) => void}
            deleteImgHandler={deleteImgHandler}
            setMainImgHandler={setMainImgHandler}
            fileInputChangeHandler={fileInputChangeHandler}
          />
        )}
      </div>
    </div>
  );
};

export default ToyCard;
