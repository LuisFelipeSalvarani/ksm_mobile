import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { DashPathEffect, useFont } from '@shopify/react-native-skia'
import { Text, View } from 'react-native'
import { Bar, CartesianChart } from 'victory-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

type UseCountLastSalesScreenProps = {
  countLastSales: {
    x: string
    y: number
  }[]
}

const UseCountLastSalesScreen = ({
  countLastSales,
}: UseCountLastSalesScreenProps) => {
  const font = useFont(Poppins_500Medium)

  return (
    <View style={s.container}>
      <Text style={s.title}>Geral:</Text>

      <View style={s.card}>
        <Text style={s.titleChart}>Total de vendas dos últimos 7 dias</Text>

        <View style={s.chart}>
          <CartesianChart
            data={countLastSales}
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
                labels={{ position: 'top', font }}
                color={colors.blue[600]}
                roundedCorners={{ topLeft: 8, topRight: 8 }}
                animate={{ type: 'spring' }}
              />
            )}
          </CartesianChart>
        </View>
      </View>
    </View>
  )
}

export { UseCountLastSalesScreen, type UseCountLastSalesScreenProps }
