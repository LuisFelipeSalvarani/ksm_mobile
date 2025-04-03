import { Text, View } from 'react-native'
import { useAuthStore } from '@/store/auth-store'

export default function Home() {
  const { name, tradeName, role } = useAuthStore(state => state)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Text>{name}</Text>
      <Text>{tradeName}</Text>
      <Text>{role}</Text>
    </View>
  )
}
