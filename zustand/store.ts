import { create } from 'zustand';
import axios from 'axios';
import { User } from '@/types/login/loginResponse';
import { getToken } from '@/utils/storageUtils';

const API_URL = 'http://192.168.193.227:8000/api'; // Ajusta la URL según tu configuración

const checkAuth = async (): Promise<User | null> => {
    const token = await getToken();
    if (token) {
        try {
            const response = await axios.get(`${API_URL}/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching user:', error);
            return null;
        }
    } else {
        return null;
    }
};

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

