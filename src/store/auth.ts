import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isAuth: boolean;
  authenticated: () => void;
  initAuthentication: () => void;
};

export const createAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      authenticated: () => set(() => ({ isAuth: true })),
      initAuthentication: () => set(() => ({ isAuth: false })),
    }),
    {
      name: "auth-storage",
    }
  )
);
