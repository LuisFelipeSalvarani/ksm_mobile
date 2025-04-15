import { IconPackage } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

type UseTopSellingItemProps = {
  description: string
  total: string
  quantity: string
}

const UseTopSellingItem = ({
  description,
  total,
  quantity,
}: UseTopSellingItemProps) => {
  return (
    <View style={s.container}>
      <View style={s.icon}>
        <IconPackage size={28} color={colors.zinc[50]} />
      </View>

      <View style={s.infos}>
        <Text style={s.product}>{description}</Text>
      </View>

      <View style={s.counts}>
        <Text style={s.total}>{total}</Text>
        <Text style={s.quantity}>Qtd: {quantity}</Text>
      </View>
    </View>
  )
}

export { UseTopSellingItem }
