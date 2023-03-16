import { type ToyItem } from "shared/types";

export const descriptionMapper = (toy: ToyItem) => {
  return [
    {
      title: "Тип",
      value: toy.type || "",
    },
    {
      title: "Материал",
      value: toy.material || "",
    },
    {
      title: "Годы",
      value: toy.dates || "",
    },
    {
      title: "Категория",
      value: toy.category || "",
    },
    {
      title: "Высота",
      value: toy.size ? `${toy.size} см` : "",
    },
    {
      title: "Описание",
      value: toy.description || "",
    },
    {
      title: "Коробка",
      value: toy.box?.toString() || "",
    },
  ];
};
