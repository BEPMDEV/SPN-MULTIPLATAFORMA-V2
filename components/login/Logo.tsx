import { Image, ImageSourcePropType } from 'react-native';

interface Props {
  image: ImageSourcePropType
}

const Logo = ({image}: Props) => {
  return <Image source={image} className='w-32 h-32' />
}

export default Logo;
