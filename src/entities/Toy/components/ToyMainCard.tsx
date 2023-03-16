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
  width = "9rem",
  height = "14rem",
}: ToyMainCardProps) => {
  return (
    <div
      className="relative cursor-pointer bg-gray-1 transition hover:shadow-lg hover:shadow-gray-500"
      style={{ height, width }}
      onClick={onClick}
    >
      {toyItem.photos[0] && (
        <Image
          className="object-cover"
          src={toyItem.photos[0].url}
          alt={toyItem.title}
          fill
        />
      )}
    </div>
  );
};

export default ToyMainCard;
