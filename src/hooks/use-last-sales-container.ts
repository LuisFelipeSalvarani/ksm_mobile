import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'
import { useGetLastTenSales } from '@/http/endpoints/sales/sales'
import type { GetLastTenSales200LastSalesItem } from '@/http/models'
import { getHeaders } from '@/utils/utils'

const useLastSalesContainer = () => {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [data, setData] = useState<GetLastTenSales200LastSalesItem[]>([])

  const {
    data: sales,
    isLoading,
    isSuccess,
  } = useGetLastTenSales({
    request: {
      headers,
    },
    query: {
      enabled: !!headers,
    },
  })

  const getAuthorization = async () => {
    const authorization = await getHeaders()

    if (authorization) {
      setHeaders({ authorization })
    }
  }

  useEffect(() => {
    if (isSuccess && sales && sales !== 'null') {
      setData(sales.lastSales)
    }
  }, [isSuccess, sales])

  useEffect(() => {
    getAuthorization()
  }, [])

  return { data, isLoading }
}

export { useLastSalesContainer }
