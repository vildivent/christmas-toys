import Image from "next/image";
import Description from "./Description";
import Menu from "./Menu";
import { useToysStore } from "../../modules/toys/store";
import { useCardStore } from "./store";

const height = 300;

type CardProps = {
  isModal: boolean;
};

const Card = ({ isModal }: CardProps) => {
  const content = useCardStore((state) => state.content);
  return (
    <>
      <Menu isModal={isModal} />

      <div className="flex flex-col items-center overflow-auto scroll-smooth px-5 pb-16">
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

      <h2 className="my-5 text-center text-3xl">{currentToy.title}</h2>
      <div>id: {currentToy.id}</div>
      <Description descriptionData={currentToy.description} />
    </>
  );
};

const Edit = () => {
  const currentToy = useToysStore((state) => state.currentToy);
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

      <h2 className="text-center text-3xl">{currentToy.title}</h2>
      <Description descriptionData={currentToy.description} />
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

      <h2 className="text-center text-3xl">{newToy.title}</h2>
      <Description descriptionData={newToy.description} />
    </>
  );
};
