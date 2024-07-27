import useAdaptiveFont from '@/hooks/useAdaptativeFont';
import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {

  const fontSizes = useAdaptiveFont();

  return <Text className='font-bold' style={[styles.header, { fontSize: fontSizes.big }]}>{children}</Text>
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 14,
    color: 'white',
    textAlign: 'center'
  },
});

export default memo(Header);
