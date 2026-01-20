import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthUser {
  id: string;
  username: string;
  email: string;
  balance: number;
  role: string;
  totalDeposited: number;
  createdAt: string;
}

interface AuthStore {
  authUser: AuthUser | null;
  isAuthenticated: boolean;

  setUser: (user: AuthUser | null) => void;
  updateUser: (data: Partial<AuthUser>) => void;
  updateBalance: (balance: number) => void;
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

      updateUser: (data) =>
        set((state) => ({
          authUser: state.authUser ? { ...state.authUser, ...data } : null,
        })),

      updateBalance: (balance) =>
        set((state) => ({
          authUser: state.authUser ? { ...state.authUser, balance } : null,
        })),
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
