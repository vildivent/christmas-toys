import { create } from "zustand";
import { type toyItem } from "../../components/toyCard/data";

type ToysState = {
  toys: toyItem[];
  currentToy: toyItem | null;
  newToy: toyItem | null;
  setNewToy: (newToy: toyItem) => void;
  setCurrentToy: (id: string) => void;
  addToy: (payload: toyItem) => void;
  deleteToy: (id: string) => void;
  editToy: (payload: toyItem) => void;
};

export const useToysStore = create<ToysState>((set) => ({
  toys: [],
  currentToy: null,
  newToy: null,
  setNewToy: (newToy) => set(() => ({ newToy })),
  setCurrentToy: (id) =>
    set((state) => {
      const current = state.toys.filter((toy) => toy.id === id);
      if (current[0] !== undefined) return { ...state, currentToy: current[0] };
      else return { ...state, currentToy: null };
    }),
  addToy: (payload) =>
    set((state) => ({
      ...state,
      toys: [...state.toys, payload],
    })),
  deleteToy: (id) =>
    set((state: ToysState) => ({
      ...state,
      toys: state.toys.filter((toy) => toy.id !== id),
    })),
  editToy: (payload) =>
    set((state) => {
      const index = state.toys.findIndex((toy) => toy.id === payload.id);
      if (index !== -1) {
        const newToys = [...state.toys];
        newToys[index] = payload;
        return { ...state, toys: newToys };
      }
      return state;
    }),
}));
