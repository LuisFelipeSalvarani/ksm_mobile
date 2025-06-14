import { homeMenu } from '@/constants/menus-options'
import { useHomeContainer } from '@/hooks/use-home-container'
import { useProbabilityCustomersBuyingContainer } from '@/hooks/use-probability-customers-buying-container'
import { UseHomeScreen } from '@/screens/home/use-home-screen'

export default function Home() {
  const { onLogout, userState } = useHomeContainer()
  const { data, isLoading } = useProbabilityCustomersBuyingContainer()

  return (
    <UseHomeScreen
      name={userState.name}
      role={userState.role}
      onLogout={onLogout}
      menuOptions={homeMenu}
      isProbabilityLoading={isLoading}
      probabilityData={data}
    />
  )
}
