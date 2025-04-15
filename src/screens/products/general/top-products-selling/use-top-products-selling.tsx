import { FlatList, Text, View } from 'react-native'
import type { TopProductsSellingData } from '@/hooks/use-top-products-selling-container'
import { UseTopSellingItem } from '../../components/top-selling-item/use-top-selling'
import { s } from './styles'

type TopProductsSellingProps = {
  topSelling: TopProductsSellingData
}

const UseTopProductsSelling = ({ topSelling }: TopProductsSellingProps) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Top produtos vendidos:</Text>

      <FlatList
        data={topSelling}
        keyExtractor={item => item.id}
        contentContainerStyle={s.list}
        renderItem={({ item }) => {
          return (
            <UseTopSellingItem
              description={item.description}
              total={item.total}
              quantity={item.quantity || ''}
            />
          )
        }}
      />
    </View>
  )
}

export { UseTopProductsSelling }
