import type { IconProps } from '@tabler/icons-react-native'
import { type Href, useRouter } from 'expo-router'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '@/constants/theme'
import { s } from './styles'

type NavigationMenuProps = {
  data: NavigationMenuData
}

export type NavigationMenuData = {
  icon: React.ComponentType<IconProps>
  label: string
  href: Href
}[]

export function NavigationMenu({ data }: NavigationMenuProps) {
  const navigate = useRouter()

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
            <TouchableOpacity
              style={s.button}
              onPress={() => navigate.navigate(item.href)}
            >
              <item.icon size={20} color={colors.zinc[50]} />
            </TouchableOpacity>
            <Text style={s.label}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  )
}
