import { productsTabs } from '@/constants/tabs-options'
import { UseProductsScreen } from '@/screens/products/use-products-screen'

export default function Layout() {
  return <UseProductsScreen tabOptions={productsTabs} />
}
