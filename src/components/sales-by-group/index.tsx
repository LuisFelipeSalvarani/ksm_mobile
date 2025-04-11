import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Pie, PolarChart } from 'victory-native'

import { useGetSalesByProductGroup } from '@/http/endpoints/sales/sales'
import { colors } from '@/styles/theme'
import { getDecimal, getHeaders } from '@/utils/utils'
import { Loading } from '../loading'
import { Caption, type CaptionData } from './caption'
import { s } from './styles'

const colorsChart = [
  '#4E79A7',
  '#F28E2B',
  '#E15759',
  '#76B7B2',
  '#59A14F',
  '#EDC949',
  '#AF7AA1',
  '#FF9DA7',
]

export function SalesByGroup() {
  const { width } = Dimensions.get('window')
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [data, setData] =
    useState<
      {
        label: string
        value: number
        color: string
      }[]
    >()
  const [captionData, setCaptionData] = useState<CaptionData[]>()

  const {
    data: sales,
    isLoading,
    isSuccess,
  } = useGetSalesByProductGroup({
    request: {
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
      setHeaders({
        Authorization: authorization,
      })
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
          color: colorsChart[index],
        } as CaptionData
      })

      setCaptionData(captionData)
    }
  }

  const mapData = async () => {
    if (sales && sales !== 'null') {
      const data = sales.sales.groupedSales.map((sale, i) => ({
        label: sale.groupDescription,
        value: sale.totalGroupSales,
        color: colorsChart[i],
      }))
      setData(data)

      await mapCaptionData()
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
        <View style={{ width: width * 0.9, height: 280 }}>
          <PolarChart
            data={data}
            labelKey={'label'}
            valueKey={'value'}
            colorKey={'color'}
          >
            <Pie.Chart innerRadius={'60%'}>
              {({ slice }) => (
                <>
                  <Pie.Slice
                    animate={{
                      type: 'spring',
                    }}
                  />
                  <Pie.SliceAngularInset
                    animate={{
                      type: 'spring',
                    }}
                    angularInset={{
                      angularStrokeColor: colors.white,
                      angularStrokeWidth: 5,
                    }}
                  />
                </>
              )}
            </Pie.Chart>
          </PolarChart>
        </View>
        <Text style={s.caption}>Total: {getDecimal(sales.sales.total)}</Text>
      </View>

      {captionData ? <Caption data={captionData} /> : <Loading />}
    </View>
  )
}
