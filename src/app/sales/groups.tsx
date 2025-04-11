import { Loading } from '@/components/loading'
import { useSalesByProductGroupContainer } from '@/hooks/use-sales-by-product-group-container'
import { UseSalesByProductGroupScreen } from '@/screens/sales/sales-by-product-group/use-sales-by-product-group-screen'

export default function Groups() {
  const { isLoading, data, captions, total } = useSalesByProductGroupContainer()

  if (isLoading || !data || !captions || !total) return <Loading />

  return (
    <UseSalesByProductGroupScreen
      salesByProductGroup={data}
      captions={captions}
      total={total}
    />
  )
}
