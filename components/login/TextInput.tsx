import useAdaptiveFont from '@/hooks/useAdaptativeFont';
import useResizeReload from '@/hooks/useResizeReload';
import { View, StyleSheet } from 'react-native';
import { TextInput as Input } from 'react-native';

type Props = React.ComponentProps<typeof Input> & { errorText?: string };

const TextInput = ({ errorText, ...props }: Props) => {

  const fontSizes = useAdaptiveFont()
  const isWidthReached  = useResizeReload(1024)

  return (
    <View style={styles.container}>
      <Input
       className='font-regular'
        style={[styles.input, { fontSize: fontSizes.text, backgroundColor: isWidthReached? 'transparent' : 'white', borderColor: isWidthReached? '#ff8c00' : undefined, borderWidth: isWidthReached? 2 : undefined }]}
        placeholderTextColor={'#ff8c00'}
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
