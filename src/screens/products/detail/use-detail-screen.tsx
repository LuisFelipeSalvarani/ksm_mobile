/** biome-ignore-all lint/correctness/useHookAtTopLevel: <explanation> */

import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { DashPathEffect, useFont } from '@shopify/react-native-skia'
import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { Dimensions, FlatList, SafeAreaView, Text, View } from 'react-native'
import Svg from 'react-native-svg'
import { Bar, CartesianChart, Line } from 'victory-native'
import { Loading } from '@/components/loading'
import { colors } from '@/constants/theme'
import { useGetProductById } from '@/http/endpoints/products/products'
import { getHeaders } from '@/utils/utils'
import { s } from './styles'

interface Buyer {
  customer: string
  totalPurchases: number
  quantityPurchases: number
}

interface UseDetailScreenProps {
  id: string
}

function UseDetailsScreen({ id }: UseDetailScreenProps) {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const font = useFont(Poppins_500Medium)

  const { data, isLoading, isError } = useGetProductById(id, {
    request: { headers },
    query: { enabled: !!headers && !!id },
  })

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) {
      setHeaders({
        Authorization: authorization,
      })
    }
  }

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  const priceData = useMemo(
    () => data?.product.priceVariation.map(p => ({ x: p.month, y: p.average })),
    [data?.product]
  )

  if (isLoading) {
    return <Loading />
  }

  if (isError || !priceData || !data) {
    return (
      <View style={s.center}>
        <Text style={s.errorText}>Erro ao carregar produto.</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={s.container}>
      <Text style={s.title}>{data.product.description}</Text>
      <Text style={s.subtitle}>{data.product.groupDescription}</Text>

      <Text style={s.sectionTitle}>Variação de Preço</Text>
      <View style={s.card}>
        <View style={s.chart}>
          <CartesianChart
            data={priceData}
            xKey="x"
            yKeys={['y']}
            domainPadding={32}
            xAxis={{ font }}
            yAxis={[
              {
                font,
                lineColor: colors.zinc[500],
                linePathEffect: <DashPathEffect intervals={[8, 6]} />,
              },
            ]}
          >
            {({ points }) => (
              <>
                <Line
                  points={points.y}
                  curveType="natural"
                  color={colors.blue[600]}
                  strokeWidth={3}
                />
              </>
            )}
          </CartesianChart>
        </View>
      </View>

      <Text style={s.sectionTitle}>Principais Compradores</Text>
      <FlatList
        data={data.product.mainBuyers}
        keyExtractor={item => item.customer}
        ListHeaderComponent={<Text style={s.sectionTitle}>Detalhes</Text>}
        renderItem={({ item }: { item: Buyer }) => (
          <View style={s.buyerRow}>
            <Text style={s.buyerText}>{item.customer}</Text>
            <Text style={s.buyerText}>R$ {item.totalPurchases.toFixed(2)}</Text>
            <Text style={s.buyerText}>{item.quantityPurchases}x</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export { UseDetailsScreen }
