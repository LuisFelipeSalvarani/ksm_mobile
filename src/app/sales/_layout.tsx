import { View } from 'react-native'
import { Header } from '@/components/header'
import { Tab, type TabsData } from '@/components/tab'

const tabs: TabsData[] = [
  {
    name: 'general',
    href: '/sales/general',
    label: 'Geral',
  },
  {
    name: 'groups',
    href: '/sales/groups',
    label: 'Grupos',
  },
]

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Vendas" />

      <Tab tabs={tabs} />
    </View>
  )
}
