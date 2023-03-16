import ImageSlider from "./ImageSlider";
import Description from "shared/ui/Description";
import { type ToyItem } from "shared/types";
import { descriptionMapper } from "entities/Toy/lib/mappers/descriptionMapper";

type ToyDetailedCardProps = {
  toy: ToyItem;
};

const ToyDetailedCard = ({ toy }: ToyDetailedCardProps) => {
  const desc = descriptionMapper(toy);

  return (
    <div>
      <ImageSlider photos={toy.photos} />
      <div className="pl-5 pr-6 pb-5">
        <h2 className="my-5 text-center font-h text-3xl">{toy.title}</h2>

        <Description description={desc} color="text-green-500" />
      </div>
    </div>
  );
};

export default ToyDetailedCard;
