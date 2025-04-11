import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  IconChevronRight,
  IconEye,
  IconEyeClosed,
  IconLockPassword,
  IconMail,
} from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import { Text, View } from 'react-native'

import { Button } from '@/components/button'
import { Input } from '@/components/input'

import { useLogin } from '@/http/endpoints/authentication/authentication'
import { useAuthStore } from '@/store/auth-store'

import { s } from './styles'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const setUserData = useAuthStore(state => state.setUserData)
  const { mutateAsync } = useLogin()

  const onSubmit = async () => {
    const { user, token } = await mutateAsync({
      data: {
        email,
        password,
      },
    })

    await AsyncStorage.setItem('token', token)
    await AsyncStorage.setItem('user', JSON.stringify(user))

    setUserData({ ...user, headerToken: `Bearer ${token}` })

    router.replace('/home')
  }

  return (
    <View style={s.container}>
      <View>
        <Text style={s.title}>Login</Text>
        <Text style={s.subtitle}>Entre com suas credenciais</Text>
      </View>

      <View style={s.inputWrapper}>
        <Input>
          <Input.Icon icon={IconMail} />
          <Input.Field placeholder="E-mail..." onChangeText={setEmail} />
        </Input>

        <Input>
          <Input.Icon icon={IconLockPassword} />
          <Input.Field
            secureTextEntry={!showPassword}
            placeholder="Senha..."
            onChangeText={setPassword}
          />
          <Input.Action
            icon={showPassword ? IconEye : IconEyeClosed}
            onPress={() => setShowPassword(!showPassword)}
          />
        </Input>
      </View>

      <Button onPress={onSubmit}>
        <Button.Text>Entrar</Button.Text>

        <Button.Icon icon={IconChevronRight} />
      </Button>
    </View>
  )
}
