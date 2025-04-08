import { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit'
import type { ProgressChartData } from 'react-native-chart-kit/dist/ProgressChart'

import { useGetSalesByProductGroup } from '@/http/endpoints/sales/sales'
import { getDecimal, getHeaders } from '@/utils/utils'
import { Loading } from '../loading'
import { Caption, type CaptionData } from './caption'
import { s } from './styles'

const colors = [
  '#FF9DA7',
  '#AF7AA1',
  '#EDC949',
  '#59A14F',
  '#76B7B2',
  '#E15759',
  '#F28E2B',
  '#4E79A7',
]

export function SalesByGroup() {
  const { width } = Dimensions.get('window')
  const [headers, setHeaders] = useState<HeadersInit>()
  const [data, setData] = useState<ProgressChartData>()
  const [captionData, setCaptionData] = useState<CaptionData[]>()

  const {
    data: sales,
    isLoading,
    isSuccess,
  } = useGetSalesByProductGroup({
    fetch: {
      headers,
    },
    query: {
      enabled: !!headers,
      refetchOnWindowFocus: 'always',
    },
  })

  const getAuthorization = async () => {
    const authorization = await getHeaders()

    if (authorization) {
      setHeaders({ authorization })
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
          color: colors[sales.sales.groupedSales.length - index - 1],
        } as CaptionData
      })

      setCaptionData(captionData)
    }
  }

  const mapData = async () => {
    if (sales && sales !== 'null') {
      const labels = sales?.sales.groupedSales
        .map(sale => sale.groupDescription)
        .reverse()
      const data = sales?.sales.groupedSales
        .map(sale => sale.totalGroupSales / sales.sales.total)
        .reverse()

      if (labels?.length && data?.length) {
        setData({
          labels,
          data,
          colors,
        })

        await mapCaptionData()
      }
    }
  }

  useEffect(() => {
    if (isSuccess && sales && sales !== 'null') mapData()
  }, [isSuccess, sales])

  useEffect(() => {
    getAuthorization()
  }, [])

  if (isLoading || !data || !sales || sales === 'null') return <Loading />

  return (
    <View style={s.container}>
      <Text style={s.title}>Vendas por grupo de produtos:</Text>

      <View style={s.chartWrapper}>
        <ProgressChart
          data={data}
          width={width * 0.8}
          height={300}
          strokeWidth={12}
          radius={36}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          hideLegend
          withCustomBarColorFromData
        />
      </View>

      <Text style={s.caption}>Total: {getDecimal(sales.sales.total)}</Text>

      {captionData ? <Caption data={captionData} /> : <Loading />}
    </View>
  )
}
