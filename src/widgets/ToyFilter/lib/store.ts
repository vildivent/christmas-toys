import { create } from "zustand";

type CardState = {
  isOpen: boolean;
  setIsOpen: (param: boolean | ((state: boolean) => boolean)) => void;
};

export const useFilterCardStore = create<CardState>((set) => ({
  isOpen: false,
  setIsOpen: (param) =>
    set((state) => {
      if (typeof param === "boolean") return { isOpen: param };
      return { isOpen: param(state.isOpen) };
    }),
}));
