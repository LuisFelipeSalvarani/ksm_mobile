import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { FlatList, Text, View } from 'react-native'
import { colors } from '@/constants/theme'
import { UseLastSalesItem } from '../../components/last-sales-item/use-last-sales-item'
import { s } from './styles'

type UseLastSalesProps = {
  lastSales: {
    productId: string
    productDescription: string
    quantity: string | undefined
    total: string
    date: string
  }[]
}

const UseLastSales = ({ lastSales }: UseLastSalesProps) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Últimas compras`:</Text>

      {lastSales.length ? (
        <FlatList
          data={lastSales}
          keyExtractor={item => item.productId}
          contentContainerStyle={s.list}
          renderItem={({ item }) => {
            return (
              <UseLastSalesItem
                description={item.productDescription}
                total={item.total}
                quantity={item.quantity || ''}
                date={item.date}
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

export { UseLastSales }
