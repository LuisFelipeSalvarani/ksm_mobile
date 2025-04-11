/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import { FlatList, Text, View } from 'react-native'
import { LastSalesItem } from './last-sales-item'
import { s } from './styles'

type UseLastSalesScreenProps = {
  lastSales: ArrayLike<any> | null | undefined
}

const UseLastSalesScreen = ({ lastSales }: UseLastSalesScreenProps) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Últimas vendas:</Text>

      <FlatList
        data={lastSales}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={s.list}
        renderItem={({ item }) => {
          return (
            <LastSalesItem
              description={item.description}
              companyName={item.companyName}
              date={item.issueDate}
              total={item.total}
              quantity={item.quantity}
            />
          )
        }}
      />
    </View>
  )
}

export { UseLastSalesScreen, type UseLastSalesScreenProps }
