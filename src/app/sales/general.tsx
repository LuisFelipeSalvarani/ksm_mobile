import { View } from 'react-native'
import { CountLastSales } from '@/components/count-last-sales'
import { LastSales } from '@/components/last-sales'

export default function General() {
  return (
    <View style={{ flex: 1 }}>
      <CountLastSales />

      <LastSales />
    </View>
  )
}
