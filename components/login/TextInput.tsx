import useAdaptiveFont from '@/hooks/general/useAdaptativeFont';
import useResizeReload from '@/hooks/general/useResizeReload';
import { View, StyleSheet } from 'react-native';
import { TextInput as Input } from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = React.ComponentProps<typeof Input> & { errorText?: string };

const TextInput = ({ errorText, ...props }: Props) => {

  const fontSizes = useAdaptiveFont()
  const isWidthReached  = useResizeReload(1024)

  return (
    <View style={styles.container}>
      <Input
       className='font-regular'
        style={[styles.input, { fontSize: fontSizes.text, backgroundColor: isWidthReached? 'transparent' : Colors.inputLoginBackgroundColor, borderColor: isWidthReached? Colors.inputLogin : undefined, borderWidth: isWidthReached? 2 : undefined }]}
        placeholderTextColor={Colors.inputLogin}
        {...props}
      />
    </View>
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

export default TextInput;
