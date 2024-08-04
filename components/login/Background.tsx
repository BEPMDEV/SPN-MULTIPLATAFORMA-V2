import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
  Image,
  Keyboard
} from 'react-native';
import Logo from './Logo';
import { Colors } from '@/constants/Colors';

import useResponsiveLayout from '@/hooks/general/useResponsiveLayout';
import useResizeReload from '@/hooks/general/useResizeReload';
import useFirstRender from '@/hooks/general/useFirstRender';
import { useEffect, useState } from 'react';

const logo = require('@/assets/images/general/logo.png')
const logoDiresa = require('@/assets/images/general/diresa-ancash.png')

const isWeb = Platform.OS === 'web';

const Background = ({ children }: { children: React.ReactNode }) => {
  const { containerWidth, height, display } = useResponsiveLayout();
  const [isKeyboardShowing, setKeyboardShowing] = useState(false)

  useEffect(() => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardShowing(true)
      });

      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardShowing(false)
      });

      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }
  }, []);

  const firstRender = useFirstRender();

  if (firstRender) {
    return null
  }

  return (
    <>
      <View
        style={[isWeb ? { height: height } : { flex: 1 }, styles.background, { display: display === 'none' ? 'flex' : 'none' }]}
      >
        <View className='absolute w-full'>
          <View style={{ backgroundColor: Colors.mainColor }} className='items-center mb-2'>
            <View className='pt-2'>
              <Image source={logo} className={`${isKeyboardShowing? 'w-24 h-24': 'w-32 h-32'}`} />
            </View>
            <Text className={`${isKeyboardShowing? 'text-2xl': 'text-4xl'} font-bold text-white pb-5`}>SISGEMA</Text>
          </View>

          <View className='items-center'>
            <View style={[ { width: containerWidth as any }]} className='px-3'>
              {children}
            </View>
          </View>
          
        </View>
      </View>

      <View style={{ backgroundColor: 'white', flexDirection: 'row', display: display === 'none' ? 'none' : 'flex' }}>
        <View style={styles.containerWeb}>
          <View
            style={[isWeb && { height: height }, styles.backgroundAdaptative, { backgroundColor: Colors.mainColor }]}
          >
            <Image source={logoDiresa} className='w-96 h-96' />
            <Text style={{ fontSize: 60 }} className='font-bold text-white mt-10'>SISGEMA</Text>
          </View>
        </View>

        <KeyboardAvoidingView style={[styles.container, styles.containerAdaptative]}>
          <Logo image={logo} />
          {children}
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    backgroundColor: 'white',
  },
  containerWeb: {
    width: '50%',
  },
  backgroundAdaptative: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAdaptative: {
    paddingHorizontal: 120,
  },
});

export default Background;
