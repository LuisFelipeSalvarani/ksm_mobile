import { IconChevronLeft } from '@tabler/icons-react-native'
import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

import { colors } from '@/styles/theme'
import { s } from './styles'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  const navigate = useRouter()

  return (
    <View style={s.container}>
      <TouchableOpacity style={s.back} onPress={() => navigate.back()}>
        <IconChevronLeft size={24} color={colors.blue[600]} />
      </TouchableOpacity>

      <Text style={s.title}>{title}</Text>

      <View style={s.space} />
    </View>
  )
}
