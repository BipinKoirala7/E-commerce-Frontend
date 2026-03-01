import { userStore } from "../store/zustand";
import { ApiResponseT, UserLoginT, UserT } from "./../types";

async function handleEmailSignup(userInfo: UserLoginT) {
  const url = "http://localhost:4000/api/auth/register";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      Content: "application/json",
    },
  });

  if (response.ok) {
    console.log("Logging in Failed");
    console.log(response.status);
  }

  const data: ApiResponseT<UserT> = await response.json();

  if (data.success) {
    console.log("Failed");
    console.log(data.message);
  }
  userStore((state) => state.setUser(data.data));
}

function handleGoogleAuth() {
  const url = "http://localhost:4000/api/auth/oauth/google";
}

function handleEmailLogin() {
  const url = "http://localhost:4000/api/auth/login";
}

export { handleGoogleAuth, handleEmailLogin, handleEmailSignup };
