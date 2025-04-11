import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { DashPathEffect, useFont } from '@shopify/react-native-skia'
import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { BarGroup, CartesianChart } from 'victory-native'

import { useGetTotalDistinctProductsSoldByDayOfTheLastWeekRoute } from '@/http/endpoints/products/products'
import { colors } from '@/styles/colors'
import { getHeaders } from '@/utils/utils'
import { GroupButton } from '../group-button'
import { Loading } from '../loading'
import { s } from './styles'

export function CountLastProduct() {
  const { width } = Dimensions.get('window')
  const font = useFont(Poppins_500Medium)

  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [option, setOption] = useState<'count' | 'distinct' | 'comparative'>(
    'count'
  )

  const [labels, setLabels] = useState<string[]>([])
  const [maxValue, setMaxValue] = useState(0)
  const [minValue, setMinValue] = useState(0)
  const [countData, setCountData] = useState<
    { x: string; y: number; z: number }[]
  >([])
  const [distinctData, setDistinctData] = useState<
    { x: string; y: number; z: number }[]
  >([])
  const [stackData, setStackData] = useState<
    { x: string; y: number; z: number }[]
  >([])

  const {
    data: sales,
    isLoading,
    isSuccess,
  } = useGetTotalDistinctProductsSoldByDayOfTheLastWeekRoute({
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
      const labels = sales?.salesByDay.map(sale => sale.dayOfWeek.slice(0, 3))
      setLabels(labels)

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
      setStackData(comparative)
    }
  }

  useEffect(() => {
    if (isSuccess && sales && sales !== 'null') mapData()
  }, [isSuccess, sales])

  useEffect(() => {
    getAuthorization()
  }, [])

  if (
    isLoading ||
    !labels.length ||
    !countData.length ||
    !distinctData.length ||
    !stackData.length
  )
    return <Loading />

  return (
    <View style={s.container}>
      <Text style={s.title}>Vendas:</Text>

      <View style={s.card}>
        <Text style={s.titleChart}>
          {option === 'count'
            ? 'Total de produtos dos últimos 7 dias'
            : option === 'distinct'
              ? 'Total de produtos distintos dos últimos 7 dias'
              : 'Comparativo dos últimos 7 dias'}
        </Text>

        <View style={{ width: width * 0.8, height: 220 }}>
          <CartesianChart
            data={
              option === 'count'
                ? countData
                : option === 'distinct'
                  ? distinctData
                  : stackData
            }
            xKey="x"
            yKeys={['y', 'z']}
            domainPadding={32}
            domain={{
              y: [minValue, maxValue],
            }}
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
              <BarGroup
                barWidth={16}
                roundedCorners={{
                  topLeft: 6,
                  topRight: 6,
                }}
                chartBounds={chartBounds}
                betweenGroupPadding={0.3}
                withinGroupPadding={0.2}
              >
                <BarGroup.Bar
                  points={points.y}
                  color={colors.blue[600]}
                  animate={{
                    type: 'spring',
                  }}
                />
                <BarGroup.Bar
                  points={points.z}
                  color={
                    option === 'comparative' ? colors.blue[400] : 'transparent'
                  }
                  animate={{
                    type: 'spring',
                  }}
                />
              </BarGroup>
            )}
          </CartesianChart>
        </View>
      </View>

      <View style={s.groupButton}>
        <GroupButton value={option} onChange={setOption}>
          <GroupButton.Trigger value="count">Total</GroupButton.Trigger>
          <GroupButton.Trigger value="distinct">Distintos</GroupButton.Trigger>
          <GroupButton.Trigger value="comparative">
            Comparativo
          </GroupButton.Trigger>
        </GroupButton>
      </View>
    </View>
  )
}
