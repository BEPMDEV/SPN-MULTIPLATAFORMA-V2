import useAdaptiveFont from "@/hooks/useAdaptativeFont";
import useResponsiveLayout from "@/hooks/useResponsiveLayout";
import { View, Text, Platform, StatusBar as StatusBarNative, Pressable } from 'react-native';

import IconEntypo from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { TextInput, ScrollView } from "react-native";
import ViewHover from "@/components/dashboard/layout/sidebar/ViewHover";
import { StatusBar } from "expo-status-bar";
import { Slot } from 'expo-router';
import { useState } from "react";

const isMobile = Platform.OS === 'android' || Platform.OS === 'ios'

export default function DashboardLayout() {

  const { height } = useResponsiveLayout()
  const { title, text, small } = useAdaptiveFont()

  const [dropdown, setDropdown] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <View style={{ marginTop: isMobile ? StatusBarNative.currentHeight : 0 }}>
      <StatusBar style='light' backgroundColor="rgb(17 24 39)" />

      <View className="lg:flex-row">
        <ScrollView style={{ height }} className={`hidden lg:flex p-2 absolute w-[300px] lg:w-auto z-[1] lg:relative lg:z-0 bg-gray-900 ${sidebarOpen && 'flex'}`}>
          {/* text-gray-100 text-xl */}
          {/* absolute z-[1] */}
          <View>
            {/* Header */}
            <View className="p-2.5 mt-1 items-center flex-row justify-between">
              <View className="flex-row items-center">
                <View className="px-2 py-1 bg-blue-600 rounded-md">
                  <IconEntypo name="notification" color={'white'} size={25} />
                </View>

                <Text style={{ fontSize: title }} className="text-gray-200 ml-3 self-start font-bold">
                  SPNG
                </Text>
              </View>
              <Pressable onPress={() => { setSidebarOpen(false); setDropdown(false) }} style={{ cursor: 'pointer' }} className=" lg:hidden">
                <IconFeather name="x" color={'white'} size={25} />
              </Pressable>
            </View>
            <View className="my-2 border-b-gray-600 border-b-2"></View>
          </View>

          <View className="p-2.5 mt-3 items-center flex-row rounded-md px-4 bg-gray-700">
            <View style={{ cursor: 'pointer' }} className="w-[25px] items-center">
              <IconFeather name="search" color={'white'} size={25} />
            </View>
            <TextInput style={{ fontSize: text }} placeholderTextColor={'white'} placeholder="Search" className="ml-4 w-full bg-transparent text-white font-regular" />
          </View>

          <ViewHover className="p-2.5 mt-3 items-center flex-row rounded-md px-4">
            <View className="w-[25px] items-center">
              <IconEntypo name="home" color={'white'} size={25} />
            </View>
            <Text style={{ fontSize: text }} className="text-gray-200 ml-4 font-semiBold">Home</Text>
          </ViewHover>

          <ViewHover className="p-2.5 mt-3 items-center flex-row rounded-md px-4">
            <View className="w-[25px] items-center">
              <IconFontAwesome name="bookmark" color={'white'} size={25} />
            </View>
            <Text style={{ fontSize: text }} className="text-gray-200 ml-4 font-semiBold">Bookmark</Text>
          </ViewHover>

          <View className="my-2 border-b-gray-600 border-b-2"></View>

          <ViewHover onPress={() => setDropdown(!dropdown)} className="p-2.5 mt-3 justify-between items-center flex-row rounded-md px-4">
            <View className="flex-row items-center">
              <View className="w-[25px] items-center">
                <IconIonicons name="chatbox" color={'white'} size={25} />
              </View>

              <Text style={{ fontSize: text }} className="text-gray-200 ml-4 font-semiBold">Chatbox</Text>
            </View>

            <View className={`${!dropdown && 'rotate-180'}`}>
              <IconEntypo name="chevron-down" color={'white'} size={25} />
            </View>
          </ViewHover>

          <View className={`mt-2 w-4/5 mx-auto ${!dropdown && 'hidden'}`}>
            <ViewHover onHoverInColor="bg-gray-700" style={{ cursor: 'pointer' }} className="p-2 rounded-md mt-1">
              <Text style={{ fontSize: small }} className="text-gray-200 text-left font-regular">Social</Text>
            </ViewHover>

            <ViewHover onHoverInColor="bg-gray-700" style={{ cursor: 'pointer' }} className="p-2 rounded-md mt-1">
              <Text style={{ fontSize: small }} className="text-gray-200 text-left font-regular">Personal</Text>
            </ViewHover>

            <ViewHover onHoverInColor="bg-gray-700" style={{ cursor: 'pointer' }} className="p-2 rounded-md mt-1">
              <Text style={{ fontSize: small }} className="text-gray-200 text-left font-regular">Friends</Text>
            </ViewHover>

          </View>

          <ViewHover className="p-2.5 mt-3 items-center flex-row rounded-md px-4">
            <View className="w-[25px] items-center">
              <IconMaterialIcons name="logout" color={'white'} size={25} />
            </View>
            <Text style={{ fontSize: text }} className="text-gray-200 ml-4 font-semiBold">Logout</Text>
          </ViewHover>

        </ScrollView>


        <Pressable disabled={sidebarOpen? false : true} className="lg:w-3/4 xl:w-4/5" onPress={() => setSidebarOpen(false)}>
          <View>

            <View className="bg-gray-900 h-20 px-4 w-full z-[1] flex-row items-center absolute lg:relative">
              <Pressable className="w-[50px] lg:hidden" onPress={() => setSidebarOpen(true)} style={{ cursor: 'pointer' }}>
                <IconEntypo name="menu" size={50} color={'white'} />
              </Pressable>
            </View>

            <ScrollView className="h-full">
            {/* height: height - 80 */}
              <View style={{ height: isMobile? 'auto': height - 80 }} className="mt-20 lg:m-0 px-4 py-3">
                <Slot />
              </View>
            </ScrollView>
          </View>
        </Pressable>
      </View>

    </View>

  );
}