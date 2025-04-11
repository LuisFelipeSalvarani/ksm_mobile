import { View } from 'react-native'
import {
  NavigationMenu,
  type NavigationMenuData,
} from '@/components/navigation-menu'
import { Welcome, type WelcomeProps } from '@/screens/home/components/welcome'

type UseHomeScreenProps = WelcomeProps & {
  menuOptions: NavigationMenuData
}

const UseHomeScreen = ({
  menuOptions,
  name,
  role,
  onLogout,
}: UseHomeScreenProps) => {
  return (
    <View style={{ flex: 1, gap: 4 }}>
      <Welcome name={name} role={role} onLogout={onLogout} />

      <NavigationMenu data={menuOptions} />
    </View>
  )
}

export { UseHomeScreen }
