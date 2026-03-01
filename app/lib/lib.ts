import { userStore } from "../store/zustand";
import { ApiResponseT, UserT } from "../types";
import { api } from "./axios";

async function loadUser() {
    const data = await api.get<ApiResponseT<UserT>>("/user");
    userStore().setUser(data.data.data);
}

export { loadUser };