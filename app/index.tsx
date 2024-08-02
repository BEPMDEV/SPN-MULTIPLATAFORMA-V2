import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/zustand/store'; // Ajusta la ruta según tu estructura de archivos
import { getToken } from '@/utils/storageUtils';

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  const user = useAuthStore(state => state.user)

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    const redirect = async () => {
      if (isReady) {
        if (user) {
          router.replace('/home')
          return
        }
        router.replace('/login')
        return
      }

      if (!(await getToken())) {
        router.replace('/login')
      }
    }
    redirect()

  }, [user]);

  return null
}
