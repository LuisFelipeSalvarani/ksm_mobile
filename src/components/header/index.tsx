import {
  IconChevronLeft,
  IconMessage2Question,
} from '@tabler/icons-react-native'
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
  onAction?: Href | ((event: GestureResponderEvent) => void)
}

export function Header({ title, onBack, onAction }: HeaderProps) {
  const navigate = useRouter()

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.back}
        testID="Back"
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

      {onAction ? (
        <TouchableOpacity
          style={s.back}
          testID="Action"
          onPress={
            typeof onAction === 'function'
              ? onAction
              : () => navigate.push(onAction)
          }
        >
          <IconMessage2Question size={24} color={colors.blue[600]} />
        </TouchableOpacity>
      ) : (
        <View style={s.space} />
      )}
    </View>
  )
}
