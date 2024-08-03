import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import ViewHover from '@/components/dashboard/general/ViewHover';

const notifications = [
    {
        title: 'Notificación de Parto',
        message: 'La señora Maria debería estar dando a luz ahora.',
        date: '12 May, 2024',
    },
    // Agregar más notificaciones aquí
];

const Notifications: React.FC<{ notificationOpen: boolean, setNotificationOpen: (open: boolean) => void }> = ({ notificationOpen, setNotificationOpen }) => {
    return (
        <Pressable
            disabled={!notificationOpen}
            style={{ cursor: 'auto' }}
            android_disableSound
            className={`bg-gray-900 w-72 h-96 absolute z-[1] right-7 lg:right-60 top-20 rounded-sm border border-gray-800 ${!notificationOpen && 'hidden'}`}
            onPress={() => setNotificationOpen(true)}
        >
            <View className='px-5 py-4'>
                <Text style={{ fontSize: 16 }} className='text-gray-500'>Notificaciones</Text>
            </View>
            <View style={{ borderBottomWidth: 1 }} className='w-full border-gray-800'></View>
            <ScrollView>
                {notifications.map((notification, index) => (
                    <React.Fragment key={index}>
                        <ViewHover onHoverInColor='bg-gray-800' active={false} className='px-5 py-4'>
                            <Text className='text-white font-semiBold'>{notification.title}</Text>
                            <Text className='text-gray-400 mb-2'>{notification.message}</Text>
                            <Text style={{ fontSize: 12 }} className='text-gray-400'>{notification.date}</Text>
                        </ViewHover>
                        <View style={{ borderBottomWidth: 1 }} className='w-full border-gray-800'></View>
                    </React.Fragment>
                ))}
            </ScrollView>
        </Pressable>
    );
};

export default Notifications;
