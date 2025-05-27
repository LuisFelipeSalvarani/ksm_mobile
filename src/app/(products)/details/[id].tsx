import { useLocalSearchParams } from 'expo-router'
import { UseDetailsScreen } from '@/screens/products/detail/use-detail-screen'

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>()

  return <UseDetailsScreen id={id} />
}
