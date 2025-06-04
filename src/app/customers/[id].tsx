import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native'
import { Loading } from '@/components/loading'
import { useCustomerDetailsContainer } from '@/hooks/use-customer-details-container'
import { UseCustomersDetailsScreen } from '@/screens/customers/details/use-customer-details-screen'

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { customerInfos, lastSales, chartData, isLoading } =
    useCustomerDetailsContainer(Number(id))

  if (isLoading) return <Loading />

  if (!customerInfos) return <Text>Erro ao buscar os dados</Text>

  return (
    <UseCustomersDetailsScreen
      id={id}
      customerInfos={customerInfos}
      lastSales={lastSales}
      chartData={chartData}
    />
  )
}
