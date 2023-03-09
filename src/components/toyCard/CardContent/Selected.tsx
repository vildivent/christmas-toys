import Image from "next/image";
import { useToysStore } from "../../../modules/toys/store";
import { ImageHeight } from "../Card";

const Selected = () => {
  const currentToy = useToysStore((state) => state.currentToy);
  if (!currentToy) return <></>;
  return (
    <>
      {currentToy &&
        currentToy.photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.url}
            alt={photo.title}
            height={ImageHeight}
            width={ImageHeight * photo.aspect_ratio}
          />
        ))}

      <h2 className="my-5 text-center font-h text-3xl">{currentToy.title}</h2>
      <div className="grid grid-cols-description gap-x-2 self-start">
        <div className="text-sky-500">{`Тип :`}</div>
        <div>{currentToy.type}</div>

        <div className="text-sky-500">{`Материал :`}</div>
        <div>{currentToy.material}</div>

        <div className="text-sky-500">{`Годы :`}</div>
        <div>{currentToy.dates}</div>

        <div className="text-sky-500">{`Категория :`}</div>
        <div>{currentToy.category}</div>

        <div className="text-sky-500">{`Высота :`}</div>
        <div>{currentToy.size ? `${currentToy.size} см` : ""}</div>

        <div className="text-sky-500">{`Описание :`}</div>
        <div>{currentToy.description}</div>

        <div className="text-sky-500">{`Коробка :`}</div>
        <div>{currentToy.box}</div>
      </div>
    </>
  );
};
export default Selected;
