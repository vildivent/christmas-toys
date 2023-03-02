import { create } from "zustand";

type CardContent = "empty" | "add" | "edit" | "selected";

type CardState = {
  content: CardContent;
  isOpen: boolean;
  setCardContent: (content: CardContent) => void;
  setIsOpen: (isOpen: boolean) => void;
};

export const useCardStore = create<CardState>((set) => ({
  content: "empty",
  isOpen: false,
  setCardContent: (content) => set((state) => ({ ...state, content })),
  setIsOpen: (isOpen) => set((state) => ({ ...state, isOpen })),
}));
