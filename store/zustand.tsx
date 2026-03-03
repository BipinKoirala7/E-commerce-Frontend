import { create } from "zustand";
import { UserT } from "../types";

export type UserStoreT = {
  user: UserT | null;
  setUser: (user: UserT | null) => void;
  removeUser: () => void;
  isAuthenticated: () => boolean;
};

export type SearchParamsStoreT = {
  query: string;
  category: string;
  filter: string;
  minPrice: string;
  maxPrice: string;
  sortBy: string;
  setQuery: (query: string) => void;
  setCategory: (category: string) => void;
  setFilter: (filter: string) => void;
  setPriceRange: (minPrice: string, maxPrice: string) => void;
  setSortBy: (sortBy: string) => void;
};

const useUserStore = create<UserStoreT>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
  isAuthenticated: () => !get().user,
}));

const setUser = (user: UserT | null) =>
  useUserStore.setState((state) => ({ ...state, user }));

// Need to change the maxPrice according to the max price of the products that came
const useSearchParamsStore = create<SearchParamsStoreT>((set) => ({
  query: "",
  category: "",
  filter: "",
  minPrice: "",
  maxPrice: "9999",
  sortBy: "",
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  setFilter: (filter) => set({ filter }),
  setPriceRange: (minPrice, maxPrice) => set({ minPrice, maxPrice }),
  setSortBy: (sortBy) => set({ sortBy }),
}));

export { useUserStore, setUser, useSearchParamsStore };
