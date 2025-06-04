import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { SafeAreaView, Text, View } from 'react-native'
import { Header } from '@/components/header'
import { colors } from '@/constants/theme'
import type { GetCustomerById200Customer } from '@/http/models'
import { UseLastSales } from './last-sales/use-last-sales'
import { UsePurchasePerMonth } from './purchase-per-month/use-purchase-per-month'
import { s } from './styles'

interface UseCustomersDetailsScreenProps {
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

function UseCustomersDetailsScreen({
  id,
  customerInfos,
  lastSales,
  chartData,
}: UseCustomersDetailsScreenProps) {
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
  )
}

export { UseCustomersDetailsScreen }
