import { setUser } from "../store/zustand";
import { ApiResponseT, UserT } from "../types";
import { api } from "./axios";

async function loadUser() {
  try {
    const data = await api.get<ApiResponseT<UserT>>("/user");
    setUser(data.data.data);
  } catch (error) {
    console.log("Error loading user:", error);
    setUser(null);
  }
}

export { loadUser };
