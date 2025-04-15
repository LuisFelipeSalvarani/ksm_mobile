import { IconChevronRight, IconPackage } from '@tabler/icons-react-native'
import type { Href } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { colors } from '@/constants/theme'
import { s } from './styles'

type UseProductsItemProps = {
  description: string
  href: Href
}

const UseProductsItem = ({ description, href }: UseProductsItemProps) => {
  return (
    <TouchableOpacity style={s.container}>
      <View style={s.icon}>
        <IconPackage size={28} color={colors.zinc[50]} />
      </View>

      <Text style={s.description}>{description}</Text>

      <IconChevronRight size={28} color={colors.blue[600]} />
    </TouchableOpacity>
  )
}

export { UseProductsItem }
