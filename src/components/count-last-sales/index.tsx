import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { DashPathEffect, useFont } from '@shopify/react-native-skia'
import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Bar, CartesianChart } from 'victory-native'

import { useGetSalesByDaysOfTheLastWeek } from '@/http/endpoints/sales/sales'
import { colors } from '@/styles/theme'
import { getHeaders } from '@/utils/utils'
import { Loading } from '../loading'
import { s } from './styles'

export function CountLastSales() {
  const { width } = Dimensions.get('window')
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [data, setData] = useState<{ x: string; y: number }[]>()
  const font = useFont(Poppins_500Medium)

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

  const getAuthorization = async () => {
    const authorization = await getHeaders()

    if (authorization) {
      setHeaders({ authorization })
    }
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
    getAuthorization()
  }, [])

  if (isLoading || !data || !sales || sales === 'null') return <Loading />

  return (
    <View style={s.container}>
      <Text style={s.title}>Geral:</Text>
      <View style={s.card}>
        <Text style={s.titleChart}>Total de vendas dos últimos 7 dias</Text>
        <View style={{ width: width * 0.8, height: 200 }}>
          <CartesianChart
            data={data}
            xKey="x"
            yKeys={['y']}
            domainPadding={32}
            xAxis={{ font, lineWidth: 0 }}
            yAxis={[
              {
                font,
                lineColor: colors.zinc[500],
                linePathEffect: <DashPathEffect intervals={[8, 6]} />,
              },
            ]}
          >
            {({ points, chartBounds }) => (
              <Bar
                points={points.y}
                chartBounds={chartBounds}
                barWidth={24}
                labels={{
                  position: 'top',
                  font,
                }}
                color={colors.blue[600]}
                roundedCorners={{ topLeft: 8, topRight: 8 }}
                animate={{
                  type: 'spring',
                }}
              />
            )}
          </CartesianChart>
        </View>
        {/* <BarChart
          data={data}
          height={200}
          width={width * 0.8}
          yAxisLabel=""
          yAxisSuffix=""
          fromZero
          showValuesOnTopOfBars
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            barPercentage: 0.7,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            color: (opacity = 1) => `rgba(0, 29, 155, ${opacity})`,
          }}
        /> */}
      </View>
    </View>
  )
}
