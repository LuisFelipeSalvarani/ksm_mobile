import {
  IconCalculator,
  IconClipboardList,
  IconPackages,
  IconShoppingCart,
  IconTrendingUp,
  IconUsers,
} from '@tabler/icons-react-native'
import { View } from 'react-native'
import { CountLastSales } from '@/components/count-last-sales'
import { LastSales } from '@/components/last-sales'
import { NavigationMenu } from '@/components/navigation-menu'
import { Welcome } from '@/components/welcome'

const buttons = [
  {
    icon: IconShoppingCart,
    label: 'Vendas',
  },
  {
    icon: IconUsers,
    label: 'Clientes',
  },
  {
    icon: IconPackages,
    label: 'Produtos',
  },
  {
    icon: IconCalculator,
    label: 'Calculadora',
  },
  {
    icon: IconClipboardList,
    label: 'Tarefas',
  },
  {
    icon: IconTrendingUp,
    label: 'Previsões',
  },
]

export default function Home() {
  return (
    <View style={{ flex: 1, gap: 4 }}>
      <Welcome />

      <NavigationMenu data={buttons} />

      <CountLastSales />

      <LastSales />
    </View>
  )
}
