import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { Loading } from '@/components/loading'
import { queryClient } from '@/lib/query-client'
import { colors } from '@/styles/theme'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (!fontsLoaded) return <Loading />

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.white,
          },
        }}
      />
    </QueryClientProvider>
  )
}
