import { create } from "zustand";
import { UserT } from "../app/types";

export type UserStoreT = {
  user: UserT | null;
  setUser: (user: UserT | null) => void;
  removeUser: () => void;
  isAuthenticated: () => boolean;
};

const userStore = create<UserStoreT>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
  isAuthenticated: () => !!get().user,
}));

export { userStore };
