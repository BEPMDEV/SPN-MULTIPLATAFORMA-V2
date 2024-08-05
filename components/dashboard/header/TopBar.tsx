import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

const TopBar: React.FC<{ setSidebarOpen: (open: boolean) => void, setPerfilOpen: (open: boolean) => void, setNotificationOpen: (open: boolean) => void, perfilOpen: boolean, notificationOpen: boolean }> = ({ setSidebarOpen, setPerfilOpen, setNotificationOpen, perfilOpen, notificationOpen }) => {
    return (
        <View style={{ backgroundColor: Colors.white }} className='h-20 px-4 w-full z-[1] flex-row items-center lg:flex-row-reverse justify-between absolute lg:relative border-b-[1px] border-gray-300'>
            <Pressable className='w-[50px] lg:hidden' onPress={() => { setSidebarOpen(true); setPerfilOpen(false); setNotificationOpen(false); }} style={{ cursor: 'pointer' }}>
                <IconEntypo name='menu' size={50} color={Colors.grayDark} />
            </Pressable>
            <View className='flex-row items-center gap-8'>
                <Pressable onPress={() => { setNotificationOpen(!notificationOpen); setPerfilOpen(false); }}>
                    <View style={{ backgroundColor: Colors.backgroundColor }} className='p-2 rounded-full'>
                        <IconIonicons name='notifications-outline' color={Colors.grayDark} size={28} /> 
                    </View>         
                </Pressable>
                <View className='flex-row'>
                    <View className='hidden sm:flex self-center mr-3'>
                        <Text style={{ fontSize: 14, color: Colors.grayDark }} className='font-semiBold'>Andy Bekham</Text>
                        <Text style={{ fontSize: 12, color: Colors.grayLight }} className='text-right font-regular'>Doctor</Text>
                    </View>
                    <Pressable onPress={() => { setPerfilOpen(!perfilOpen); setNotificationOpen(false); }} className='flex-row self-center items-center gap-3'>
                        <Image className='w-12 h-12 rounded-full' source={require('@/assets/images/dashboard/perfil.jpg')} />
                        <View className={`${!perfilOpen && 'rotate-180'}`}>
                            <IconEntypo name='chevron-down' color={Colors.grayDark} size={25} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default TopBar;
