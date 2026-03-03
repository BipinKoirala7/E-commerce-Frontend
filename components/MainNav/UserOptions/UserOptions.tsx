"use client";

import LoggedInUserOptions from "./LoggedInUserOptions/LoggedInUserOptions";
import NotLoggedInUserOptions from "./NotLoggedInUserOptions/NotLoggedInUserOptions";
import { useUserStore } from "@/store/zustand";

function UserOptions() {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated());
  return isAuthenticated ? <LoggedInUserOptions /> : <NotLoggedInUserOptions />;
}
export default UserOptions;
