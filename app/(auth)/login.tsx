import Background from '@/components/login/Background';
import { useState, useEffect } from 'react';
import { Text } from 'react-native-paper';
import TextInput from '@/components/login/TextInput';
import { Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import useAdaptiveFont from '@/hooks/useAdaptativeFont';
import { useRouter } from 'expo-router';

const LoginPage = () => {
  const fontSizes = useAdaptiveFont();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePress = () => {
    setLoading(true);
  };


  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        // Redirigir a la siguiente página
        router.replace('/home'); // Cambia '/nextPage' a la ruta a la que quieres redirigir
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loading, router]);

  return (
    <>
      <StatusBar style='light' />
      <Background>
        <Text className='text-black text-4xl'>Hola mundo</Text>
        <TextInput
          placeholder="Ingrese Usuario"
          returnKeyType="next"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Ingrese Contraseña"
          returnKeyType="done"
          secureTextEntry
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#D85D0A' : '#EA580C' }
          ]}
          onPress={handlePress}
        >
          {loading ? (
            <ActivityIndicator size={48} color="#fff" />
          ) : (
            <Text style={[styles.buttonText, { fontSize: fontSizes.buttonText }]}>INICIAR SESIÓN</Text>
          )}
        </Pressable>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 12
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 12,
  },
});

export default LoginPage;
