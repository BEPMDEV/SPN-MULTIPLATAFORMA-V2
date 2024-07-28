
import React, { useState } from 'react';
import { View, Platform, StatusBar as StatusBarNative, Pressable, ScrollView, Text, Image, TouchableWithoutFeedback } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import { StatusBar } from "expo-status-bar";
import { Slot, useRouter } from 'expo-router';
import useAdaptiveFont from '@/hooks/useAdaptativeFont';
import useResponsiveLayout from '@/hooks/useResponsiveLayout';
import Sidebar from '@/components/dashboard/sidebar';
import sidebarData from '@/components/dashboard/sidebar/sidebarData';
import TextHover from '@/components/dashboard/sidebar/TextHover';

const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';


const DashboardLayout: React.FC = () => {
  const { height } = useResponsiveLayout();
  const { title, text, small, parrafo } = useAdaptiveFont();

  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [perfilOpen, setPerfilOpen] = useState(false)

  return (
    <View style={{ marginTop: isMobile ? StatusBarNative.currentHeight : 0 }}>
      <StatusBar style='light' backgroundColor="rgb(17 24 39)" />

      <View className="lg:flex-row">
        <Sidebar data={sidebarData} styles={{ height, title, text, small, parrafo }} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Pressable style={{cursor: 'auto'}} disabled={ perfilOpen ? false : true} className="lg:w-3/4 xl:w-4/5" onPress={() => {setPerfilOpen(false)}}>
          <View>
            <View className="bg-gray-900 h-20 px-4 w-full z-[1] flex-row items-center justify-between lg:flex-row-reverse absolute lg:relative">
              <Pressable className="w-[50px] lg:hidden" onPress={() => {setSidebarOpen(true); setPerfilOpen(false)}} style={{ cursor: 'pointer' }}>
                <IconEntypo name="menu" size={50} color={'white'} />
              </Pressable>

              <View className="flex-row">
                <View className="hidden sm:flex self-center mr-3">
                  <Text style={{ fontSize: 14 }} className="text-white font-semiBold">Andy Bekham</Text>
                  <Text style={{ fontSize: 12 }} className="text-gray-400 text-right font-regular">Doctor</Text>
                </View>

                <Pressable onPress={() => setPerfilOpen(!perfilOpen)} className='flex-row self-center items-center gap-3'>
                  <Image className="w-12 h-12 rounded-full" source={require('@/assets/images/dashboard/perfil.jpg')} />
                  <View className={`${!perfilOpen && 'rotate-180'}`}>
                    <IconEntypo name="chevron-down" color={'white'} size={25} />
                  </View>
                </Pressable>

              </View>
            </View>

            <Pressable android_disableSound onPress={()=>setPerfilOpen(true)} className={`bg-gray-900 w-64 absolute z-[1] right-7 top-20 rounded-sm border border-gray-800 ${!perfilOpen && 'hidden'}`}>
              <View className='px-6 py-7'>
                <TextHover Icon={IconFeather} name='settings' className="flex-row items-center max-w-full">
                  Ajustes
                </TextHover>
              </View>

              <View style={{ borderBottomWidth: 1 }} className='w-full border-gray-800'></View>

              <View className='px-6 py-4'>
                <TextHover onPress={()=> router.replace('/login')} Icon={IconMaterialIcons} name="logout" className="flex-row items-center max-w-full">
                  Log Out
                </TextHover>
              </View>
            </Pressable>

            <Pressable style={{cursor: 'auto'}} onPress={() => setSidebarOpen(false)} className={`absolute bg-black z-[1] w-full h-full opacity-50 lg:hidden ${!sidebarOpen && 'hidden'}`}></Pressable>

            <ScrollView className="h-full bg-gray-950">
              <View style={{ height: isMobile ? 'auto' : height - 80 }} className="mt-20 lg:m-0 px-4 py-3">
                <Slot />
              </View>
            </ScrollView>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default DashboardLayout;
