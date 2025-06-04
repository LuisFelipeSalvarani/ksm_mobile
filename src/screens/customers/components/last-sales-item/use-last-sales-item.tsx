import { IconPackage } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

type UseLastSalesItemProps = {
  description: string
  total: string
  quantity: string
<<<<<<< HEAD
=======
  date: string
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
}

const UseLastSalesItem = ({
  description,
  total,
  quantity,
<<<<<<< HEAD
=======
  date,
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
}: UseLastSalesItemProps) => {
  return (
    <View style={s.container}>
      <View style={s.icon}>
        <IconPackage size={28} color={colors.zinc[50]} />
      </View>

      <View style={s.infos}>
<<<<<<< HEAD
        <Text style={s.product}>{description}</Text>
=======
        <Text style={s.customer}>{description}</Text>
        <Text style={s.date}>Data: {date}</Text>
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
      </View>

      <View style={s.counts}>
        <Text style={s.total}>{total}</Text>
        <Text style={s.quantity}>Qtd: {quantity}</Text>
      </View>
    </View>
  )
}

export { UseLastSalesItem }
