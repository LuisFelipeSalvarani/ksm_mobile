import type { IconProps } from '@tabler/icons-react-native'
import {
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
  type ViewProps,
} from 'react-native'
import { colors } from '@/constants/theme'

import { s } from './styles'

type InputProps = ViewProps & {}

function Input({ style, ...props }: InputProps) {
  return <View style={[s.container, style]} {...props} />
}

type InputFieldProps = TextInputProps & {}

function InputField({ style, ...props }: InputFieldProps) {
  return (
    <TextInput
      style={s.field}
      placeholderTextColor={colors.zinc[500]}
      numberOfLines={1}
      maxLength={100}
      {...props}
    />
  )
}

type InputIconProps = ViewProps & {
  icon: React.ComponentType<IconProps>
}

function InputIcon({ icon: Icon, style, ...props }: InputIconProps) {
  return (
    <View style={[s.icon, style]} {...props}>
      <Icon size={24} color={colors.blue[800]} />
    </View>
  )
}

type InputActionProps = TouchableOpacityProps & {
  icon: React.ComponentType<IconProps>
}

function InputAction({ icon: Icon, style, ...props }: InputActionProps) {
  return (
    <TouchableOpacity style={[s.icon, style]} {...props}>
      <Icon size={24} color={colors.blue[800]} />
    </TouchableOpacity>
  )
}

Input.Field = InputField
Input.Icon = InputIcon
Input.Action = InputAction

export { Input }
