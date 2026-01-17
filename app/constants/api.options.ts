export const API_OPTIONS = {
  baseURL: import.meta.env.VITE_PUBLIC_API_URL || "http://localhost:8000",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
} as const;
