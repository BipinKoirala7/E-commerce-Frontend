import { create } from "zustand";
import { Category, SortDirection, User } from "@/types";

export type UserStoreT = {
  user: User | null;
  setUser: (user: User | null) => void;
  removeUser: () => void;
  isAuthenticated: () => boolean;
};

export type SearchParamsStoreT = {
  query: string;
  category: Category;
  minPrice: string;
  maxPrice: string;
  sort: string;
  page: string;
  size: string;
  direction: SortDirection;
  //  Setters
  setQuery: (query: string) => void;
  setCategory: (category: Category) => void;
  setPriceRange: (minPrice: string, maxPrice: string) => void;
  setSort: (sortBy: string) => void;
  setPage: (page: string) => void;
  setSize: (size: string) => void;
  setDirection: (direction: SortDirection) => void;
};

const useUserStore = create<UserStoreT>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
  isAuthenticated: () => !!get().user, // !! to get the right boolean value
}));

const setUser = (user: User | null) =>
  useUserStore.setState((state) => ({ ...state, user }));

// Need to change the maxPrice according to the max price of the products that came
const useSearchParamsStore = create<SearchParamsStoreT>((set) => ({
  query: "",
  category: "all",
  minPrice: "1",
  maxPrice: "",
  sort: "",
  page: "0",
  size: "32",
  direction: "ASC",
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  setPriceRange: (minPrice, maxPrice) => set({ minPrice, maxPrice }),
  setSort: (sort) => set({ sort }),
  setPage: (page) => set({ page }),
  setSize: (size) => set({ size }),
  setDirection: (direction) => set({ direction }),
}));

export { useUserStore, setUser, useSearchParamsStore };
