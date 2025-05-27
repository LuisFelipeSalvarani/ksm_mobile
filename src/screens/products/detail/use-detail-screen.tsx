import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { SafeAreaView, Text, View } from 'react-native'
import { Header } from '@/components/header'
import { colors } from '@/constants/theme'
import { UsePriceVariation } from './price-variation/use-price-variation'
import { s } from './styles'
import { UseTopBuyers } from './top-buyers/use-top-buyers'

export interface Buyer {
  name: string
  total: string
  quantity: string | undefined
}

interface Infos {
  id: string | undefined
  description: string | undefined
  group: string | undefined
}

interface UseDetailScreenProps {
  productInfos: Infos
  priceData:
    | {
        x: string
        y: number
      }[]
    | undefined
  mainBuyers: Buyer[] | undefined
}

function UseDetailsScreen({
  productInfos,
  priceData,
  mainBuyers,
}: UseDetailScreenProps) {
  return (
    <SafeAreaView style={s.container}>
      <Header title="Detalhes do produto" onBack={() => router.back()} />

      <View style={s.productInfos}>
        <Text style={s.title}>{productInfos.description}</Text>
        <Text style={s.subtitle}>{productInfos.group}</Text>
      </View>

      {!priceData?.length && !mainBuyers?.length ? (
        <View style={s.errorWrapper}>
          <IconAlertSquareRounded color={colors.zinc[700]} size={32} />
          <Text style={s.error}>Nenhum dado encontrado</Text>
        </View>
      ) : (
        <>
          <UsePriceVariation priceData={priceData} />

          {mainBuyers ? (
            <UseTopBuyers topBuyers={mainBuyers} />
          ) : (
            <Text>Erro ao carregar dados</Text>
          )}
        </>
      )}
    </SafeAreaView>
  )
}

export { UseDetailsScreen }
