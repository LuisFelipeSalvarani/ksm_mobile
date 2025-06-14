import { IconPackage } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

type UseLastSalesItemProps = {
  description: string
  total: string
  quantity: string
  date: string
}

const UseLastSalesItem = ({
  description,
  total,
  quantity,
  date,
}: UseLastSalesItemProps) => {
  return (
    <View style={s.container}>
      <View style={s.icon}>
        <IconPackage size={28} color={colors.zinc[50]} />
      </View>

      <View style={s.infos}>
        <Text style={s.customer}>{description}</Text>
        <Text style={s.date}>Data: {date}</Text>
      </View>

      <View style={s.counts}>
        <Text style={s.total}>{total}</Text>
        <Text style={s.quantity}>Qtd: {quantity}</Text>
      </View>
    </View>
  )
}

export { UseLastSalesItem }
