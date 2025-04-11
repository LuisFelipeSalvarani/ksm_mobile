import { ActivityIndicator } from 'react-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

export function Loading() {
  return <ActivityIndicator color={colors.blue[800]} style={s.container} />
}
