import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { useGetCustomerById } from '@/http/endpoints/customers/customers'
import { getCurrency, getDate, getDecimal, getHeaders } from '@/utils/utils'

function useCustomerDetailsContainer(id: number) {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()

  const { data, isLoading } = useGetCustomerById(id, {
    request: { headers },
    query: { enabled: !!id && !!headers },
  })

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) setHeaders({ authorization })
  }

  const customerInfos = useMemo(() => data?.customer, [data?.customer])
  const lastSales = useMemo(
    () =>
      data?.lastSales.map(sale => ({
        productId: sale.productId,
        productDescription: sale.productDescription,
        quantity: getDecimal(sale.quantity),
        total: getCurrency(sale.total),
        date: getDate(sale.date),
      })),
    [data?.lastSales]
  )
  const totalPurchase = useMemo(
    () =>
      data?.totalPurchasePerMonth.map(month => ({
        x: `${month.month}/${month.year}`,
        y: month.totalPuchases,
      })),
    [data?.totalPurchasePerMonth]
  )
  const totalQuantity = useMemo(
    () =>
      data?.totalPurchasePerMonth.map(month => ({
        x: `${month.month}/${month.year}`,
        y: month.totalQuantity,
        z: month.totalPuchases,
      })),
    [data?.totalPurchasePerMonth]
  )
  const chartData = useMemo(
    () => ({
      totalPurchase,
      totalQuantity,
    }),
    [totalPurchase, totalQuantity]
  )

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  return { customerInfos, lastSales, chartData, isLoading }
}

export { useCustomerDetailsContainer }
