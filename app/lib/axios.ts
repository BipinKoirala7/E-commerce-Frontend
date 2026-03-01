import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, request } = error;

    if (response) {
      console.error("API Error:", response.status, response.data);
    } else if (request) {
      console.error("No response received:", request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    return Promise.reject(error);
  },
);

export { api };
