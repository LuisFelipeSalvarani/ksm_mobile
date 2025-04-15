import { IconChevronLeft } from '@tabler/icons-react-native'
import { type Href, useRouter } from 'expo-router'
import {
  type GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

type HeaderProps = {
  title: string
  onBack?: Href | ((event: GestureResponderEvent) => void) | undefined
}

export function Header({ title, onBack }: HeaderProps) {
  const navigate = useRouter()

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.back}
        onPress={
          onBack
            ? typeof onBack === 'function'
              ? onBack
              : () => navigate.dismissTo(onBack)
            : () => navigate.dismissTo('/')
        }
      >
        <IconChevronLeft size={24} color={colors.blue[600]} />
      </TouchableOpacity>

      <Text style={s.title}>{title}</Text>

      <View style={s.space} />
    </View>
  )
}
