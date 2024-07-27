import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useAdaptiveFont = () => {
  const [fontSizes, setFontSizes] = useState(getFontSizes());

  useEffect(() => {
    const handleResize = () => {
      setFontSizes(getFontSizes());
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      subscription?.remove();
    };
  }, []);

  return fontSizes;
};

const getFontSizes = () => {
  const { width } = Dimensions.get('window');

  if (width <= 360) {
    return {
      parrafo: 15,
      buttonText: 18, //
      title: 22, //
      text: 14, //
      small: 13,
      big: 26
    };

  } else if (width <= 768) {
    return {
      parrafo: 17,
      buttonText: 20, //
      title: 24, //28
      text: 16, //
      small: 15,
      big: 28
    };

  } else if (width <= 1024) {

    return {
      parrafo: 19,
      buttonText: 22, //
      title: 26, //
      text: 18,//
      small: 17,
      big: 30
    };

  } else {
    
    return {
        parrafo: 21,
        buttonText: 24, //
        title: 28, //
        text: 20,//
        small: 19,
        big: 31
      };
  }

};

export default useAdaptiveFont;
