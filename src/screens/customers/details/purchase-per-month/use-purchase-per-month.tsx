import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { DashPathEffect, useFont } from '@shopify/react-native-skia'
import { IconAlertSquareRounded } from '@tabler/icons-react-native'
<<<<<<< HEAD
<<<<<<< HEAD
import { Text, View } from 'react-native'
import { CartesianChart, Line } from 'victory-native'
import { colors } from '@/constants/theme'
import { s } from './styles'

interface UsePurchasePerMonthProps {
  purchaseData:
    | {
        x: string
        y: number
        z: number
      }[]
    | undefined
}

function UsePurchasePerMonth({ purchaseData }: UsePurchasePerMonthProps) {
=======
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
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
<<<<<<< HEAD
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
  const font = useFont(Poppins_500Medium)

  return (
    <View style={s.container}>
      <View style={s.chartContainer}>
<<<<<<< HEAD
<<<<<<< HEAD
        <Text style={s.title}>Variação de preço:</Text>

        <View style={s.card}>
          {purchaseData?.length ? (
            <View style={s.chart}>
              <CartesianChart
                data={purchaseData}
                xKey="x"
                yKeys={['y']}
                domainPadding={32}
                xAxis={{ font }}
=======
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
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
<<<<<<< HEAD
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
                yAxis={[
                  {
                    font,
                    lineColor: colors.zinc[500],
                    linePathEffect: <DashPathEffect intervals={[8, 6]} />,
<<<<<<< HEAD
<<<<<<< HEAD
                  },
                ]}
              >
                {({ points }) => (
                  <Line
                    points={points.y}
                    curveType="bumpX"
                    color={colors.blue[600]}
                    strokeWidth={3}
=======
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
                    formatYLabel: label => {
                      if (option === 'count') {
                        return getCurrency(label)
                      }
                      return `${label}`
                    },
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
<<<<<<< HEAD
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d

        <View style={s.groupButton}>
          <GroupButton value={option} onChange={setOption}>
            <GroupButton.Trigger value="count">Total</GroupButton.Trigger>
            <GroupButton.Trigger value="quantity">
              Quantidade
            </GroupButton.Trigger>
          </GroupButton>
        </View>
<<<<<<< HEAD
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
=======
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
      </View>
    </View>
  )
}

export { UsePurchasePerMonth }
