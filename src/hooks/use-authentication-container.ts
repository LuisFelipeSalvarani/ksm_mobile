import AsyncStorage from '@react-native-async-storage/async-storage'
import type { RawAxiosRequestHeaders } from 'axios'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'

import { useCheckAuthentication } from '@/http/endpoints/authentication/authentication'

import { useAuthStore } from '@/store/auth-store'
import { getHeaders } from '@/utils/utils'

const useAuthenticationContainer = () => {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const setUserData = useAuthStore(state => state.setUserData)
  const navigate = useRouter()

  const { isSuccess, isLoading } = useCheckAuthentication({
    request: { headers },
    query: { enabled: !!headers },
  })

  const fetchAuthorizationHeader = async () => {
    try {
      const authorization = await getHeaders()

      if (!authorization) return

      setHeaders({ authorization })
    } catch (error) {
      console.error('Erro ao obter o header de autorização', error)
    }
  }

  const loadAndSetUserGlobalState = async () => {
    try {
      const [[_, token], [__, userString]] = await AsyncStorage.multiGet([
        'token',
        'user',
      ])

      if (token && userString) {
        const user: {
          id: string
          name: string
          email: string
          role: string
          companyId: string
          tradeName: string
        } = await JSON.parse(userString)

        setUserData({ ...user, headerToken: `Bearer ${token}` })
      }
    } catch (error) {
      console.error('Erro ao carregar os dados do usuário: ', error)
    }
  }

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  useEffect(() => {
    if (isSuccess) {
      loadAndSetUserGlobalState()
      navigate.replace('/home')
    }
  }, [isSuccess])

  return { isLoading }
}

export { useAuthenticationContainer }
