import { create } from "zustand";

interface AuthUser {
  id: string;
  username: string;
  email: string;
  balance: number;
}

interface AuthStore {
  authUser: AuthUser | null;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
}

// Zustand

export const useAuthStore = create<AuthStore>((set) => ({
  
  authUser: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      authUser: user,
      isAuthenticated: Boolean(user),
    }),
}));
