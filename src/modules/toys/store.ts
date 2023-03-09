import { create } from "zustand";

export type ToyItem = {
  id: string;
  title: string;
  type: string;
  dates?: string | null;
  material?: string | null;
  category?: string | null;
  photos: {
    id: string;
    title: string;
    url: string;
    aspect_ratio: number;
  }[];
  box?: number | null;
  size?: number | null;
  description?: string | null;
};

type ToysState = {
  currentToy: ToyItem | null;
  newToy: ToyItem | null;
  setCurrentToy: (currentToy: ToyItem | null) => void;
  setNewToy: (newToy: ToyItem | null) => void;
};

export const useToysStore = create<ToysState>((set) => ({
  currentToy: null,
  newToy: null,
  setNewToy: (newToy) => set(() => ({ newToy })),
  setCurrentToy: (currentToy) => set(() => ({ currentToy })),
}));
