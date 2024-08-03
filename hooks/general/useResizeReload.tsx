import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useResizeReload = (targetWidth: number) => {
  const [isWidthReached, setIsWidthReached] = useState(Dimensions.get('window').width >= targetWidth);

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = Dimensions.get('window').width;
      setIsWidthReached(newWidth >= targetWidth);
    };

    // Initial update
    updateWidth();

    // Listener for dimension changes
    const subscription = Dimensions.addEventListener('change', updateWidth);

    // Cleanup
    return () => {
      subscription?.remove();
    };
  }, [targetWidth]);

  return isWidthReached;
};

export default useResizeReload;
