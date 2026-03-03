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
  sort: string;
  filter: string;
  priceRange: string;
  sortBy: string;
  setQuery: (query: string) => void;
  setCategory: (category: string) => void;
  setSort: (sort: string) => void;
  setFilter: (filter: string) => void;
  setPriceRange: (priceRange: string) => void;
  setSortBy: (sortBy: string) => void;
};

const useUserStore = create<UserStoreT>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
  isAuthenticated: () => !!get().user,
}));

const setUser = (user: UserT | null) =>
  useUserStore.setState((state) => ({ ...state, user }));

const useSearchParamsStore = create<SearchParamsStoreT>((set) => ({
  query: "",
  category: "",
  sort: "",
  filter: "",
  priceRange: "",
  sortBy: "",
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  setSort: (sort) => set({ sort }),
  setFilter: (filter) => set({ filter }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setSortBy: (sortBy) => set({ sortBy }),
}));

export { useUserStore, setUser, useSearchParamsStore };
