import { ActivityIndicator } from 'react-native'
import { s } from './styles'

export function Loading() {
  return <ActivityIndicator color={'#000'} style={s.container} />
}
