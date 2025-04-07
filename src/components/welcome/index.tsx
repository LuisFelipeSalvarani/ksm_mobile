import AsyncStorage from '@react-native-async-storage/async-storage'
import { IconDoorExit, IconUserCircle } from '@tabler/icons-react-native'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAuthStore } from '@/store/auth-store'

import { colors } from '@/styles/theme'
import { s } from './styles'

export function Welcome() {
  const { name, role } = useAuthStore(state => state)
  const unsetUserData = useAuthStore(state => state.unsetUserData)
  const navigate = useRouter()
  const queryClient = useQueryClient()

  const onLogout = async () => {
    await AsyncStorage.clear()
    await queryClient.invalidateQueries()
    unsetUserData()
    navigate.replace('/')
  }

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
