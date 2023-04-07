import { type ToyItem } from "shared/types";

export const exampleToy: ToyItem = {
  id: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  title: "Игрушка",
  type: "Стекло",
  material: "",
  dates: "",
  category: "",
  size: 0,
  description: "",
  photos: [],
  mainPhotoId: "1",
  box: 1,
};

export const datesOptions = [
  "",
  "2020-е",
  "2010-е",
  "2000-е",
  "90-е",
  "80-е",
  "70-е",
  "60-е",
  "50-е",
  "40-е",
  "30-е",
  "19-й век",
];

export const materialOptions = [
  "",
  "Стекло",
  "Пластик",
  "Металл",
  "Дерево",
  "Ткань",
  "Войлок",
  "Вата",
  "Картон",
  "Фарфор",
];
