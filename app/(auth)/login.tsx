import React, { useEffect, useState } from 'react';
import Background from '@/components/login/Background';
import TextInput from '@/components/login/TextInput';
import { Pressable, StyleSheet, Text, Keyboard, View, Platform } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import useAdaptiveFont from '@/hooks/useAdaptativeFont';
import { useAuth } from '@/hooks/useAuth';
import Error from '@/components/login/Error';
import { Errors } from '@/types/login/LoginErrors';
import useAuthRedirect from '@/hooks/useAuthRedirect';
import { Colors } from '@/constants/Colors';

const LoginPage = () => {
  const fontSizes = useAdaptiveFont();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const {isReady} = useAuthRedirect();

  useEffect(() => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setErrors({});
      });

      return () => {
        keyboardDidShowListener.remove();
      };
    }
  }, []);

  const handlePress = async () => {
    Keyboard.dismiss();
    setLoading(true);

    const errors = await login(email, password);

    if (errors && errors.errors) {
      setErrors(errors.errors);
      setLoading(false);
      setTimeout(()=> {
        setErrors({})
      }, 4000)
      return;
    }

    if (errors && errors.unexpectedError) {
      setErrors({ unexpectedError: [errors.unexpectedError] });
      setLoading(false);
      setTimeout(()=> {
        setErrors({})
      }, 4000)
      return;
    }

    if (errors && errors.messageError) {
      setErrors({ notFound: [errors.messageError] });
      setLoading(false);
      setTimeout(()=> {
        setErrors({})
      }, 4000)
      return;
    }

    if (errors && errors.error) {
      setErrors({ error: [errors.error] });
      setLoading(false);
      setTimeout(()=> {
        setErrors({})
      }, 4000)
      return;
    }
    setLoading(false);
  }

  if (!isReady) {
    return null;
  }

  return (
    <>
      <StatusBar style='light' />
      <Background>
        {Object.keys(errors).map((field, i) => (
          errors[field].map((error) => (
            <View key={i} className={`${Object.keys(errors).length > 1 && i === 1 && 'mt-4'} w-full`}>
              <Error>{error}</Error>
            </View>
          ))
        ))}
        <TextInput
          placeholder="Ingrese Usuario"
          returnKeyType="next"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Ingrese Contraseña"
          returnKeyType="done"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? Colors.buttonPressed : Colors.button }
          ]}

          onPress={handlePress}
        >
          {loading ? (
            <ActivityIndicator size={55} color={Colors.buttonText} />
          ) : (
            <Text className='font-bold' style={[styles.buttonText, { fontSize: fontSizes.buttonText }]}>INICIAR SESIÓN</Text>
          )}
        </Pressable>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 12
  },
  buttonText: {
    color: Colors.buttonText,
    padding: 12,
  },
});

export default LoginPage;
