import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'
import { useGetSalesByDaysOfTheLastWeek } from '@/http/endpoints/sales/sales'
import { getHeaders } from '@/utils/utils'

const useCountLastSalesContainer = () => {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [data, setData] = useState<{ x: string; y: number }[]>()

  const {
    data: sales,
    isLoading,
    isSuccess,
  } = useGetSalesByDaysOfTheLastWeek({
    request: {
      headers,
    },
    query: {
      enabled: !!headers,
    },
  })

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) setHeaders({ authorization })
  }

  const mapData = async () => {
    if (isSuccess && sales && sales !== 'null') {
      const data = sales?.salesByDay.map(sale => ({
        x: sale.dayOfWeek.slice(0, 3),
        y: sale.salesCount,
      }))
      setData(data)
    }
  }

  useEffect(() => {
    if (isSuccess && sales && sales !== 'null') mapData()
  }, [isSuccess, sales])

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  return { data, isLoading }
}

export { useCountLastSalesContainer }
