import type { TabsData } from '@/components/tab'

const salesTabs: TabsData[] = [
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

const productsTabs: TabsData[] = [
  {
    name: 'general',
    href: '/products/general',
    label: 'Geral',
  },
  {
    name: 'list',
    href: '/products/list',
    label: 'Produtos',
  },
]

export { salesTabs, productsTabs }
