import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { DashPathEffect, useFont } from '@shopify/react-native-skia'
import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { Bar, BarGroup, CartesianChart, Line } from 'victory-native'
import { GroupButton } from '@/components/group-button'
import { colors } from '@/constants/theme'
import { getCurrency } from '@/utils/currency-formater'
import { s } from './styles'

interface UsePurchasePerMonthProps {
  chartData: {
    totalPurchase:
      | {
          x: string
          y: number
        }[]
      | undefined
    totalQuantity:
      | {
          x: string
          y: number
        }[]
      | undefined
  }
}

function UsePurchasePerMonth({ chartData }: UsePurchasePerMonthProps) {
  const [option, setOption] = useState<'count' | 'quantity'>('count')
  const font = useFont(Poppins_500Medium)

  return (
    <View style={s.container}>
      <View style={s.chartContainer}>
        <Text style={s.title}>Compras dos últimos meses (6 meses):</Text>

        <View style={s.card}>
          {chartData?.totalPurchase && chartData?.totalQuantity ? (
            <View style={s.chart}>
              <CartesianChart
                data={
                  option === 'count'
                    ? chartData.totalPurchase
                    : chartData.totalQuantity
                }
                xKey="x"
                yKeys={['y']}
                domainPadding={64}
                xAxis={{
                  font,
                  lineWidth: 0,
                  tickCount:
                    option === 'count'
                      ? chartData.totalPurchase.length
                      : chartData.totalQuantity.length,
                }}
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
                    labels={{ position: 'top', font }}
                    color={colors.blue[600]}
                    roundedCorners={{ topLeft: 8, topRight: 8 }}
                    animate={{ type: 'spring' }}
                    barCount={
                      option === 'count'
                        ? chartData.totalPurchase?.length
                        : chartData.totalQuantity?.length
                    }
                  />
                )}
              </CartesianChart>
            </View>
          ) : (
            <View style={s.errorWrapper}>
              <IconAlertSquareRounded color={colors.zinc[700]} size={32} />
              <Text style={s.error}>Nenhum dado encontrado</Text>
            </View>
          )}
        </View>

        <View style={s.groupButton}>
          <GroupButton value={option} onChange={setOption}>
            <GroupButton.Trigger value="count">Total</GroupButton.Trigger>
            <GroupButton.Trigger value="quantity">
              Quantidade
            </GroupButton.Trigger>
          </GroupButton>
        </View>
      </View>
    </View>
  )
}

export { UsePurchasePerMonth }
