import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SidebarItem as SidebarItemType } from '@/types/dashboard/sidebar';
import ViewHover from '@/components/dashboard/sidebar/ViewHover';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { usePathname, useRouter } from 'expo-router';

interface SidebarItemProps {
  item: SidebarItemType;
  textStyle: object;
  smallTextStyle: object;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, textStyle, smallTextStyle }) => {
  const pathname = usePathname();
  const childRouteActive = item.children ? item.children.some(child => child.route === pathname) : false;
  const [dropdown, setDropdown] = useState(childRouteActive);
  const active = !item.children ? item.route === pathname : false;
  const router = useRouter();

  const handlePress = (route: string | null) => {
    if (route) {
      router.push(route);
    } else {
      console.error("Route is undefined");
    }
  };

  return (
    <View>
      <ViewHover
        active={childRouteActive ? true : active}
        onPress={() => item.children ? setDropdown(!dropdown) : (active ? undefined : handlePress(item.route))}
        className="p-2.5 mt-3 justify-between items-center flex-row rounded-md px-4"
      >
        <View className="flex-row items-center">
          <View className="w-[25px] items-center">
            {item.icon}
          </View>
          <Text style={textStyle} className="text-gray-200 ml-4 font-semiBold">{item.name}</Text>
        </View>
        {item.children && (
          <View className={`${!dropdown && 'rotate-180'}`}>
            <IconEntypo name="chevron-down" color={'white'} size={25} />
          </View>
        )}
      </ViewHover>
      {item.children && (
        <View className={`mt-2 w-4/5 mx-auto ${!dropdown && 'hidden'}`}>
          {item.children.map((child, index) => {
            const activeChild = child.route === pathname;

            return (
              <ViewHover
                onPress={() => activeChild ? undefined : handlePress(child.route)}
                active={activeChild}
                key={index}
                onHoverInColor="bg-gray-700"
                style={{ cursor: 'pointer' }}
                className="p-2 rounded-md mt-1"
              >
                <Text style={smallTextStyle} className="text-gray-200 text-left font-regular">{child.name}</Text>
              </ViewHover>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default SidebarItem;
