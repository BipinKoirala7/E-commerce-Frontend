"use client";

import LoggedInUserOptions from "./LoggedInUserOptions";
import NotLoggedInUserOptions from "./NotLoggedInUserOptions";
import { userStore } from "@/store/zustand";

function UserOptions() {
  const isAuthenticated = userStore((state) => state.isAuthenticated());
  return isAuthenticated ? <LoggedInUserOptions /> : <NotLoggedInUserOptions />;
}
export default UserOptions;
