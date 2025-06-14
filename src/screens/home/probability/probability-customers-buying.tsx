import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { FlatList, Text, View } from 'react-native'
import { colors } from '@/constants/theme'
import type { ProbabilityData } from '@/hooks/use-probability-customers-buying-container'
import { UseProbabilityItem } from '../components/probability-item/probability-item'
import { s } from './styles'

type UseProbabilityProps = {
  probabilityData: ProbabilityData[]
}

const UseProbability = ({ probabilityData }: UseProbabilityProps) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Clientes com chance de comprar hoje:</Text>

      {probabilityData.length ? (
        <FlatList
          data={probabilityData}
          keyExtractor={item => item.id.toString()}
          testID="probability"
          contentContainerStyle={s.list}
          renderItem={({ item }) => {
            return (
              <UseProbabilityItem
                description={item.customerName.toString()}
                probability={item.probability}
              />
            )
          }}
        />
      ) : (
        <View style={s.errorWrapper}>
          <IconAlertSquareRounded color={colors.zinc[700]} size={32} />
          <Text style={s.error}>Nenhum dado encontrado</Text>
        </View>
      )}
    </View>
  )
}

export { UseProbability }
