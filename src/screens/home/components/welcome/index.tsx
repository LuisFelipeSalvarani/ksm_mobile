import { IconDoorExit, IconUserCircle } from '@tabler/icons-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

type WelcomeProps = {
  name: string
  role: string
  onLogout: () => void
}

const Welcome = ({ name, role, onLogout }: WelcomeProps) => {
  return (
    <View style={s.container}>
      <IconUserCircle size={40} color={colors.zinc[800]} />

      <View style={s.greeting}>
        <Text style={s.title}>Bem-vindo, {name}</Text>
        <Text style={s.subtitle}>{role}</Text>
      </View>

      <TouchableOpacity style={s.action} onPress={onLogout}>
        <IconDoorExit size={20} color={colors.zinc[50]} />
      </TouchableOpacity>
    </View>
  )
}

export { Welcome, type WelcomeProps }
