import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import TextHover from '@/components/dashboard/general/TextHover';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';

const ProfileMenu: React.FC<{ perfilOpen: boolean, setPerfilOpen: (open: boolean) => void, handleLogout: () => void }> = ({ perfilOpen, setPerfilOpen, handleLogout }) => {
    return (
        <Pressable
            style={{ cursor: 'auto', backgroundColor: Colors.mainColor }}
            android_disableSound
            onPress={() => setPerfilOpen(true)}
            className={`w-64 absolute z-[1] right-7 top-20 rounded-sm border border-customPink ${!perfilOpen && 'hidden'}`}
        >
            <View className='px-6 py-7'>
                <TextHover Icon={IconFeather} name='settings' className='flex-row items-center max-w-full'>Ajustes</TextHover>
            </View>
            <View style={{ borderBottomWidth: 1 }} className='w-full border-customPink'></View>
            <View className='px-6 py-4'>
                <TextHover onPress={handleLogout} Icon={IconMaterialIcons} name='logout' className='flex-row items-center max-w-full'>Log Out</TextHover>
            </View>
        </Pressable>
    );
};

export default ProfileMenu;
