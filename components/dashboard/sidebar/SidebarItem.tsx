
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SidebarItem as SidebarItemType } from '@/types/dashboard/sidebar';
import ViewHover from '@/components/dashboard/sidebar/ViewHover';
import IconEntypo from 'react-native-vector-icons/Entypo';

interface SidebarItemProps {
  item: SidebarItemType;
  textStyle: object;
  smallTextStyle: object;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, textStyle, smallTextStyle }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <View>
      <ViewHover onPress={() => item.children && setDropdown(!dropdown)} className="p-2.5 mt-3 justify-between items-center flex-row rounded-md px-4">
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
          {item.children.map((child, index) => (
            <ViewHover key={index} onHoverInColor="bg-gray-700" style={{ cursor: 'pointer' }} className="p-2 rounded-md mt-1">
              <Text style={smallTextStyle} className="text-gray-200 text-left font-regular">{child.name}</Text>
            </ViewHover>
          ))}
        </View>
      )}
    </View>
  );
};

export default SidebarItem;
