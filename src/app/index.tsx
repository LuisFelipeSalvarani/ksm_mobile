import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Loading } from '@/components/loading'
import { Login } from '@/components/login'
import { useCheckAuthentication } from '@/http/endpoints/authentication/authentication'
import { useAuthStore } from '@/store/auth-store'
import { getHeaders } from '@/utils/get-headers'

export default function Index() {
  const [headers, setHeaders] = useState<HeadersInit>()
  const setUserData = useAuthStore(state => state.setUserData)

  const { isSuccess, isLoading } = useCheckAuthentication({
    fetch: {
      headers,
    },
    query: {
      enabled: !!headers,
    },
  })

  const onGetAuthorization = async () => {
    const authorization = await getHeaders()

    if (!authorization) {
      return
    }

    setHeaders({
      authorization,
    })
  }

  const setUserGlobalState = async () => {
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

      setUserData({
        ...user,
        headerToken: `Bearer ${token}`,
      })
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setUserGlobalState()
      router.replace('/home')
    }
  }, [isSuccess])

  useEffect(() => {
    onGetAuthorization()
  }, [])

  if (isLoading) return <Loading />

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>KSM</Text>
      <Login />
    </View>
  )
}
