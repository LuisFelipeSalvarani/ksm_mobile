import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { FlatList, Text, View } from 'react-native'
import { colors } from '@/constants/theme'
import { UseTopSellingItem } from '../../components/top-selling-item/use-top-selling'
import type { Buyer } from '../use-detail-screen'
import { s } from './styles'

type TopBuyersProps = {
  topBuyers: Buyer[]
}

const UseTopBuyers = ({ topBuyers }: TopBuyersProps) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Principais compradores:</Text>

      {topBuyers.length ? (
        <FlatList
          data={topBuyers}
          keyExtractor={item => item.name}
          contentContainerStyle={s.list}
          renderItem={({ item }) => {
            return (
              <UseTopSellingItem
                description={item.name}
                total={item.total}
                quantity={item.quantity || ''}
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

export { UseTopBuyers }
