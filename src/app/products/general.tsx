import { Loading } from '@/components/loading'
import { useProductsGeneralContainer } from '@/hooks/use-products-general-container'
import { useTopProductsSellingContainer } from '@/hooks/use-top-products-selling-container'
import { UseProductsGeneralScreen } from '@/screens/products/general/use-products-general-screen'

export default function General() {
  const {
    isLoading: isLoadingProductsGeneral,
    countData,
    distinctData,
    comparativeData,
    maxValue,
    minValue,
  } = useProductsGeneralContainer()

  const { data: topSelling, isLoading: isLoadingTopProductsSelling } =
    useTopProductsSellingContainer()

  if (
    isLoadingProductsGeneral ||
    isLoadingTopProductsSelling ||
    !countData.length ||
    !distinctData.length ||
    !comparativeData.length ||
    !topSelling?.length
  )
    return <Loading />

  return (
    <UseProductsGeneralScreen
      countData={countData}
      distinctData={distinctData}
      comparativeData={comparativeData}
      maxValue={maxValue}
      minValue={minValue}
      topSelling={topSelling}
    />
  )
}
