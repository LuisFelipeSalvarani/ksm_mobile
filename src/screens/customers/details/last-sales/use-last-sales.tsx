import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { FlatList, Text, View } from 'react-native'
import { colors } from '@/constants/theme'
import type { GetCustomerById200LastSalesItem } from '@/http/models'
import { UseLastSalesItem } from '../../components/last-sales-item/use-last-sales-item'
import { s } from './styles'

type UseLastSalesProps = {
<<<<<<< HEAD
<<<<<<< HEAD
  topBuyers: GetCustomerById200LastSalesItem[]
}

const UseLastSales = ({ topBuyers }: UseLastSalesProps) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Principais compradores:</Text>

      {topBuyers.length ? (
        <FlatList
          data={topBuyers}
          keyExtractor={item => item.productid}
=======
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
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
<<<<<<< HEAD
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
          contentContainerStyle={s.list}
          renderItem={({ item }) => {
            return (
              <UseLastSalesItem
                description={item.productDescription}
<<<<<<< HEAD
<<<<<<< HEAD
                total={item.total.toString()}
                quantity={item.quantity.toString() || ''}
=======
                total={item.total}
                quantity={item.quantity || ''}
                date={item.date}
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
                total={item.total}
                quantity={item.quantity || ''}
                date={item.date}
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
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

<<<<<<< HEAD
<<<<<<< HEAD
export type { UseLastSales }
=======
export { UseLastSales }
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
export { UseLastSales }
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
