import { salesTabs } from '@/constants/tabs-options'
import { UseSalesScreen } from '@/screens/sales/use-sales-screen'

export default function Layout() {
  return <UseSalesScreen tabOptions={salesTabs} />
}
