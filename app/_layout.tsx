import { Slot } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function RootLayout() {

  return (
    <>
      <PaperProvider>

          <Slot/>
        
      </PaperProvider>
    </>
  );
}
