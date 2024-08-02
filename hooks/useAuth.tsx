import axios, { AxiosResponse } from 'axios';
import { useAuthStore } from '@/zustand/store';
import { storeToken, clearToken } from '@/utils/storageUtils'; // Asegúrate de tener las funciones correctas aquí
import { LoginResponse } from '@/types/login/loginResponse';
import { MyAxiosError } from '@/types/login/LoginErrors';

const API_URL = 'http://127.0.0.1:8000/api';

// Custom Hook para autenticación
export function useAuth() {
    const { setUser } = useAuthStore();

    // Función para iniciar sesión
    const login = async (email: string, password: string) => {
        try {
            const response: AxiosResponse<LoginResponse> = await axios.post(`${API_URL}/login`, { email, password });
            const { user, access_token } = response.data;

            // Almacenar token
            await storeToken(access_token, 24);

            // Establecer usuario en Zustand
            setUser(user);
        } catch (error) {

            const errorAxios = error as MyAxiosError;

            if (errorAxios.response) {
                // Obtener el JSON del error
                const errorData = errorAxios.response.data;

                // Aquí tienes el JSON con sus valores
                const typeError = errorData.typeError;

                if (typeError === 'validation') {
                    return { errors: errorData.errors };
                }
                
                if (typeError === 'unexpected') {
                    return {unexpectedError: errorData.error}
                }

                return { messageError: errorData.error };
            }

            // Manejar otros tipos de errores
            return { error: 'Error al conectarse con el servidor' };
        }
    };

    // Función para cerrar sesión
    const logout = async () => {
        await clearToken();
        setUser(null);
    };

    // Asegúrate de devolver un objeto con las funciones
    return { login, logout };
}
