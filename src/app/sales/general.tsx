import { Loading } from '@/components/loading'
import { useCountLastSalesContainer } from '@/hooks/use-count-last-sales-container'
import { useLastSalesContainer } from '@/hooks/use-last-sales-container'
import { UseSalesGeneralScreen } from '@/screens/sales/use-sales-general-screen'

export default function General() {
  const { data: countLastSales, isLoading: isLoadingCountLastSales } =
    useCountLastSalesContainer()
  const { data: lastSales, isLoading: isLoadingLastSales } =
    useLastSalesContainer()

  if (
    isLoadingCountLastSales ||
    !countLastSales ||
    isLoadingLastSales ||
    !lastSales
  )
    return <Loading />

  return (
    <UseSalesGeneralScreen
      countLastSales={countLastSales}
      lastSales={lastSales}
    />
  )
}
