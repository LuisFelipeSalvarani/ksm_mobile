import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'
import { Loading } from '@/components/loading'
import {
  NavigationMenu,
  type NavigationMenuData,
} from '@/components/navigation-menu'
import { colors } from '@/constants/theme'
import type { ProbabilityData } from '@/hooks/use-probability-customers-buying-container'
import { Welcome, type WelcomeProps } from '@/screens/home/components/welcome'
import { UseProbability } from './probability/probability-customers-buying'
import { s } from './styles'

type UseHomeScreenProps = WelcomeProps & {
  menuOptions: NavigationMenuData
  probabilityData?: ProbabilityData[]
  isProbabilityLoading: boolean
}

const UseHomeScreen = ({
  menuOptions,
  name,
  role,
  onLogout,
  probabilityData,
  isProbabilityLoading,
}: UseHomeScreenProps) => {
  return (
    <View style={{ flex: 1, gap: 4 }}>
      <Welcome name={name} role={role} onLogout={onLogout} />

      <NavigationMenu data={menuOptions} />

      {isProbabilityLoading ? (
        <Loading />
      ) : probabilityData ? (
        <UseProbability probabilityData={probabilityData} />
      ) : (
        <View style={s.errorWrapper}>
          <IconAlertSquareRounded color={colors.zinc[700]} size={32} />
          <Text style={s.error}>Nenhum dado encontrado</Text>
        </View>
      )}
    </View>
  )
}

export { UseHomeScreen }
