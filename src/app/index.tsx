import { IconCheck } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>KSM</Text>
      <IconCheck size={32} color={'#000'} />
    </View>
  )
}
