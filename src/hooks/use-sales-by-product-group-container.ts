import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'

import { colors } from '@/constants/theme'
import { useGetSalesByProductGroup } from '@/http/endpoints/sales/sales'
import type { CaptionData } from '@/screens/sales/components/caption'
import { getDecimal, getHeaders } from '@/utils/utils'

const useSalesByProductGroupContainer = () => {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [data, setData] =
    useState<
      {
        label: string
        value: number
        color: string
      }[]
    >()
  const [captions, setCaptions] = useState<CaptionData[]>()
  const [total, setTotal] = useState<number>()

  const {
    data: sales,
    isLoading,
    isSuccess,
  } = useGetSalesByProductGroup({
    request: {
      headers,
    },
    query: {
      enabled: !!headers,
    },
  })

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) {
      setHeaders({
        Authorization: authorization,
      })
    }
  }

  const mapCaptionData = async () => {
    if (sales && sales !== 'null') {
      const captionData = sales.sales.groupedSales.map((sale, index) => {
        return {
          title: sale.groupDescription,
          percentage: Number(
            ((sale.totalGroupSales / sales.sales.total) * 100).toFixed(2)
          ),
          quantity: sale.totalGroupSales,
          count: sale.totalValueGroupSales,
          color: colors.chart[index],
        } as CaptionData
      })

      setCaptions(captionData)
    }
  }

  const mapData = async () => {
    if (sales && sales !== 'null') {
      const data = sales.sales.groupedSales.map((sale, i) => ({
        label: sale.groupDescription,
        value: sale.totalGroupSales,
        color: colors.chart[i],
      }))
      setData(data)
      setTotal(sales.sales.total)

      await mapCaptionData()
    }
  }

  useEffect(() => {
    if (isSuccess && sales && sales !== 'null') mapData()
  }, [isSuccess, sales])

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  return { isLoading, data, captions, total: getDecimal(total) }
}

export { useSalesByProductGroupContainer }
