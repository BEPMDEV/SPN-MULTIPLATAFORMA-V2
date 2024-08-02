import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'expo-router';
import { useAuthStore } from '@/zustand/store';
import { getToken } from '@/utils/storageUtils';

const useAuthRedirect = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isReady, setIsReady] = useState(false)

    const { user, initializeUser } = useAuthStore(state => ({
        user: state.user,
        initializeUser: state.initializeUser
      }));

      useEffect(() => {
        const initialize = async () => {
            if (!user) {
               await initializeUser()
            }
        }
     
        initialize()
        setIsReady(true)

      }, [])
      
    useEffect(() => {
        const redirect = async () => {
            if (isReady) {
                if (!user) {
                    if (pathname !== '/login' && !await getToken()) {
                        router.replace('/login');
                        return
                    }
                }
    
                if (pathname !== '/login') {
                    router.replace(pathname as any);
                    return
                }
    
                router.replace('/home');
            }

            if (!(await getToken()) && pathname !== '/login') {
                router.replace('/login')
                return
            } 
        }

        redirect()

    }, [user]);

    return {isReady}
};

export default useAuthRedirect;
