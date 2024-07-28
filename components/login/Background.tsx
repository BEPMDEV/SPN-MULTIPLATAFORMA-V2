import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
} from 'react-native';
import Logo from './Logo';
import Header from './Header';

import useResponsiveLayout from '@/hooks/useResponsiveLayout';
import useResizeReload from '@/hooks/useResizeReload';
import useFirstRender from '@/hooks/useFirstRender';

const backgroundImage =  require('@/assets/images/login/background.jpg');
const logo = require('@/assets/images/general/logo2.png')

const isWeb = Platform.OS === 'web';

const Background = ({ children }: { children: React.ReactNode }) => {
  const { containerWidth, height, display } = useResponsiveLayout();
  const size = useResizeReload(400)

  const isFirstRender = useFirstRender()

  if (isFirstRender) {
    return null;
  }
  
  return (
    <>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={[isWeb? { height: height } : { flex: 1 }, styles.background, { display: display === 'none' ? 'flex' : 'none' }]}
      >
        <View style={[isWeb && { height: height }, styles.overlay]} />

        <KeyboardAvoidingView style={[styles.container, { width: containerWidth as any }]}>
          {
            size && <Logo image={logo}/>
          }
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
