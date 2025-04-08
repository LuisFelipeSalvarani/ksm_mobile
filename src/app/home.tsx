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
import {
  NavigationMenu,
  type NavigationMenuData,
} from '@/components/navigation-menu'
import { Welcome } from '@/components/welcome'

const menu: NavigationMenuData = [
  {
    icon: IconShoppingCart,
    label: 'Vendas',
    href: '/sales/general',
  },
  {
    icon: IconUsers,
    label: 'Clientes',
    href: '/',
  },
  {
    icon: IconPackages,
    label: 'Produtos',
    href: '/',
  },
  {
    icon: IconCalculator,
    label: 'Calculadora',
    href: '/',
  },
  {
    icon: IconClipboardList,
    label: 'Tarefas',
    href: '/',
  },
  {
    icon: IconTrendingUp,
    label: 'Previsões',
    href: '/',
  },
]

export default function Home() {
  return (
    <View style={{ flex: 1, gap: 4 }}>
      <Welcome />

      <NavigationMenu data={menu} />

      <CountLastSales />

      <LastSales />
    </View>
  )
}
