import { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import type { ChartData } from 'react-native-chart-kit/dist/HelperTypes'
import { useGetSalesByDaysOfTheLastWeek } from '@/http/endpoints/sales/sales'
import { colors } from '@/styles/theme'
import { getHeaders } from '@/utils/get-headers'
import { Loading } from '../loading'
import { s } from './styles'

// const data = {
//   labels: ['Qua', 'Qui', 'Sex', 'Seg', 'Ter', 'Qua', 'Qui'],
//   datasets: [
//     {
//       data: [5, 15, 2, 5, 6, 10, 12],
//     },
//   ],
// }

export function CountLastSales() {
  const screenWidth = Dimensions.get('window').width
  const [headers, setHeaders] = useState<HeadersInit>()
  const [data, setData] = useState<ChartData>()

  const {
    data: sales,
    isLoading,
    isSuccess,
  } = useGetSalesByDaysOfTheLastWeek({
    fetch: {
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

  const mapData = async () => {
    const labels = sales?.salesByDay.map(sale => sale.dayOfWeek.slice(0, 3))
    const datasets = sales?.salesByDay.map(sale => sale.salesCount)

    if (labels?.length && datasets?.length) {
      setData({
        labels,
        datasets: [
          {
            data: datasets,
          },
        ],
      })
    }
  }

  useEffect(() => {
    if (isSuccess && sales.salesByDay) mapData()
  }, [isSuccess, sales?.salesByDay])

  useEffect(() => {
    getAuthorization()
  }, [])

  if (isLoading || !data) return <Loading />

  return (
    <View style={s.container}>
      <Text style={s.title}>Geral:</Text>
      <View style={s.card}>
        <Text style={s.titleChart}>Total de vendas dos últimos 7 dias</Text>
        <BarChart
          data={data}
          height={200}
          width={screenWidth * 0.8}
          yAxisLabel=""
          yAxisSuffix=""
          fromZero
          showValuesOnTopOfBars
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            barPercentage: 0.7,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>
    </View>
  )
}
