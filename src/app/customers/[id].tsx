import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import { Loading } from '@/components/loading'
import { useCustomerDetailsContainer } from '@/hooks/use-customer-details-container'
import { UseCustomersDetilasScreen } from '@/screens/customers/details/use-customer-details-screen'

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>()

<<<<<<< HEAD
  const { customerInfos, lastSales, totalPurchasePerMonth, isLoading } =
=======
  const { customerInfos, lastSales, chartData, isLoading } =
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
    useCustomerDetailsContainer(Number(id))

  if (isLoading) return <Loading />

  if (!customerInfos) return <Text>Erro ao buscar os dados</Text>

  return (
    <UseCustomersDetilasScreen
<<<<<<< HEAD
      customerInfos={customerInfos}
      lastSales={lastSales}
      totalPurchasePerMonth={totalPurchasePerMonth}
=======
      id={id}
      customerInfos={customerInfos}
      lastSales={lastSales}
      chartData={chartData}
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
    />
  )
}
