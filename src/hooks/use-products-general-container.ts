import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'
import { useGetTotalDistinctProductsSoldByDayOfTheLastWeekRoute } from '@/http/endpoints/products/products'
import { getHeaders } from '@/utils/utils'

type DataType = {
  x: string
  y: number
  z: number
}

const useProductsGeneralContainer = () => {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [maxValue, setMaxValue] = useState(0)
  const [minValue, setMinValue] = useState(0)
  const [countData, setCountData] = useState<DataType[]>([])
  const [distinctData, setDistinctData] = useState<DataType[]>([])
  const [comparativeData, setComparativeData] = useState<DataType[]>([])

  const {
    data: sales,
    isLoading,
    isSuccess,
  } = useGetTotalDistinctProductsSoldByDayOfTheLastWeekRoute({
    request: { headers },
    query: { enabled: !!headers },
  })

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) setHeaders({ authorization })
  }

  const mapData = async () => {
    if (isSuccess && sales && sales !== 'null') {
      const labels = sales?.salesByDay.map(sale => sale.dayOfWeek.slice(0, 3))

      const max = Math.max(...sales.salesByDay.map(sale => sale.productsCount))
      setMaxValue(max)

      const min = Math.min(
        ...sales.salesByDay.map(sale => sale.productsDistinctCount)
      )
      setMinValue(min)

      const count = sales?.salesByDay.map((sale, i) => ({
        x: labels[i],
        y: sale.productsCount,
        z: min < 30 ? min : 30,
      }))
      setCountData(count)

      const distinct = sales?.salesByDay.map((sale, i) => ({
        x: labels[i],
        y: sale.productsDistinctCount,
        z: min < 30 ? min : 30,
      }))
      setDistinctData(distinct)

      const comparative = sales?.salesByDay.map((sale, i) => ({
        x: labels[i],
        y: sale.productsCount,
        z: sale.productsDistinctCount,
      }))
      setComparativeData(comparative)
    }
  }

  useEffect(() => {
    if (isSuccess && sales && sales !== 'null') mapData()
  }, [isSuccess, sales])

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  return {
    isLoading,
    maxValue,
    minValue,
    countData,
    distinctData,
    comparativeData,
  }
}

export { useProductsGeneralContainer }
