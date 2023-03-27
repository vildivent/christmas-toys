import { type ToyItem } from "shared/types";
import { create } from "zustand";

export const useNewToyStore = create<NewToyState>((set) => ({
  newToy: null,
  setNewToy: (newToy) => set({ newToy }),
}));

export const useCurrentToyStore = create<CurrentToyState>((set) => ({
  currentToy: null,
  setCurrentToy: (currentToy) => set({ currentToy }),
}));

export const useToysPhotosStore = create<ToysPhotosState>((set) => ({
  photosToDelete: null,
  photosToAdd: null,

  setPhotosToDelete: (id) => set((state) => ({ ...state, photosToDelete: id })),
  setPhotosToAdd: (files) => set((state) => ({ ...state, photosFiles: files })),
}));

type NewToyState = {
  newToy: ToyItem | null;
  setNewToy: (newToy: ToyItem | null) => void;
};

type CurrentToyState = {
  currentToy: ToyItem | null;
  setCurrentToy: (currentToy: ToyItem | null) => void;
};

type ToysPhotosState = {
  photosToDelete: string[] | null;
  photosToAdd: FileList | null;

  setPhotosToDelete: (id: string[] | null) => void;
  setPhotosToAdd: (files: FileList | null) => void;
};
