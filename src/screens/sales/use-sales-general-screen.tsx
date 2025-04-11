import { View } from 'react-native'
import {
  UseCountLastSalesScreen,
  type UseCountLastSalesScreenProps,
} from './components/count-last-sales/use-count-last-sales-screen'
import {
  UseLastSalesScreen,
  type UseLastSalesScreenProps,
} from './components/last-sales/use-last-sales-screen'

type UseSalesGeneralScreenProps = UseCountLastSalesScreenProps &
  UseLastSalesScreenProps & {}

const UseSalesGeneralScreen = ({
  countLastSales,
  lastSales,
}: UseSalesGeneralScreenProps) => {
  return (
    <View style={{ flex: 1 }}>
      <UseCountLastSalesScreen countLastSales={countLastSales} />

      <UseLastSalesScreen lastSales={lastSales} />
    </View>
  )
}

export { UseSalesGeneralScreen }
