import { type Image } from "@prisma/client";
import { type ToyItem } from "shared/types";
import { create } from "zustand";

type ToysState = {
  currentToy: ToyItem | null;
  newToy: ToyItem | null;
  photosToAdd: Image[] | null;
  photosToDelete: string[] | null;
  photosFiles: FileList | null;
  setCurrentToy: (currentToy: ToyItem | null) => void;
  setNewToy: (newToy: ToyItem | null) => void;
  setPhotosToAdd: (newPhotos: Image[] | null) => void;
  setPhotosToDelete: (id: string[] | null) => void;
  setPhotosFiles: (files: FileList | null) => void;
};

export const useToysStore = create<ToysState>((set) => ({
  currentToy: null,
  newToy: null,
  photosToAdd: null,
  photosToDelete: null,
  photosFiles: null,
  setNewToy: (newToy) => set((state) => ({ ...state, newToy })),
  setCurrentToy: (currentToy) => set(() => ({ currentToy })),
  setPhotosToAdd: (newPhotos) =>
    set((state) => ({ ...state, photosToAdd: newPhotos })),
  setPhotosToDelete: (id) => set((state) => ({ ...state, photosToDelete: id })),
  setPhotosFiles: (files) => set((state) => ({ ...state, photosFiles: files })),
}));
