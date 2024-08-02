import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Cookies from 'js-cookie';

// Función para almacenar el token
export async function storeToken(token: string, expiresInHours: number): Promise<void> {
    if (Platform.OS === 'web') {
        // Almacenar en cookies para web con expiración
        Cookies.set('auth_token', token, { expires: expiresInHours / 24, path: '' }); // 24 horas = 1 día
    } else {
        // Almacenar en SecureStore para móvil con expiración personalizada
        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + expiresInHours);

        const tokenData = JSON.stringify({
            token,
            expires_at: expirationDate.toISOString(),
        });

        await SecureStore.setItemAsync('auth_token', tokenData);
    }
}

// Función para obtener el token
export async function getToken(): Promise<string | null> {
    if (Platform.OS === 'web') {
        // Obtener de cookies para web
        return Cookies.get('auth_token') || null;
    } else {
        // Obtener de SecureStore para móvil
        const tokenData = await SecureStore.getItemAsync('auth_token');

        if (tokenData) {
            const { token, expires_at } = JSON.parse(tokenData);
            const expirationDate = new Date(expires_at);

            if (new Date() < expirationDate) {
                return token; // Token aún válido
            } else {
                await clearToken(); // Borrar token expirado
                return null; // Token expirado
            }
        }

        return null; // No hay token almacenado
    }
}

// Función para eliminar el token
export async function clearToken(): Promise<void> {
    if (Platform.OS === 'web') {
        // Eliminar de cookies para web
        Cookies.remove('auth_token');
    } else {
        // Eliminar de SecureStore para móvil
        await SecureStore.deleteItemAsync('auth_token');
    }
}
