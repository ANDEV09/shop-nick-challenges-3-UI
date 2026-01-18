import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthUser {
  id: string;
  username: string;
  email: string;
  balance: number;
  role: string;
}

interface AuthStore {
  authUser: AuthUser | null;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
}

// Zustand

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      authUser: null,
      isAuthenticated: false,

      setUser: (user) =>
        set({
          authUser: user,
          isAuthenticated: Boolean(user),
        }),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        authUser: state.authUser,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
