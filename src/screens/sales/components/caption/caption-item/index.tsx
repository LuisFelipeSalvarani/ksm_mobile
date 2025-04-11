import { IconCircle } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'

import { colors } from '@/constants/theme'
import { getCurrency, getDecimal } from '@/utils/utils'
import { s } from './styles'

type CaptionItemProps = {
  color: string
  percentage: number
  title: string
  count: number
  quantity: number
}

export function CaptionItem({
  color,
  percentage,
  title,
  count,
  quantity,
}: CaptionItemProps) {
  return (
    <View style={s.container}>
      <View style={s.percentageWrapper}>
        <IconCircle size={72} fill={color} color={colors.zinc[300]} />
        <Text style={s.percentage}>{percentage}%</Text>
      </View>

      <View style={s.infos}>
        <Text style={s.title}>{title}</Text>
        <View>
          <Text style={s.caption}>
            Total: <Text style={s.number}>{getCurrency(count)}</Text>
          </Text>
          <Text style={s.caption}>
            Quantidade: <Text style={s.number}>{getDecimal(quantity)}</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}
