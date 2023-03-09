import { useEffect } from "react";
import Image from "next/image";
import { useToysStore } from "../../../modules/toys/store";
import { ImageHeight } from "../Card";
import {
  DateInput,
  NumberInput,
  TextArea,
  TextInput,
  TitleInput,
  TypeInput,
} from "../Inputs";
import { useCardStore } from "../store";

const Edit = () => {
  const currentToy = useToysStore((state) => state.currentToy);
  const newToy = useToysStore((state) => state.newToy);
  const setNewToy = useToysStore((state) => state.setNewToy);

  const content = useCardStore((state) => state.content);

  useEffect(() => {
    if (currentToy && content === "edit") setNewToy(currentToy);
  }, [currentToy, setNewToy, content]);

  if (!newToy) return <></>;
  return (
    <>
      <div className="mx-auto">
        {newToy.photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.url}
            alt={photo.title}
            height={ImageHeight}
            width={ImageHeight * photo.aspect_ratio}
          />
        ))}
      </div>

      <form
        className="mt-5 flex w-full flex-col gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <TitleInput
          value={newToy?.title || ""}
          onChange={(e) =>
            setNewToy(newToy ? { ...newToy, title: e.target.value } : null)
          }
        />

        <div className="grid grid-cols-description gap-3">
          <div className="text-sky-500">{`Тип :`}</div>
          <TypeInput
            value={newToy?.type || ""}
            onChange={(e) =>
              setNewToy(newToy ? { ...newToy, type: e.target.value } : null)
            }
          />

          <div className="text-sky-500">{`Материал :`}</div>
          <TextInput
            id="material"
            value={newToy?.material || ""}
            onChange={(e) =>
              setNewToy(newToy ? { ...newToy, material: e.target.value } : null)
            }
          />

          <div className="text-sky-500">{`Годы :`}</div>
          <DateInput
            value={newToy?.dates || ""}
            onChange={(e) =>
              setNewToy(newToy ? { ...newToy, dates: e.target.value } : null)
            }
          />

          <div className="text-sky-500">{`Категория :`}</div>
          <TextInput
            id="category"
            value={newToy?.category || ""}
            onChange={(e) =>
              setNewToy(newToy ? { ...newToy, category: e.target.value } : null)
            }
          />

          <div className="text-sky-500">{`Высота (см) :`}</div>
          <NumberInput
            id="size"
            value={newToy?.size || 0}
            onChange={(e) =>
              setNewToy(newToy ? { ...newToy, size: +e.target.value } : null)
            }
          />

          <div className="text-sky-500">{`Описание :`}</div>
          <TextArea
            id="description"
            value={newToy?.description || ""}
            onChange={(e) =>
              setNewToy(
                newToy ? { ...newToy, description: e.target.value } : null
              )
            }
          />

          <div className="text-sky-500">{`Коробка :`}</div>
          <NumberInput
            id="box"
            value={newToy?.box || 0}
            onChange={(e) =>
              setNewToy(newToy ? { ...newToy, box: +e.target.value } : null)
            }
          />
        </div>
      </form>
    </>
  );
};
export default Edit;
