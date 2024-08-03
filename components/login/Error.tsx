import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { View, Text } from 'react-native'
import useAdaptiveFont from '@/hooks/general/useAdaptativeFont';
interface Props {
    children: React.ReactNode;
}
export default function Error({children}: Props) {

    const fontSizes = useAdaptiveFont();

    return (
        <View className='bg-red-600 p-5 w-full rounded-md flex-row items-center justify-center'>
            <View className='w-5 mr-4'>
                <IconMaterialIcons name='error' color={'white'} size={20} />
            </View>
            <Text style={{ fontSize: fontSizes.small }} className='text-white font-semiBold'>
                {children}
            </Text>
        </View>
    )
}
