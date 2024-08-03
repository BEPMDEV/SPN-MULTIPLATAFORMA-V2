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
import { Colors } from '@/constants/Colors';

import useResponsiveLayout from '@/hooks/general/useResponsiveLayout';
import useResizeReload from '@/hooks/general/useResizeReload';
import useFirstRender from '@/hooks/general/useFirstRender';

const backgroundImage =  require('@/assets/images/login/background.jpg');
const logo = require('@/assets/images/general/logo.png')

const isWeb = Platform.OS === 'web';

const Background = ({ children }: { children: React.ReactNode }) => {
  const { containerWidth, height, display } = useResponsiveLayout();
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
        <View style={[isWeb && { height: height }, styles.overlay]}/>

        <KeyboardAvoidingView style={[styles.container, { width: containerWidth as any }]}>
          {
            size && <Logo image={logo}/>
          }
          <Header>SISGEMA</Header>
          {children}
        </KeyboardAvoidingView>

      </ImageBackground>

      <View style={{ backgroundColor: Colors.backgroundColor, flexDirection: 'row', display: display === 'none' ? 'none' : 'flex' }}>
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
    backgroundColor: Colors.backgroundOpacityColor ,
    opacity: isWeb? 0.5 : 0.6
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
