import { FlatList, Text, View } from 'react-native'
import { CaptionItem } from './caption-item'

import { s } from './styles'

type CaptionProps = {
  data: CaptionData[]
}

export type CaptionData = {
  title: string
  quantity: number
  percentage: number
  count: number
  color: string
}

export function Caption({ data }: CaptionProps) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Legenda:</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        testID="Caption"
        ItemSeparatorComponent={() => <View style={s.separator} />}
        renderItem={({ item }) => {
          return (
            <CaptionItem
              color={item.color}
              title={item.title}
              percentage={item.percentage}
              count={item.count}
              quantity={item.quantity}
            />
          )
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
