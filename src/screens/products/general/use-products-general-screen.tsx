import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { DashPathEffect, useFont } from '@shopify/react-native-skia'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { BarGroup, CartesianChart } from 'victory-native'

import { GroupButton } from '@/components/group-button'
import { colors } from '@/constants/theme'
import type { TopProductsSellingData } from '@/hooks/use-top-products-selling-container'
import { s } from './styles'
import { UseTopProductsSelling } from './top-products-selling/use-top-products-selling'

type UseProductsGeneralScreenProps = {
  countData: ChartData[]
  distinctData: ChartData[]
  comparativeData: ChartData[]
  minValue: number
  maxValue: number
  topSelling: TopProductsSellingData
}

type ChartData = {
  x: string
  y: number
  z: number
}

const UseProductsGeneralScreen = ({
  countData,
  distinctData,
  comparativeData,
  maxValue,
  minValue,
  topSelling,
}: UseProductsGeneralScreenProps) => {
  const [option, setOption] = useState<'count' | 'distinct' | 'comparative'>(
    'count'
  )
  const font = useFont(Poppins_500Medium)

  return (
    <View style={s.container}>
      <View style={s.chartContainer}>
        <Text style={s.title}>Vendas:</Text>

        <View style={s.card}>
          <Text style={s.titleChart}>
            {option === 'count'
              ? 'Total de produtos dos últimos 7 dias'
              : option === 'distinct'
                ? 'Total de produtos distintos dos últimos 7 dias'
                : 'Comparativo dos últimos 7 dias'}
          </Text>

          <View style={s.chart}>
            <CartesianChart
              data={
                option === 'count'
                  ? countData
                  : option === 'distinct'
                    ? distinctData
                    : comparativeData
              }
              xKey="x"
              yKeys={['y', 'z']}
              domainPadding={32}
              domain={{ y: [minValue, maxValue] }}
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
                  roundedCorners={{ topLeft: 6, topRight: 6 }}
                  chartBounds={chartBounds}
                  betweenGroupPadding={0.3}
                  withinGroupPadding={0.2}
                >
                  <BarGroup.Bar
                    points={points.y}
                    color={colors.blue[600]}
                    animate={{ type: 'spring' }}
                  />
                  <BarGroup.Bar
                    points={points.z}
                    color={
                      option === 'comparative'
                        ? colors.blue[400]
                        : 'transparent'
                    }
                    animate={{ type: 'spring' }}
                  />
                </BarGroup>
              )}
            </CartesianChart>
          </View>
        </View>

        <View style={s.groupButton}>
          <GroupButton value={option} onChange={setOption}>
            <GroupButton.Trigger value="count">Total</GroupButton.Trigger>
            <GroupButton.Trigger value="distinct">
              Distintos
            </GroupButton.Trigger>
            <GroupButton.Trigger value="comparative">
              Comparativo
            </GroupButton.Trigger>
          </GroupButton>
        </View>
      </View>

      <UseTopProductsSelling topSelling={topSelling} />
    </View>
  )
}

export { UseProductsGeneralScreen }
