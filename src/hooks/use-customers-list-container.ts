import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'
import {
  useGetAllCustomerGroups,
  useGetAllCustomers,
} from '@/http/endpoints/customers/customers'
import {
  useGetAllProduct,
  useGetAllProductGroups,
} from '@/http/endpoints/products/products'
import { useDebouncedSearch } from '@/utils/debounced-search'
import { getHeaders } from '@/utils/utils'

type CustomersListData = {
  id: number
  description: string
}[]

type GroupsListData = {
  key: number
  value: string
}[]

const useCustomersListContainer = () => {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [allCustomers, setAllCustomers] = useState<CustomersListData>()
  const [allCustomersGroups, setAllCustomersGroups] = useState<GroupsListData>()
  const [page, setPage] = useState(1)
  const [groupId, setGroupId] = useState<number>()
  const [search, setSearch] = useState<string>()
  const [debouncedSearch, setDebouncedSearch] = useState<string>()

  const { data, isLoading, isSuccess, isFetching } = useGetAllCustomers(
    { page, groupId, search: debouncedSearch },
    {
      request: { headers },
      query: { enabled: !!headers },
    }
  )
  const {
    data: groups,
    isLoading: isLoadingGroups,
    isSuccess: isSuccessGroups,
  } = useGetAllCustomerGroups({
    request: { headers },
    query: { enabled: !!headers },
  })

  const mappingData = async () => {
    if (data && data !== 'null') {
      const customer = data.customers.map(customer => ({
        id: customer.id,
        description: customer.companyName,
      }))

      setAllCustomers(customer)
    }
  }

  const mappingGroupsData = async () => {
    if (groups && groups !== 'null') {
      const mappedGroups = groups?.groups.map(group => ({
        key: group.id,
        value: group.description,
      }))

      setAllCustomersGroups(mappedGroups)
    }
  }

  const setNextPageData = () => {
    if (data && data !== 'null') {
      const products = data.customers.map(customer => ({
        id: customer.id,
        description: customer.companyName,
      }))

      setAllCustomers(prev => {
        if (prev) {
          return [...prev, ...products]
        }
      })
    }
  }

  const filterRequest = (value: number) => {
    setPage(1)
    setGroupId(Number(value))
  }

  const clearFilterRequest = () => {
    setPage(1)
    setGroupId(undefined)
    setSearch(undefined)
  }

  const infiniteScroll = () => {
    if (allCustomers && allCustomers.length > 9) {
      setPage(prev => prev + 1)
    }
  }

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) setHeaders({ authorization })
  }

  useDebouncedSearch(search, 300, async query => {
    setPage(1)
    setDebouncedSearch(query)
  })

  useEffect(() => {
    if (isSuccessGroups && groups && page === 1) mappingGroupsData()
  }, [isSuccessGroups, groups, page])

  useEffect(() => {
    if (isSuccess && data && page === 1) mappingData()
    else if (isSuccess && data && page > 1) setNextPageData()
    else setAllCustomers([])
  }, [isSuccess, data, page])

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  return {
    allCustomers,
    isLoading,
    isFetching,
    setPage,
    search,
    setSearch,
    groupId,
    filterRequest,
    clearFilterRequest,
    allCustomersGroups,
    isLoadingGroups,
    infiniteScroll,
  }
}

export {
  useCustomersListContainer,
  type CustomersListData,
  type GroupsListData,
}
