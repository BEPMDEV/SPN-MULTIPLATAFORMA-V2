
import React, { useState } from 'react';
import { View, Platform, StatusBar as StatusBarNative, Pressable, ScrollView, Text, Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { StatusBar } from "expo-status-bar";
import { Slot } from 'expo-router';
import useAdaptiveFont from '@/hooks/useAdaptativeFont';
import useResponsiveLayout from '@/hooks/useResponsiveLayout';
import Sidebar from '@/components/dashboard/sidebar';
import sidebarData from '@/components/dashboard/sidebar/sidebarData';

const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';

const DashboardLayout: React.FC = () => {
  const { height } = useResponsiveLayout();
  const { title, text, small, buttonText } = useAdaptiveFont();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <View style={{ marginTop: isMobile ? StatusBarNative.currentHeight : 0 }}>
      <StatusBar style='light' backgroundColor="rgb(17 24 39)" />

      <View className="lg:flex-row">
        <Sidebar data={sidebarData} styles={{ height, title, text, small, buttonText }} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Pressable disabled={sidebarOpen ? false : true} className="lg:w-3/4 xl:w-4/5" onPress={() => setSidebarOpen(false)}>
          <View>
            <View className="bg-gray-900 h-20 px-4 w-full z-[1] flex-row items-center justify-between lg:flex-row-reverse absolute lg:relative">
              <Pressable className="w-[50px] lg:hidden" onPress={() => setSidebarOpen(true)} style={{ cursor: 'pointer' }}>
                <IconEntypo name="menu" size={50} color={'white'} />
              </Pressable>

              <View className="flex-row items-center gap-3">
                <View className="hidden sm:flex">
                  <Text style={{ fontSize: 14 }} className="text-white font-semiBold">Andy Bekham</Text>
                  <Text style={{ fontSize: 12 }} className="text-gray-400 text-right font-regular">Doctor</Text>
                </View>
                <Image className="w-12 h-12 rounded-full" source={require('@/assets/images/dashboard/perfil.jpg')} />
                <View className={`rotate-180`}>
                  <IconEntypo name="chevron-down" color={'white'} size={25} />
                </View>
              </View>
            </View>

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
