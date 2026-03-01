import { userStore } from "../store/zustand";
import { ApiResponseT, UserLoginT, UserT } from "./../types";
import { api } from "./axios";

async function handleEmailSignup(userInfo: UserLoginT) {
  const url = "http://localhost:4000/api/auth/register";
  try {
    const response = await api.post<ApiResponseT<UserT>>(url, userInfo);
    userStore((state) => state.setUser(response.data.data));
  } catch (error) {
    console.error("Signup failed:", error);
  }
}

function handleGoogleAuth() {
  const url = "http://localhost:4000/api/auth/oauth/google";
}

function handleEmailLogin() {
  const url = "http://localhost:4000/api/auth/login";
}

export { handleGoogleAuth, handleEmailLogin, handleEmailSignup };
