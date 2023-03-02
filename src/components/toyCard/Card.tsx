import Image from "next/image";
import Description from "./Description";
import Menu from "./Menu";
import { useToysStore } from "../../modules/toys/store";
import { useCardStore } from "./store";
import { useState, useEffect } from "react";

const height = 300;

type CardProps = {
  isModal: boolean;
};

const Card = ({ isModal }: CardProps) => {
  const content = useCardStore((state) => state.content);
  return (
    <>
      <Menu isModal={isModal} />

      <div className="flex flex-col items-center overflow-auto scroll-smooth px-5 pb-16 font-text">
        {content === "empty" && <></>}
        {content === "selected" && <Selected />}
        {content === "edit" && <Edit />}
        {content === "add" && <Add />}
      </div>
    </>
  );
};

export default Card;

const Selected = () => {
  const currentToy = useToysStore((state) => state.currentToy);
  if (!currentToy) return <div>Ошибка: отсутствует текущая игрушка</div>;
  return (
    <>
      {currentToy.images.length > 0 ? (
        currentToy.images.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt={image.title}
            height={height}
            width={height * image.ar}
          />
        ))
      ) : (
        <></>
      )}

      <h2 className="my-5 text-center font-h text-3xl">{currentToy.title}</h2>
      <div>id: {currentToy.id}</div>
      <Description descriptionData={currentToy.description} />
    </>
  );
};

const Edit = () => {
  const currentToy = useToysStore((state) => state.currentToy);
  const setNewToy = useToysStore((state) => state.setNewToy);

  const [title, setTitle] = useState(currentToy?.title || "");
  const [type, setType] = useState(currentToy?.description[0]?.value || "");
  const [material, setMaterial] = useState(
    currentToy?.description[1]?.value || ""
  );
  const [decade, setDecade] = useState(currentToy?.description[2]?.value || "");
  const [category, setCategory] = useState(
    currentToy?.description[3]?.value || ""
  );
  const [description, setDescription] = useState(
    currentToy?.description[4]?.value || ""
  );
  const [box, setBox] = useState(currentToy?.description[5]?.value || 0);

  useEffect(() => {
    if (currentToy)
      setNewToy({
        ...currentToy,
        title: title,
        description: [
          {
            name: "Тип",
            value: type,
          },
          {
            name: "Материал",
            value: material,
          },
          {
            name: "Годы",
            value: decade,
          },
          {
            name: "Категория",
            value: category,
          },
          {
            name: "Описание",
            value: description,
          },
          {
            name: "Коробка",
            value: box,
          },
        ],
      });
  }, [
    title,
    type,
    material,
    decade,
    category,
    description,
    box,
    setNewToy,
    currentToy,
  ]);

  if (!currentToy) return <div>Ошибка: отсутствует текущая игрушка</div>;
  return (
    <>
      <div className="mx-auto">
        {currentToy.images.length > 0 ? (
          currentToy.images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt={image.title}
              height={height}
              width={height * image.ar}
            />
          ))
        ) : (
          <></>
        )}
      </div>

      <form
        className="mt-5 flex w-full flex-col gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="mb-2 w-auto rounded-md border border-gray-500 bg-gray-2 px-5 text-center font-h text-3xl text-white outline-none focus:border-sky-600"
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <div className="grid grid-cols-description gap-3">
          <div className="text-sky-500">{`Тип :`}</div>
          <input
            className="rounded-md border border-gray-500 bg-gray-2 px-2 font-text text-white outline-none focus:border-sky-600"
            id="type"
            type="text"
            name="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />

          <div className="text-sky-500">{`Материал :`}</div>
          <input
            className="rounded-md border border-gray-500 bg-gray-2 px-2 font-text text-white outline-none focus:border-sky-600"
            id="material"
            type="text"
            name="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          />

          <div className="text-sky-500">{`Годы :`}</div>
          <input
            className="rounded-md border border-gray-500 bg-gray-2 px-2 font-text text-white outline-none focus:border-sky-600"
            id="decade"
            type="text"
            name="decade"
            value={decade}
            onChange={(e) => setDecade(e.target.value)}
          />

          <div className="text-sky-500">{`Категория :`}</div>
          <input
            className="rounded-md border border-gray-500 bg-gray-2 px-2 font-text text-white outline-none focus:border-sky-600"
            id="category"
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <div className="text-sky-500">{`Описание :`}</div>
          <textarea
            className="h-40 resize-none rounded-md border border-gray-500 bg-gray-2 px-2 font-text text-white outline-none focus:border-sky-600"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="text-sky-500">{`Коробка :`}</div>
          <input
            className="rounded-md border border-gray-500 bg-gray-2 px-2 font-text text-white outline-none focus:border-sky-600"
            id="box"
            type="number"
            name="box"
            value={box}
            onChange={(e) => setBox(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

const Add = () => {
  const newToy = useToysStore((state) => state.newToy);
  if (!newToy) return <div>Ошибка: отсутствует текущая игрушка</div>;
  return (
    <>
      <div className="mx-auto">
        {newToy.images.length > 0 ? (
          newToy.images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt={image.title}
              height={height}
              width={height * image.ar}
            />
          ))
        ) : (
          <></>
        )}
      </div>

      <h2 className="my-5 text-center font-h text-3xl">{newToy.title}</h2>
      <Description descriptionData={newToy.description} />
    </>
  );
};
