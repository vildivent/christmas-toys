import type { MouseEventHandler } from "react";
import Image from "next/image";
import type { ToyItem } from "../../../shared/types";

type ToyMainCardProps = {
  toyItem: ToyItem;
  onClick: MouseEventHandler<HTMLDivElement>;
  width?: number | string;
  height?: number | string;
};

const ToyMainCard = ({
  toyItem,
  onClick,
  width = "10rem",
  height = "9rem",
}: ToyMainCardProps) => {
  return (
    <div
      className="relative cursor-pointer rounded-sm bg-gray-1 transition hover:shadow-lg hover:shadow-gray-500"
      style={{ height, width }}
      onClick={onClick}
    >
      {toyItem.mainPhoto && (
        <Image
          className="rounded-sm object-cover"
          src={toyItem.mainPhoto.url}
          alt={toyItem.title}
          fill
          sizes={width.toString()}
        />
      )}
    </div>
  );
};

export default ToyMainCard;
