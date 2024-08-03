import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import useAdaptiveFont from '@/hooks/general/useAdaptativeFont';
import useResponsiveLayout from '@/hooks/general/useResponsiveLayout';
import Sidebar from '@/components/dashboard/sidebar';
import sidebarData from '@/components/dashboard/sidebar/sidebarData';
import useAuthRedirect from '@/hooks/auth/useAuthRedirect';
import { useAuth } from '@/hooks/auth/useAuth';
import { CustomStatusBar } from '@/components/dashboard/general/CustomStatusBar';
import Notifications from '@/components/dashboard/header/Notifications';
import ProfileMenu from '@/components/dashboard/header/ProfileMenu';
import TopBar from '@/components/dashboard/header/TopBar';
import MainContent from '@/components/dashboard/MainContent';

const DashboardLayout: React.FC = () => {
    const { height } = useResponsiveLayout();
    const { title, text, small, parrafo } = useAdaptiveFont();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [perfilOpen, setPerfilOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);

	const router = useRouter();
    const { isReady } = useAuthRedirect();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        router.replace('/login');
    };

    if (!isReady) {
        return <View className='h-full w-full absolute bg-gray-950'></View>;
    }

    return (
        <View>
            <CustomStatusBar backgroundColor='rgb(17 24 39)' />

            <View className='lg:flex-row'>
                <Sidebar data={sidebarData} styles={{ height, title, text, small, parrafo }} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <Pressable
                    android_disableSound
                    style={{ cursor: 'auto' }}
                    disabled={perfilOpen || notificationOpen ? false : true}
                    className='lg:w-3/4 xl:w-4/5'
                    onPress={() => {
                        setPerfilOpen(false);
                        setNotificationOpen(false);
                    }}
                >
                    <View>
                        <TopBar setSidebarOpen={setSidebarOpen} setPerfilOpen={setPerfilOpen} setNotificationOpen={setNotificationOpen} perfilOpen={perfilOpen} notificationOpen={notificationOpen} />
                        <Notifications notificationOpen={notificationOpen} setNotificationOpen={setNotificationOpen} />
                        <ProfileMenu perfilOpen={perfilOpen} setPerfilOpen={setPerfilOpen} handleLogout={handleLogout} />
                        <Pressable android_disableSound style={{ cursor: 'auto' }} onPress={() => setSidebarOpen(false)} className={`absolute bg-black z-[1] w-full h-full opacity-50 lg:hidden ${!sidebarOpen && 'hidden'}`}></Pressable>
                        <MainContent height={height} />
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default DashboardLayout;
