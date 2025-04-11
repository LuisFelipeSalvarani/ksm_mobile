import { View } from 'react-native'
import { Header } from '@/components/header'
import { Tab, type TabsData } from '@/components/tab'

type UseProductsScreenProps = {
  tabOptions: TabsData[]
}

const UseProductsScreen = ({ tabOptions }: UseProductsScreenProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Produtos" />

      <Tab tabs={tabOptions} />
    </View>
  )
}

export { UseProductsScreen }
