import { IconPackage } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'

import { colors } from '@/constants/theme'
import { getCurrency, getDate } from '@/utils/utils'
import { s } from './styles'

type LastSalesItemProps = {
  description: string
  companyName: string
  date: string
  total: string
  quantity: string
}

export function LastSalesItem({
  description,
  companyName,
  date,
  total,
  quantity,
}: LastSalesItemProps) {
  return (
    <View style={s.container}>
      <View style={s.icon}>
        <IconPackage size={28} color={colors.zinc[50]} />
      </View>

      <View style={s.infos}>
        <Text style={s.product}>{description}</Text>
        <Text numberOfLines={1} style={s.company}>
          {companyName}
        </Text>
        <Text style={s.date}>Data: {getDate(date)}</Text>
      </View>

      <View style={s.counts}>
        <Text style={s.total}>{getCurrency(total)}</Text>
        <Text style={s.quantity}>Qtd: {quantity}</Text>
      </View>
    </View>
  )
}
