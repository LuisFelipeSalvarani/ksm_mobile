import { IconChevronRight, IconPackage } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { colors } from '@/constants/theme'
import { s } from './styles'

type UseProductsItemProps = {
  description: string
  id: string
}

const UseProductsItem = ({ description, id }: UseProductsItemProps) => {
  return (
    <TouchableOpacity
      style={s.container}
      onPress={() =>
        router.navigate({
          pathname: '/(products)/details/[id]',
          params: { id },
        })
      }
    >
      <View style={s.icon}>
        <IconPackage size={28} color={colors.zinc[50]} />
      </View>

      <Text style={s.description}>{description}</Text>

      <IconChevronRight size={28} color={colors.blue[600]} />
    </TouchableOpacity>
  )
}

export { UseProductsItem }
