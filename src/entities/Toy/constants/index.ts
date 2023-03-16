import { type ToyItem } from "shared/types";

export const exampleToy: ToyItem = {
  id: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  title: "Ананас",
  type: "Стекло",
  material: "Тонкое стекло",
  dates: "Современные",
  category: "Фрукты",
  size: 8,
  description:
    "Тропическое многолетнее травянистое растение до 60 см высотой, с розеткой длинных, узких, грубых и в то же время сочных (суккулентных) листьев, зубчатых по краю",
  photos: [
    {
      id: "1",
      title: "Ананас1",
      url: "/pineapple.png",
      aspect_ratio: 0.87,
      toyId: "1",
    },
  ],
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
