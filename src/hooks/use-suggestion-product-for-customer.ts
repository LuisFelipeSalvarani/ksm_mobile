import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { env } from '@/utils/env'
import { getHeaders } from '@/utils/get-headers'

type SuggestionData = {
  cliente_id: number
  sugestoes: {
    produto_id: string
    nome: string
  }[]
}

function useSuggestionProductsForCustomer(id: number) {
  const { data, isLoading } = useQuery({
    queryKey: ['get-suggestion-product-for-customer', id],
    queryFn: async () => {
      const token = await getHeaders()

      const response = await axios.post(
        `${env.EXPO_PUBLIC_IA_URL}/produtos/venda/sugerir`,
        { cliente_id: id },
        { headers: { Authorization: token } }
      )

      return response.data as SuggestionData
    },
    enabled: !!id,
    retry: 1,
  })

  return { data, isLoading }
}

export { useSuggestionProductsForCustomer }
