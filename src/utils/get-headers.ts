import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuthStore } from '@/store/auth-store'

export async function getHeaders() {
  const { headerToken } = useAuthStore.getState()

  if (headerToken) {
    return headerToken
  }

  const token = await AsyncStorage.getItem('token')

  if (token) {
    return `Bearer ${token}`
  }

  return ''
}
