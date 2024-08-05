import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import ViewHover from '@/components/dashboard/general/ViewHover';
import { Colors } from '@/constants/Colors';

const notifications = [
    {
        title: 'Notificación de Parto',
        message: 'La señora Maria debería estar dando a luz ahora.',
        date: '12 May, 2024',
    },
    {
        title: 'Notificación de Parto',
        message: 'La señora Maria debería estar dando a luz ahora.',
        date: '12 May, 2024',
    },
    {
        title: 'Notificación de Parto',
        message: 'La señora Maria debería estar dando a luz ahora.',
        date: '12 May, 2024',
    },
    {
        title: 'Notificación de Parto',
        message: 'La señora Maria debería estar dando a luz ahora.',
        date: '12 May, 2024',
    },
    {
        title: 'Notificación de Parto',
        message: 'La señora Maria debería estar dando a luz ahora.',
        date: '12 May, 2024',
    },
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
            style={{ cursor: 'auto', backgroundColor: Colors.white }}
            android_disableSound
            className={`w-72 h-96 absolute z-[1] right-7 lg:right-60 top-20 rounded-sm ${!notificationOpen && 'hidden'}`}
            onPress={() => setNotificationOpen(true)}
        >
            <View className='px-5 py-4'>
                <Text style={{ fontSize: 16, color: Colors.grayLight }}>Notificaciones</Text>
            </View>
            <View style={{ borderBottomWidth: 1 }} className='w-full border-gray-300'></View>
            <ScrollView>
                {notifications.map((notification, index) => (
                    <React.Fragment key={index}>
                        <ViewHover onHoverInColor='bg-gray-100' active={false} className='px-5 py-4'>
                            <Text style={{ color: Colors.grayDark }} className='font-semiBold'>{notification.title}</Text>
                            <Text style={{ color: Colors.grayLight }} className='mb-2'>{notification.message}</Text>
                            <Text style={{ color: Colors.grayLight, fontSize: 12 }} >{notification.date}</Text>
                        </ViewHover>
                        <View style={{ borderBottomWidth: 1 }} className='w-full border-gray-300'></View>
                    </React.Fragment>
                ))}
            </ScrollView>
        </Pressable>
    );
};

export default Notifications;
