import { type ToyItem } from "shared/types";
import { create } from "zustand";

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
