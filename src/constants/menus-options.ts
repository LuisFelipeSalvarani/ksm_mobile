import {
  IconCalculator,
  IconClipboardList,
  IconPackages,
  IconShoppingCart,
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
    href: '/customers/list',
  },
  {
    icon: IconPackages,
    label: 'Produtos',
    href: '/products/general',
  },
  {
    icon: IconCalculator,
    label: 'Calculadora',
    href: '/calculator',
  },
  {
    icon: IconClipboardList,
    label: 'Tarefas',
    href: '/tasks',
  },
]

export { homeMenu }
