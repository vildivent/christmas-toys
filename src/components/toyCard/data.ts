import { type StaticImageData } from "next/image";

export type descriptionData = {
  name: string;
  value: string | number;
}[];

export const descriptionData: descriptionData = [
  {
    name: "Тип",
    value: "Стекло",
  },
  {
    name: "Материал",
    value: "тонкое стекло",
  },
  {
    name: "Годы",
    value: "2000-е",
  },
  {
    name: "Категория",
    value: "Фрукты",
  },
  {
    name: "Описание",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facere obcaecati ratione tenetur quod. Distinctio quibusdam ullam ad error adipisci debitis sapiente nihil explicabo, tenetur neque temporibus amet veritatis veniam.",
  },
  {
    name: "Номер коробки",
    value: 1,
  },
];

export type toyItem = {
  id: string;
  title: string;
  images: {
    id: string;
    title: string;
    url: string | StaticImageData;
    ar: number;
  }[];
  description: descriptionData;
};

export const toyItems: toyItem[] = [
  {
    id: "1",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "2",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "3",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "4",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "5",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "6",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "7",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "8",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "9",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "10",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "11",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "12",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "13",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "14",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "15",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "16",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "17",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "18",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "19",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
  {
    id: "20",
    title: "Ананас",
    images: [
      {
        id: "1",
        title: "Ананас1",
        url: "/pineapple.png",
        ar: 0.87,
      },
    ],
    description: descriptionData,
  },
];
