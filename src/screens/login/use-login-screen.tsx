import {
  IconChevronRight,
  IconEye,
  IconEyeClosed,
  IconLockPassword,
  IconMail,
} from '@tabler/icons-react-native'
import { useState } from 'react'
import { Image, Text, View } from 'react-native'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Loading } from '@/components/loading'
import { colors } from '@/constants/theme'
import type { OnSubmitLoginType } from '@/hooks/use-login-container'
import { s } from './styles'

type UseLoginScreenProps = {
  onSubmit: ({ email, password }: OnSubmitLoginType) => void
  isLoading: boolean
}

export function UseLoginScreen({ onSubmit, isLoading }: UseLoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={s.container}>
      <Image
        source={require('@/assets/kodiak_logo.png')}
        style={{
          width: 350,
          height: 350,
          marginTop: 64,
          marginRight: 24,
          marginBottom: -100,
        }}
      />

      <View style={s.loginWrapper}>
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

        <Button
          onPress={() => onSubmit({ email, password })}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loading color={colors.zinc[100]} />
          ) : (
            <>
              <Button.Text>Entrar</Button.Text>

              <Button.Icon icon={IconChevronRight} />
            </>
          )}
        </Button>
      </View>
    </View>
  )
}
