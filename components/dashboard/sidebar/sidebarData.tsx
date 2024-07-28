
import { SidebarGroup } from '@/types/dashboard/sidebar';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const sidebarData: SidebarGroup[] = [
  {
    title: 'MENU',
    items: [
      { name: 'Home', route: '/home', icon: <IconEntypo name="home" color={'white'} size={25} /> },
      { name: 'Bookmark', route: '/bookmark', icon: <IconFontAwesome name="bookmark" color={'white'} size={25} /> },
    ],
  },
  {
    title: 'OTHERS',
    items: [
      {
        name: 'Chatbox', route: null, icon: <IconIonicons name="chatbox" color={'white'} size={25} />, children: [
          { name: 'Social', icon: null, route: '/chatbox/social' },
          { name: 'Personal', icon: null, route: '/chatbox/personal' },
          { name: 'Friends', icon: null, route: '/chatbox/friends' },
        ]
      },
    ],
  },
];

export default sidebarData;
