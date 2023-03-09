import { useCardStore } from "./store";
import Menu from "./Menu/Menu";
import Selected from "./CardContent/Selected";
import Edit from "./CardContent/Edit";

export const ImageHeight = 300;

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
        {content === "create" && <Edit />}
      </div>
    </>
  );
};

export default Card;
