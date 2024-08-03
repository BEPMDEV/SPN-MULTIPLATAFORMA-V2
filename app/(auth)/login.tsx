import React, { useEffect, useState } from 'react';
import Background from '@/components/login/Background';
import TextInput from '@/components/login/TextInput';
import { Keyboard, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '@/hooks/auth/useAuth';
import Error from '@/components/login/Error';
import { Errors } from '@/types/login/LoginErrors';
import useAuthRedirect from '@/hooks/auth/useAuthRedirect';
import { ButtonLogin } from '@/components/login/ButtonLogin';

const LoginPage = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const { isReady } = useAuthRedirect();

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
      setTimeout(() => {
        setErrors({})
      }, 4000)
      return;
    }

    if (errors && errors.unexpectedError) {
      setErrors({ unexpectedError: [errors.unexpectedError] });
      setLoading(false);
      setTimeout(() => {
        setErrors({})
      }, 4000)
      return;
    }

    if (errors && errors.messageError) {
      setErrors({ notFound: [errors.messageError] });
      setLoading(false);
      setTimeout(() => {
        setErrors({})
      }, 4000)
      return;
    }

    if (errors && errors.error) {
      setErrors({ error: [errors.error] });
      setLoading(false);
      setTimeout(() => {
        setErrors({})
      }, 4000)
      return;
    }
    setLoading(false);
  }

  if (!isReady) {
    return (
      <View className='h-full w-full absolute bg-gray-950'></View>
    )
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

        <ButtonLogin handlePress={handlePress} loading={loading} />

      </Background>
    </>
  );
};

export default LoginPage;
