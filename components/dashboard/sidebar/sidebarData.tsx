import { SidebarGroup } from '@/types/dashboard/sidebar';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const sidebarData: SidebarGroup[] = [
  {
    title: 'MENU',
    items: [
      {name: 'Home', route: '/home', icon: <IconEntypo name='home' color={'white'} size={25}/>}
    ]
  },
  {
    title: 'MUJERES',
    items: [
      { name: 'MER', route: '/mer', icon: <IconFontAwesome name="female" color={'white'} size={25} /> },
      {
        name: 'Gestantes', 
        route: null, 
        icon: <IconIonicons name="woman" color={'white'} size={25} />, 
        children: [
          { name: 'Todas las Gestantes', route: '/gestantes/todas', icon: null },
          { name: 'Citas', route: '/gestantes/citas', icon: null },
          { name: 'Término de Embarazo', route: '/gestantes/termino-embarazo', icon: null },
          { name: 'Migración', route: '/gestantes/migracion', icon: null },
        ],
      },
    ],
  },
  {
    title: 'GESTIÓN Y REPORTES',
    items: [
      {
        name: 'Reportes', 
        route: null, 
        icon: <IconFontAwesome name="file-text" color={'white'} size={25} />, 
        children: [
          { name: 'Relación de Gestantes', route: '/reportes/relacion-gestantes', icon: null },
          { name: 'Gestantes No Atendidas', route: '/reportes/gestantes-no-atendidas', icon: null },
          { name: 'Resultados de Embarazo', route: '/reportes/resultados-embarazo', icon: null },
          { name: 'Gestantes Próximas a Parto', route: '/reportes/gestantes-proximas-parto', icon: null },
        ],
      },
      { name: 'Notificaciones', route: '/notificaciones', icon: <IconIonicons name="notifications" color={'white'} size={25} /> },
      { name: 'Actividades Programadas', route: '/actividades-programadas', icon: <IconFeather name="calendar" color={'white'} size={25} /> },
    ],
  },
  {
    title: 'GESTIÓN DE USUARIOS',
    items: [
      { name: 'Usuarios', route: '/usuarios', icon: <IconFontAwesome name="users" color={'white'} size={25} /> },
      { name: 'Permisos', route: '/permisos', icon: <IconFontAwesome name="lock" color={'white'} size={25} /> },
      { name: 'Roles', route: '/roles', icon: <IconMaterialIcons name="supervisor-account" color={'white'} size={25} /> },
    ],
  },
];

export default sidebarData;
