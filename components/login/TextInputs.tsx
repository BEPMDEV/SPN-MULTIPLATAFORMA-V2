import useAdaptiveFont from '@/hooks/general/useAdaptativeFont';
import useResizeReload from '@/hooks/general/useResizeReload';
import { View, StyleSheet } from 'react-native';
import { TextInput as Input } from 'react-native';
import { Colors } from '@/constants/Colors';

interface Props {
  email: string
  password: string
  onSetEmail: (email: string) => void
  onSetPassword: (password: string) => void
}

const TextInputs = ({ email, password, onSetEmail, onSetPassword }: Props) => {

  const fontSizes = useAdaptiveFont()
  const size = useResizeReload(1024)

  return (
    <>
      <View style={styles.container}>
        <Input
          placeholder="Ingrese Usuario"
          returnKeyType="next"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          value={email}
          onChangeText={onSetEmail}
          className='font-regular'
          style={[styles.input, { fontSize: fontSizes.text, backgroundColor: size? 'transparent': 'white', borderColor: Colors.mainColor, borderWidth: 2}]}
          placeholderTextColor={Colors.mainColor}
        />
      </View>

      <View style={styles.container}>
        <Input
          className='font-regular'
          style={[styles.input, { fontSize: fontSizes.text, backgroundColor: size? 'transparent': 'white', borderColor: Colors.mainColor, borderWidth: 2  }]}
          placeholderTextColor={Colors.mainColor}
          placeholder="Ingrese Contraseña"
          returnKeyType="done"
          secureTextEntry
          value={password}
          onChangeText={onSetPassword}
        />
      </View>
    </>


  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 8
  }
});

export default TextInputs;
