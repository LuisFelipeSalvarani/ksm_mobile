import { IconUsers } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

type UseProbabilityItemProps = {
  description: string
  probability: number
}

const UseProbabilityItem = ({
  description,
  probability,
}: UseProbabilityItemProps) => {
  return (
    <View style={s.container}>
      <View style={s.icon}>
        <IconUsers size={28} color={colors.zinc[50]} />
      </View>

      <View style={s.infos}>
        <Text style={s.customer}>{description}</Text>

        <View style={s.probabilityWrapper}>
          <Text style={s.probabilityTitle}>Chance de comprar:</Text>
          <Text
            style={[
              s.probabilityValue,
              {
                color:
                  probability > 0.7
                    ? colors.green
                    : probability > 0.3
                      ? colors.yellow[600]
                      : colors.red,
              },
            ]}
          >
            {probability > 0.7 ? 'ALTA' : probability > 0.3 ? 'MÉDIA' : 'BAIXA'}
          </Text>
        </View>
      </View>
    </View>
  )
}

export { UseProbabilityItem }
