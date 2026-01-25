import axios from "axios";

export const api = axios.create({
  baseURL: "https://restaurant-be-400174736012.asia-southeast2.run.app",
  headers: {
    "Content-Type": "application/json",
  },
});

// Inject token kalau ada
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Global error handler (optional tapi cakep)
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const message =
      err?.response?.data?.message ||
      err.message ||
      "Something went wrong. Please try again.";

    return Promise.reject(new Error(message));
  }
);
