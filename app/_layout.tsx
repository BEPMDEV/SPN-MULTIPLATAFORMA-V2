import { Slot, SplashScreen } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

import { NativeWindStyleSheet } from "nativewind";
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { useAuthStore } from '@/zustand/store';

NativeWindStyleSheet.setOutput({
  default: "native",
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const { user, initializeUser } = useAuthStore(state => ({
    user: state.user,
    initializeUser: state.initializeUser
  }));


  useEffect(() => {
    const verifyAuth = async () => {
      if (!user) {
        await initializeUser();
      }
    };
    verifyAuth();
  }, []);

  const [loaded] = useFonts({
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <PaperProvider>

        <Slot />

      </PaperProvider>
    </>
  );
}
