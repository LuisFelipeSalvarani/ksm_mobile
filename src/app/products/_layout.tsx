import { View } from 'react-native'
import { Header } from '@/components/header'
import { Tab, type TabsData } from '@/components/tab'

const tabs: TabsData[] = [
  {
    name: 'general',
    href: '/products/general',
    label: 'Geral',
  },
]

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Produtos" />

      <Tab tabs={tabs} />
    </View>
  )
}
