import { userStore } from "../store/zustand";
import { ApiResponseT, UserLoginT, UserRegisterT, UserT } from "./../types";
import { api } from "./axios";

async function handleEmailSignup(userInfo: UserRegisterT) {
  const url = process.env.NEXT_PUBLIC_BASE_USER_EMAIL_REGISTER_URL as string;
  try {
    const response = await api.post<ApiResponseT<UserT>>(url, userInfo);
    userStore((state) => state.setUser(response.data.data));
  } catch (error) {
    console.error("Signup failed:", error);
  }
}

function handleGoogleAuth() {
  const url = process.env.NEXT_PUBLIC_BASE_USER_GOOGLE_LOGIN_URL as string;
  window.location.href = url;
}

async function handleEmailLogin(userInfo: UserLoginT) {
  const url = process.env.NEXT_PUBLIC_BASE_USER_EMAIL_LOGIN_URL as string;
  try {
    const response = await api.post<ApiResponseT<UserT>>(url, userInfo);
    userStore((state) => state.setUser(response.data.data));
  } catch (error) {
    console.error("Login failed:", error);
  }
}

export { handleGoogleAuth, handleEmailLogin, handleEmailSignup };
