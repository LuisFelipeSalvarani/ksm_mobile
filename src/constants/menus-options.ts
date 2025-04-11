import {
  IconCalculator,
  IconClipboardList,
  IconPackages,
  IconShoppingCart,
  IconTrendingUp,
  IconUsers,
} from '@tabler/icons-react-native'
import type { NavigationMenuData } from '@/components/navigation-menu'

const homeMenu: NavigationMenuData = [
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
    href: '/products/general',
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

export { homeMenu }
