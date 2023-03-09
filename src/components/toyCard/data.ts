import { type ToyItem } from "../../modules/toys/store";

export const exampleToy: ToyItem = {
  id: "1",
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
    },
  ],
  box: 1,
};
