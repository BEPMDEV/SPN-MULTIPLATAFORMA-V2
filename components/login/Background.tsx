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
import useAdaptiveFont from '@/hooks/general/useAdaptativeFont';
const logoDiresa = require('@/assets/images/general/diresa-ancash.png')

const logo = require('@/assets/images/general/logo.png')
const backgroundImage =  require('@/assets/images/login/background.jpg');

const isWeb = Platform.OS === 'web';

const Background = ({ children }: { children: React.ReactNode }) => {
  const { containerWidth, height, display } = useResponsiveLayout();
  const { big } = useAdaptiveFont()
  const size = useResizeReload(400)

  const firstRender = useFirstRender();

  if (firstRender) {
    return null
  }

  return (
    <>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={[isWeb? { height: height } : { flex: 1 }, styles.background, { display: display === 'none' ? 'flex' : 'none' }]}
      >
        <View className='absolute p-2 right-0 z-[1]'>
          <Image source={logoDiresa} className='w-20 h-20'/>
        </View>
        <View style={[isWeb && { height: height }, styles.overlay]} />

        <KeyboardAvoidingView style={[styles.container, { width: containerWidth as any }]}>
          {
            size && <Logo image={logo}/>
          }
          <Text style={{ color: Colors.white, fontSize: big }} className='font-bold'>SISGEMA</Text>
          {children}
        </KeyboardAvoidingView>

      </ImageBackground>

      <View style={{ backgroundColor: '#fdf2f8', flexDirection: 'row', display: display === 'none' ? 'none' : 'flex' }}>

        <View style={styles.containerWeb}>
          <ImageBackground
            source={backgroundImage}
            resizeMode="cover"
            style={[isWeb && { height: height }, styles.backgroundAdaptative]}
          >
            <Text style={styles.text}>SISGEMA</Text>
            <View style={[isWeb && { height: height }, styles.overlay]} />
          </ImageBackground>
        </View>
        <View className='absolute p-3 right-0'>
          <Image source={logoDiresa} className='w-28 h-28'/>
        </View>
        <KeyboardAvoidingView style={[styles.container, styles.containerAdaptative]}>
          <Logo image={logo}/>
          {children}
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
  },
  text: {
    zIndex: 1,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 80,
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#290b03' ,
    opacity: 0.5,
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
