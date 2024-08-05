import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

type Props = React.ComponentProps<typeof Pressable> & {
  children: React.ReactNode;
  onHoverInColor?: string;
  Icon: any;
  size?: number;
  name: string;
};

export default function TextHover({
  children,
  onHoverInColor = Colors.mainColor,
  Icon,
  size = 25,
  name,
  ...props
}: Props) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      {...props}
    >
      <View style={{ width: size, alignItems: 'center' }}>
        <Icon color={hover || pressed ? onHoverInColor : Colors.grayLight} name={name} size={size}/>
      </View>
      <Text style={{ color: hover || pressed ? onHoverInColor : Colors.grayLight }} className="ml-4 font-semiBold">
        {children}
      </Text>
    </Pressable>
  );
}
