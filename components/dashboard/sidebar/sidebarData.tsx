import { SidebarGroup } from '@/types/dashboard/sidebar';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';

const sidebarData: SidebarGroup[] = [
  {
    title: 'MENU',
    items: [
      {name: 'Home', route: '/home', icon: <IconEntypo name='home' color={Colors.light} size={25}/>}
    ]
  },
  {
    title: 'MUJERES',
    items: [
      { name: 'MER', route: '/mer', icon: <IconFontAwesome name="female" color={Colors.light} size={25} /> },
      {
        name: 'Gestantes', 
        route: '/gestantes', 
        icon: <IconIonicons name="woman" color={Colors.light} size={25} />
      },
    ],
  },
  {
    title: 'GESTIÓN Y REPORTES',
    items: [
      {
        name: 'Reportes', 
        route: null, 
        icon: <IconFontAwesome name="file-text" color={Colors.light} size={25} />, 
        children: [
          { name: 'Relación de Gestantes', route: '/reportes/relacion-gestantes', icon: null },
          { name: 'Gestantes No Atendidas', route: '/reportes/gestantes-no-atendidas', icon: null },
          { name: 'Resultados de Embarazo', route: '/reportes/resultados-embarazo', icon: null },
          { name: 'Gestantes Próximas a Parto', route: '/reportes/gestantes-proximas-parto', icon: null },
        ],
      },
      { name: 'Notificaciones', route: '/notificaciones', icon: <IconIonicons name="notifications" color={Colors.light} size={25} /> },
      { name: 'Actividades Programadas', route: '/actividades-programadas', icon: <IconFeather name="calendar" color={Colors.light} size={25} /> },
    ],
  },
  {
    title: 'GESTIÓN DE USUARIOS',
    items: [
      { name: 'Usuarios', route: '/usuarios', icon: <IconFontAwesome name="users" color={Colors.light} size={25} /> },
      { name: 'Permisos', route: '/permisos', icon: <IconFontAwesome name="lock" color={Colors.light} size={25} /> },
      { name: 'Roles', route: '/roles', icon: <IconMaterialIcons name="supervisor-account" color={Colors.light} size={25} /> },
    ],
  },
];

export default sidebarData;
