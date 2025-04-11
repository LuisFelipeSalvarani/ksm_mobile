import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

import { useLogin } from '@/http/endpoints/authentication/authentication'
import { useAuthStore } from '@/store/auth-store'

type OnSubmitLoginType = {
  email: string
  password: string
}

const useLoginContainer = () => {
  const setUserData = useAuthStore(state => state.setUserData)
  const { mutateAsync } = useLogin()

  const onSubmit = async ({ email, password }: OnSubmitLoginType) => {
    const { user, token } = await mutateAsync({
      data: { email, password },
    })

    await AsyncStorage.setItem('token', token)
    await AsyncStorage.setItem('user', JSON.stringify(user))

    setUserData({ ...user, headerToken: `Bearer ${token}` })

    router.replace('/home')
  }

  return { onSubmit }
}

export { useLoginContainer, type OnSubmitLoginType }
