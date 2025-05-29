import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { env } from '@/utils/env'
import { getHeaders } from '@/utils/get-headers'

type SeuggestionData = {
  cliente_id: number
  sugestoes: {
    produto_id: string
    nome: string
  }[]
}

function useSuggesttionProductsForCustomer(id: number) {
  const { data, isLoading } = useQuery({
    queryKey: ['get-suggestion-product-for-customer', id],
    queryFn: async () => {
      const token = await getHeaders()

      const response = await axios.post(
        env.EXPO_PUBLIC_IA_URL,
        { cliente_id: id },
        { headers: { Authorization: token } }
      )

      return response.data as SeuggestionData
    },
    enabled: !!id,
    retry: 1,
  })

  return { data, isLoading }
}

export { useSuggesttionProductsForCustomer }
