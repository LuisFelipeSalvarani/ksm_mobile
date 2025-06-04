import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { useGetCustomerById } from '@/http/endpoints/customers/customers'
<<<<<<< HEAD
<<<<<<< HEAD
import { getHeaders } from '@/utils/utils'
=======
import { getCurrency, getDate, getDecimal, getHeaders } from '@/utils/utils'
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
import { getCurrency, getDate, getDecimal, getHeaders } from '@/utils/utils'
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d

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
<<<<<<< HEAD
<<<<<<< HEAD
  const lastSales = useMemo(() => data?.lastSales, [data?.lastSales])
  const totalPurchasePerMonth = useMemo(
=======
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
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
<<<<<<< HEAD
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
    () =>
      data?.totalPurchasePerMonth.map(month => ({
        x: `${month.month}/${month.year}`,
        y: month.totalQuantity,
<<<<<<< HEAD
<<<<<<< HEAD
        z: month.totalPuchases,
      })),
    [data?.totalPurchasePerMonth]
  )
=======
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
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
<<<<<<< HEAD
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

<<<<<<< HEAD
<<<<<<< HEAD
  return { customerInfos, lastSales, totalPurchasePerMonth, isLoading }
=======
  return { customerInfos, lastSales, chartData, isLoading }
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
  return { customerInfos, lastSales, chartData, isLoading }
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
}

export { useCustomerDetailsContainer }
