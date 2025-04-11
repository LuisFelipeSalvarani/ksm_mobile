import { Loading } from '@/components/loading'
import { useProductsGeneralContainer } from '@/hooks/use-products-general-container'
import { UseProductsGeneralScreen } from '@/screens/products/general/use-products-general-screen'

export default function General() {
  const {
    isLoading,
    countData,
    distinctData,
    comparativeData,
    maxValue,
    minValue,
  } = useProductsGeneralContainer()

  if (
    isLoading ||
    !countData.length ||
    !distinctData.length ||
    !comparativeData.length
  )
    return <Loading />

  return (
    <UseProductsGeneralScreen
      countData={countData}
      distinctData={distinctData}
      comparativeData={comparativeData}
      maxValue={maxValue}
      minValue={minValue}
    />
  )
}
