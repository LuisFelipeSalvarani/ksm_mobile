import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'
import { useGetTopSellingProducts } from '@/http/endpoints/products/products'
import { getCurrency, getDecimal, getHeaders } from '@/utils/utils'

export type TopProductsSellingData = {
  id: string
  description: string
  total: string
  quantity: string | undefined
}[]

const useTopProductsSellingContainer = () => {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [data, setData] = useState<TopProductsSellingData>()

  const {
    data: topSelling,
    isLoading,
    isSuccess,
  } = useGetTopSellingProducts({
    request: { headers },
    query: { enabled: !!headers },
  })

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) setHeaders({ authorization })
  }

  useEffect(() => {
    if (isSuccess && topSelling && topSelling !== 'null') {
      const mappedData = topSelling.topProducts.map(products => ({
        id: products.id,
        description: products.description,
        total: getCurrency(products.totalSalesValue),
        quantity: getDecimal(products.totalSelling),
      }))

      setData(mappedData)
    }
  }, [isSuccess, topSelling])

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  return { isLoading, data }
}

export { useTopProductsSellingContainer }
