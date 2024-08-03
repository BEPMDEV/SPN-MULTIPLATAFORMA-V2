import { API_URL } from "@/constants/BackendUrls";
import { User } from "@/types/login/loginResponse";
import { clearToken, getToken } from "@/utils/storageUtils";
import axios from "axios";

export const checkAuth = async (): Promise<User | null> => {
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
            await clearToken();
            return null;
        }
    } else {
        return null;
    }
};