import { type ToyCardState } from "entities/Toy/types";
import { create } from "zustand";

type CardState = {
  content: ToyCardState;
  isOpen: boolean;
  setCardContent: (content: ToyCardState) => void;
  setIsOpen: (isOpen: boolean) => void;
};

export const useCardStore = create<CardState>((set) => ({
  content: "empty",
  isOpen: false,
  setCardContent: (content) => set((state) => ({ ...state, content })),
  setIsOpen: (isOpen) => set((state) => ({ ...state, isOpen })),
}));
