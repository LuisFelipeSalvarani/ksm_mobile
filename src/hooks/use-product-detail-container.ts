import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { useGetProductById } from '@/http/endpoints/products/products'
import { getCurrency, getDecimal, getHeaders } from '@/utils/utils'

function useProductDetailContaienr(id: string) {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()

  const { data, isLoading, isError } = useGetProductById(id, {
    request: { headers },
    query: { enabled: !!headers && !!id },
  })

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) {
      setHeaders({ authorization })
    }
  }

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  const productInfos = useMemo(
    () => ({
      id: data?.product.id,
      description: data?.product.description,
      group: data?.product.groupDescription,
    }),
    [data?.product]
  )
  const priceData = useMemo(
    () => data?.product.priceVariation.map(p => ({ x: p.month, y: p.average })),
    [data?.product]
  )
  const buyers = useMemo(
    () =>
      data?.product.mainBuyers.map(buyer => ({
        name: buyer.customer,
        total: getCurrency(buyer.totalPurchases),
        quantity: getDecimal(buyer.totalPurchases),
      })),
    [data?.product]
  )

  return { isLoading, productInfos, priceData, buyers }
}

export { useProductDetailContaienr }
