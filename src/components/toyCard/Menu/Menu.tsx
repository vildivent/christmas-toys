import { useCardStore } from "../store";
import Edit from "./Edit";
import Create from "./Create";
import Selected from "./Selected";

type MenuProps = {
  isModal: boolean;
};

const Menu = ({ isModal }: MenuProps) => {
  const content = useCardStore((state) => state.content);

  return (
    <div className="m-5 flex justify-end text-2xl">
      {content === "empty" && <></>}
      {content === "edit" && <Edit />}
      {content === "selected" && <Selected isModal={isModal} />}
      {content === "create" && <Create />}
    </div>
  );
};

export default Menu;
