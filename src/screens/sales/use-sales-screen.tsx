import { View } from 'react-native'
import { Header } from '@/components/header'
import { Tab, type TabsData } from '@/components/tab'

type UseSalesScreenProps = {
  tabOptions: TabsData[]
}

const UseSalesScreen = ({ tabOptions }: UseSalesScreenProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Vendas" onBack={'/home'} />

      <Tab tabs={tabOptions} />
    </View>
  )
}

export { UseSalesScreen }
