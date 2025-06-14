import AsyncStorage from '@react-native-async-storage/async-storage'
import type { AxiosError } from 'axios'
import { router } from 'expo-router'
import { useState } from 'react'
import Toast from 'react-native-toast-message'
import { useLogin } from '@/http/endpoints/authentication/authentication'
import { useAuthStore } from '@/store/auth-store'

type OnSubmitLoginType = {
  email: string
  password: string
}

const useLoginContainer = () => {
  const setUserData = useAuthStore(state => state.setUserData)
  const [isLoading, setIsLoading] = useState(false)

  const { mutateAsync } = useLogin()

  const onSubmit = async ({ email, password }: OnSubmitLoginType) => {
    if (!email || !password)
      return Toast.show({
        type: 'error',
        text1: 'Todos os campos devem ser preenchidos',
      })

    setIsLoading(true)

    try {
      const { user, token } = await mutateAsync({
        data: { email, password },
      })

      await AsyncStorage.setItem('token', token)
      await AsyncStorage.setItem('user', JSON.stringify(user))

      setUserData({ ...user, headerToken: `Bearer ${token}` })

      router.replace('/home')
    } catch (error) {
      const err = error as AxiosError

      if (err.status === 404)
        return Toast.show({
          type: 'error',
          text1: 'Credenciais inválidas',
        })

      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer login',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return { onSubmit, isLoading }
}

export { useLoginContainer, type OnSubmitLoginType }
