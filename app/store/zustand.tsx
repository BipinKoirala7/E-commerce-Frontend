import { create } from "zustand";
import { UserT } from "../types";

export type UserStoreT = {
  user: UserT | null;
  setUser: (user: UserT | null) => void;
};

const userStore = create<UserStoreT>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export { userStore };
