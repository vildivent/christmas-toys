import { type ToyItem } from "shared/types";
import { create } from "zustand";
import type { ToyQuery } from "../types";

export const useNewToyStore = create<NewToyState>((set) => ({
  newToy: null,
  setNewToy: (newToy) => set({ newToy }),
}));

export const useCurrentToyStore = create<CurrentToyState>((set) => ({
  currentToy: null,
  setCurrentToy: (currentToy) => set({ currentToy }),
}));

export const useDeletePhotosStore = create<DeletePhotosState>((set) => ({
  photosToDelete: null,
  setPhotosToDelete: (id) => set((state) => ({ ...state, photosToDelete: id })),
}));

export const useToysQueryStore = create<ToysQueryState>((set) => ({
  query: null,
  setQuery: (query) => set({ query }),
}));

export const useToysNumberStore = create<ToysNumberState>((set) => ({
  toysNumber: null,
  setToysNumber: (newNumber) => set({ toysNumber: newNumber }),
}));

type NewToyState = {
  newToy: ToyItem | null;
  setNewToy: (newToy: ToyItem | null) => void;
};

type CurrentToyState = {
  currentToy: ToyItem | null;
  setCurrentToy: (currentToy: ToyItem | null) => void;
};

type DeletePhotosState = {
  photosToDelete: string[] | null;
  setPhotosToDelete: (id: string[] | null) => void;
};

type ToysQueryState = {
  query: ToyQuery | null;
  setQuery: (newQuery: ToyQuery | null) => void;
};
type ToysNumberState = {
  toysNumber: number | null;
  setToysNumber: (newNumber: number | null) => void;
};
