import { create } from 'zustand';
import { User } from '@/types/login/loginResponse';
import { checkAuth } from '@/helpers/checkAuth';

interface UserData {
    tipoDocumento: string;
    numeroDocumento: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    direccion: string;
    telefono: string;
    genero: string;
    estaEmbarazada: boolean;
    FUR: string;
    fechaProbableParto: string;
}

interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
    initializeUser: () => Promise<void>;
    formData: UserData[];
    addFormData: (data: UserData) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user: User | null) => set({ user }),
    initializeUser: async () => {
        const user = await checkAuth();
        set({ user });
    },
    formData: [],
    addFormData: (data: UserData) => set((state) => ({ formData: [...state.formData, data] })),
}));
