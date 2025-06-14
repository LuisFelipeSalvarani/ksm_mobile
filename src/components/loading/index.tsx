import { ActivityIndicator, type ColorValue } from 'react-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

interface LoadingProps {
  color?: ColorValue
}

export function Loading({ color }: LoadingProps) {
  return (
    <ActivityIndicator
      color={color ? color : colors.blue[800]}
      style={s.container}
    />
  )
}
