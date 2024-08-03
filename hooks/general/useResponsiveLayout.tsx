import { useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

const useResponsiveLayout = () => {
  const [containerWidth, setContainerWidth] = useState('100%');
  const [height, setHeight] = useState(Dimensions.get('window').height);
  const [display, setDisplay] = useState<'none' | 'flex'>('none');

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = Dimensions.get('window').width;

      setHeight(Dimensions.get('window').height);

      if (screenWidth <= 640) {
        setContainerWidth('100%');
      } else if (screenWidth <= 768) {
        setContainerWidth('80%');
      } else {
        setContainerWidth('70%');
      }

      if (screenWidth >= 1024) {
        setDisplay('flex');
      } else {
        setDisplay('none');
      }
    };

    updateLayout();

    const subscription = Dimensions.addEventListener('change', updateLayout);

    return () => {
      subscription?.remove();
    };
  }, []);

  return { containerWidth, height, display, isWeb };
};

export default useResponsiveLayout;
