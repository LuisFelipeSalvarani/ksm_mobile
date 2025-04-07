import { IconPackage } from '@tabler/icons-react-native'
import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useGetLastTenSales } from '@/http/endpoints/sales/sales'
import {
  GetLastTenSales204,
  type GetLastTenSales200LastSalesItem,
} from '@/http/models'
import { getHeaders } from '@/utils/get-headers'
import { LastSalesItem } from '../last-sales-item'
import { Loading } from '../loading'
import { s } from './styles'

// const data = [
//   {
//     id: 'kdabsdgaosydg',
//     description: 'Produto 1',
//     companyName: 'Empresa 1',
//     date: '03/03/2025',
//     total: '125.25',
//     quantity: '150',
//   },
//   {
//     id: 'asidghoaisda',
//     description: 'Produto 1',
//     companyName: 'Empresa 1',
//     date: '03/03/2025',
//     total: '125.25',
//     quantity: '150',
//   },
//   {
//     id: 'dauishdias',
//     description: 'Produto 1',
//     companyName: 'Empresa 1',
//     date: '03/03/2025',
//     total: '125.25',
//     quantity: '150',
//   },
//   {
//     id: 'dasoihdoaisd',
//     description: 'Produto 1',
//     companyName: 'Empresa 1',
//     date: '03/03/2025',
//     total: '125.25',
//     quantity: '150',
//   },
//   {
//     id: 'daisuhda',
//     description: 'Produto 1',
//     companyName: 'Empresa 1',
//     date: '03/03/2025',
//     total: '125.25',
//     quantity: '150',
//   },
//   {
//     id: 'kdabsdgadasuhdasosydg',
//     description: 'Produto 1',
//     companyName: 'Empresa 1',
//     date: '03/03/2025',
//     total: '125.25',
//     quantity: '150',
//   },
// ]

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

  // const mapData = async () => {
  //   if (sales && sales !== 'null') {
  //     setData(sales.lastSales)
  //   }
  // }

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
