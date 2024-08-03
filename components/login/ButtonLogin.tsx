import { Pressable, StyleSheet, Text } from "react-native"
import { Colors } from "@/constants/Colors";
import { ActivityIndicator } from "react-native-paper";
import useAdaptiveFont from "@/hooks/general/useAdaptativeFont";

interface Props {
    handlePress: () => void
    loading: boolean
}

export const ButtonLogin = ({handlePress, loading}: Props) => {
    const fontSizes = useAdaptiveFont();
    return (
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
    )
}

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
