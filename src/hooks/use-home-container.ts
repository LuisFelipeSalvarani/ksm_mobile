import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { useAuthStore } from '@/store/auth-store'

const useHomeContainer = () => {
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

  return { onLogout, userState: { name, role } }
}

export { useHomeContainer }
