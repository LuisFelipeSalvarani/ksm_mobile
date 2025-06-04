<<<<<<< HEAD
import { Text, View } from 'react-native'
=======
import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { SafeAreaView, Text, View } from 'react-native'
import { Header } from '@/components/header'
import { colors } from '@/constants/theme'
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
import type {
  GetCustomerById200Customer,
  GetCustomerById200LastSalesItem,
  GetCustomerById200TotalPurchasePerMonthItem,
} from '@/http/models'
<<<<<<< HEAD
import { UsePurchasePerMonth } from './purchase-per-month/use-purchase-per-month'

interface UseCustomersDetilasScreenProps {
  customerInfos: GetCustomerById200Customer
  lastSales: GetCustomerById200LastSalesItem[] | undefined
  totalPurchasePerMonth:
    | {
        x: string
        y: number
        z: number
      }[]
    | undefined
}

function UseCustomersDetilasScreen({
  customerInfos,
  lastSales,
  totalPurchasePerMonth,
}: UseCustomersDetilasScreenProps) {
  return (
    <View>
      <Text>Teste</Text>

      <UsePurchasePerMonth purchaseData={totalPurchasePerMonth} />
    </View>
=======
import { UseLastSales } from './last-sales/use-last-sales'
import { UsePurchasePerMonth } from './purchase-per-month/use-purchase-per-month'
import { s } from './styles'

interface UseCustomersDetilasScreenProps {
  id: string
  customerInfos: GetCustomerById200Customer
  lastSales:
    | {
        productId: string
        productDescription: string
        quantity: string | undefined
        total: string
        date: string
      }[]
    | undefined
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

function UseCustomersDetilasScreen({
  id,
  customerInfos,
  lastSales,
  chartData,
}: UseCustomersDetilasScreenProps) {
  return (
    <SafeAreaView style={s.container}>
      <Header
        title="Detalhes do cliente"
        onBack={() => router.back()}
        onAction={{
          pathname: '/customers/suggestion/[id]',
          params: { id },
        }}
      />

      <View style={s.productInfos}>
        <Text style={s.title}>{customerInfos.companyName}</Text>
        <Text style={s.subtitle}>{customerInfos.tradeName}</Text>

        <Text style={s.infosText}>Grupo: {customerInfos.group}</Text>
        <Text style={s.infosText}>
          Cidade: {customerInfos.city} - {customerInfos.state}
        </Text>
      </View>

      <UsePurchasePerMonth chartData={chartData} />

      {lastSales ? (
        <UseLastSales lastSales={lastSales} />
      ) : (
        <View style={s.errorWrapper}>
          <IconAlertSquareRounded color={colors.zinc[700]} size={32} />
          <Text style={s.error}>Nenhum dado encontrado</Text>
        </View>
      )}
    </SafeAreaView>
>>>>>>> bf831e722e1565e744a745516e8df04611560e1d
  )
}

export { UseCustomersDetilasScreen }
