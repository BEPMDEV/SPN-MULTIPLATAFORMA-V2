
import { View, Text, ScrollView, TextInput, Pressable, Platform } from 'react-native';
import { SidebarGroup } from '@/types/dashboard/sidebar';
import SidebarItem from './SidebarItem';
import IconFeather from 'react-native-vector-icons/Feather';
import { Image } from 'react-native';
const logo = require('@/assets/images/general/logo2.png')

const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';

interface SidebarProps {
  data: SidebarGroup[];
  styles: {
    height: number;
    title: number;
    text: number;
    small: number;
    parrafo: number;
  };
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ data, styles, sidebarOpen, setSidebarOpen }) => {
  const { height, title, text, small, parrafo } = styles;

  return (
    <ScrollView style={{ height: height }} className={`hidden lg:flex p-2 ${!isMobile && 'pb-4'} absolute w-[300px] lg:w-auto z-[1] lg:relative lg:z-0 bg-gray-900 ${sidebarOpen && 'flex'}`}>
      <View className={`${isMobile && 'pb-7'}`}>
        {/* Parte superior del sidebar */}
        <View>
          <View className="pr-2.5 items-center flex-row justify-between">
            <View className="flex-row items-center justify-center">

              <Image className='w-20 h-20' source={logo} />

              <Text style={{ fontSize: title }} className="text-gray-200 ml-3 font-bold">SISGEMA</Text>

            </View>
            <Pressable onPress={() => { setSidebarOpen(false); }} style={{ cursor: 'pointer' }} className=" lg:hidden">
              <IconFeather name="x" color={'white'} size={30} />
            </Pressable>
          </View>
        </View>

        {/* Buscador */}
        <View className="p-2.5 mt-2 items-center flex-row rounded-md px-4 bg-gray-700">
          <View style={{ cursor: 'pointer' }} className="w-[25px] items-center">
            <IconFeather name="search" color={'white'} size={25} />
          </View>
          <TextInput style={{ fontSize: text }} placeholderTextColor={'white'} placeholder="Search" className="ml-4 w-full bg-transparent text-white font-regular" />
        </View>

        {/* Grupos del sidebar */}
        {data.map((group, index) => (
          <View key={index}>
            <Text className="font-semiBold text-gray-600 ml-4 mt-7" style={{ fontSize: parrafo }}>{group.title}</Text>
            {group.items.map((item, itemIndex) => (
              <SidebarItem key={itemIndex} item={item} setSidebarOpen={setSidebarOpen} textStyle={{ fontSize: text }} smallTextStyle={{ fontSize: small }} />
            ))}
          </View>
        ))}
      </View>

    </ScrollView>
  );
};

export default Sidebar;
