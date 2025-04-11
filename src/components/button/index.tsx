import type { IconProps } from '@tabler/icons-react-native'
import {
  Text,
  type TextProps,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
  type ViewProps,
} from 'react-native'
import { colors } from '@/constants/theme'
import { s } from './styles'

type ButtonProps = TouchableOpacityProps & {}

function Button({ style, ...props }: ButtonProps) {
  return <TouchableOpacity style={[s.container, style]} {...props} />
}

type ButtonTextProps = TextProps & {}

function ButtonText({ style, ...props }: ButtonTextProps) {
  return <Text style={[s.text, style]} {...props} />
}

type ButtonIconProps = ViewProps & {
  icon: React.ComponentType<IconProps>
}

function ButtonIcon({ style, icon: Icon, ...props }: ButtonIconProps) {
  return (
    <View style={[s.icon, style]} {...props}>
      <Icon color={colors.zinc[50]} size={24} />
    </View>
  )
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
