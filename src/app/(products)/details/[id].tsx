import { useLocalSearchParams } from 'expo-router'
import { Loading } from '@/components/loading'
import { useProductDetailContaienr } from '@/hooks/use-product-detail-container'
import { UseDetailsScreen } from '@/screens/products/detail/use-detail-screen'

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { productInfos, priceData, buyers, isLoading } =
    useProductDetailContaienr(id)

  if (isLoading) return <Loading />

  return (
    <UseDetailsScreen
      productInfos={productInfos}
      priceData={priceData}
      mainBuyers={buyers}
    />
  )
}
