import { create } from 'zustand';
import type { User } from '@/types/login/loginResponse';
import { checkAuth } from '@/helpers/checkAuth';


interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
    initializeUser: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null, // Estado inicial predeterminado
    setUser: (user: User | null) => set({ user }),
    initializeUser: async () => {
        const user = await checkAuth();
        set({user})
    }
}))

