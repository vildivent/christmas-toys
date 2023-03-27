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
  "Современные",
  "90-е",
  "80-е",
  "70-е",
  "60-е",
  "50-е",
  "40-е",
  "30-е",
  "20-е",
  "10-е",
  "19-й век",
  "18-й век",
];

export const materialOptions = [
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
