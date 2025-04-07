import type { IconProps } from '@tabler/icons-react-native'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '@/styles/theme'
import { s } from './styles'

type NavigationMenuProps = {
  data: {
    icon: React.ComponentType<IconProps>
    label: string
  }[]
}

export function NavigationMenu({ data }: NavigationMenuProps) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Menu:</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.label}
        horizontal
        contentContainerStyle={s.list}
        style={{
          maxHeight: 108,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={s.buttonWrapper}>
            <TouchableOpacity style={s.button}>
              <item.icon size={20} color={colors.zinc[50]} />
            </TouchableOpacity>
            <Text style={s.label}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  )
}
