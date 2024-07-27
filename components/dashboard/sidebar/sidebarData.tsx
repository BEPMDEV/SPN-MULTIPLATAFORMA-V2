
import { SidebarGroup } from '@/types/dashboard/sidebar';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const sidebarData: SidebarGroup[] = [
  {
    title: 'MENU',
    items: [
      { name: 'Home', icon: <IconEntypo name="home" color={'white'} size={25} /> },
      { name: 'Bookmark', icon: <IconFontAwesome name="bookmark" color={'white'} size={25} /> },
    ],
  },
  {
    title: 'OTHERS',
    items: [
      {
        name: 'Chatbox', icon: <IconIonicons name="chatbox" color={'white'} size={25} />, children: [
          { name: 'Social', icon: null },
          { name: 'Personal', icon: null },
          { name: 'Friends', icon: null },
        ]
      },
      { name: 'Logout', icon: <IconMaterialIcons name="logout" color={'white'} size={25} /> },
    ],
  },
];

export default sidebarData;
