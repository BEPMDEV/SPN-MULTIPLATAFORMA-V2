import React, { memo, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  ImageSourcePropType,
} from 'react-native';
import Logo from './Logo';
import Header from './Header';
import useResponsiveLayout from '@/hooks/useResponsiveLayout';
import { useEffect } from 'react';

const Background = ({ children }: { children: React.ReactNode }) => {
  const { containerWidth, height, display, isWeb } = useResponsiveLayout();
  const [backgroundImage, setBackgroundImage] = useState<ImageSourcePropType | null>()
  const [logo, setLogo] = useState<ImageSourcePropType | null>()

  useEffect(() => {
    const imageBackground = async () => {
      const image = await require('@/assets/images/login/background.jpg')
      const logo = await require('@/assets/images/login/logo.png')
      setBackgroundImage(image)
      setLogo(logo)
    }

    imageBackground()
  }, []);

  if (!backgroundImage || !logo) {
    return null
  }

  return (
    <>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={[isWeb && { height: height }, styles.background, { display: display === 'none' ? 'flex' : 'none' }]}
      >
        <View style={[isWeb && { height: height }, styles.overlay]} />

        <KeyboardAvoidingView style={[styles.container, { width: containerWidth as any }]}>
          <Logo image={logo}/>
          <Header>Sistema de Padrón Nominal de Gestantes</Header>
          {children}
        </KeyboardAvoidingView>

      </ImageBackground>

      <View style={{ backgroundColor: '#FFF7ED', flexDirection: 'row', display: display === 'none' ? 'none' : 'flex' }}>
        <View style={styles.containerWeb}>
          <ImageBackground
            source={backgroundImage}
            resizeMode="cover"
            style={[isWeb && { height: height }, styles.backgroundAdaptative]}
          >
            <Text style={styles.text}>SISTEMA DE PADRÓN NOMINAL DE GESTANTES</Text>
            <View style={[isWeb && { height: height }, styles.overlay]} />
          </ImageBackground>
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
    fontSize: 40,
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
    backgroundColor: '#431407',
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

export default memo(Background);
