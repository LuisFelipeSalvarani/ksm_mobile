import { useState } from 'react'
import { Text, View } from 'react-native'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import {
  IconChevronRight,
  IconEye,
  IconEyeClosed,
  IconLockPassword,
  IconMail,
} from '@tabler/icons-react-native'

import { s } from './styles'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={s.container}>
      <View>
        <Text style={s.title}>Login</Text>
        <Text style={s.subtitle}>Entre com suas credenciais</Text>
      </View>

      <View style={s.inputWrapper}>
        <Input>
          <Input.Icon icon={IconMail} />
          <Input.Field placeholder="E-mail..." />
        </Input>

        <Input>
          <Input.Icon icon={IconLockPassword} />
          <Input.Field secureTextEntry={!showPassword} placeholder="Senha..." />
          <Input.Action
            icon={showPassword ? IconEye : IconEyeClosed}
            onPress={() => setShowPassword(!showPassword)}
          />
        </Input>
      </View>

      <Button>
        <Button.Text>Entrar</Button.Text>

        <Button.Icon icon={IconChevronRight} />
      </Button>
    </View>
  )
}
