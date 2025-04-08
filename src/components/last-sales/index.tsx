import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import { useGetLastTenSales } from '@/http/endpoints/sales/sales'
import type { GetLastTenSales200LastSalesItem } from '@/http/models'
import { getHeaders } from '@/utils/utils'

import { Loading } from '../loading'
import { LastSalesItem } from './last-sales-item'
import { s } from './styles'

export function LastSales() {
  const [headers, setHeaders] = useState<HeadersInit>()
  const [data, setData] = useState<GetLastTenSales200LastSalesItem[]>([])

  const {
    data: sales,
    isLoading,
    isSuccess,
  } = useGetLastTenSales({
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

  useEffect(() => {
    if (isSuccess && sales && sales !== 'null') {
      setData(sales.lastSales)
    }
  }, [isSuccess, sales])

  useEffect(() => {
    getAuthorization()
  }, [])

  if (isLoading || !data) return <Loading />

  return (
    <View style={s.container}>
      <Text style={s.title}>Últimas vendas:</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={s.list}
        renderItem={({ item }) => {
          return (
            <LastSalesItem
              description={item.description}
              companyName={item.companyName}
              date={item.issueDate}
              total={item.total}
              quantity={item.quantity}
            />
          )
        }}
      />
    </View>
  )
}
