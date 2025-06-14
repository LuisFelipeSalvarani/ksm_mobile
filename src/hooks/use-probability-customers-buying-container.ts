import { useQuery } from '@tanstack/react-query'
import axios, { type RawAxiosRequestHeaders } from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { useGetCustomersNames } from '@/http/endpoints/customers/customers'
import { env } from '@/utils/env'
import { getHeaders } from '@/utils/get-headers'

type ProbabilityResponse = {
  cliente_id: number
  chance_compra: number
}

type ProbabilityData = {
  id: number
  customerName: string
  probability: number
}

function useProbabilityCustomersBuyingContainer() {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [data, setData] = useState<ProbabilityData[]>([])

  const { data: probabilityData, isLoading } = useQuery({
    queryKey: ['get-suggestion-product-for-customer'],
    queryFn: async () => {
      const token = await getHeaders()

      const response = await axios.post(
        `${env.EXPO_PUBLIC_IA_URL}/clientes/compra/probabilidade/top10`,
        { headers: { Authorization: token } }
      )

      return response.data as ProbabilityResponse[]
    },
    retry: 1,
  })

  const ids = useMemo(
    () => probabilityData?.map(probability => probability.cliente_id),
    [probabilityData]
  )

  const { mutateAsync } = useGetCustomersNames({
    request: { headers },
  })

  const getNames = async () => {
    if (ids) {
      const { names } = await mutateAsync({ data: { ids } })

      if (names.length) {
        const data = probabilityData?.map(probability => {
          const name = names.find(n => n.id === probability.cliente_id)

          return {
            id: probability.cliente_id,
            customerName: name?.companyName ?? 'desconhecido',
            probability: probability.chance_compra,
          }
        })

        setData(data ?? [])
      }
    }
  }

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) setHeaders({ authorization })
  }

  useEffect(() => {
    if (ids?.length && !isLoading) getNames()
  }, [ids])

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  return { data, isLoading }
}

export { useProbabilityCustomersBuyingContainer, type ProbabilityData }
