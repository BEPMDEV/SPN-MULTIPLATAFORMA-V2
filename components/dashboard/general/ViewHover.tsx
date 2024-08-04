import { useState } from "react"
import { Pressable } from "react-native"

type Props = React.ComponentProps<typeof Pressable> &
{
  children: React.ReactNode;
  onHoverInColor?: string;
  active: boolean;
};

export default function ViewHover({ children, onHoverInColor = 'bg-customPink', active, ...props }: Props) {

  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)

  if (!active) {
    return (
      <Pressable className={`${hover || pressed ? onHoverInColor : 'bg-transparent'}`} onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)} onHoverIn={() => setHover(true)} onHoverOut={() => setHover(false)} {...props}>
        {children}
      </Pressable>
    )
  }

  return (
    <Pressable className={`${onHoverInColor}`} {...props}>
      {children}
    </Pressable>
  )
}
