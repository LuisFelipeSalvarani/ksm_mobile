import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useState } from 'react'
import {
  useGetAllProduct,
  useGetAllProductGroups,
} from '@/http/endpoints/products/products'
import { useDebouncedSearch } from '@/utils/debounced-search'
import { getHeaders } from '@/utils/utils'

type ProductsListData = {
  id: string
  description: string
}[]

type GroupsListData = {
  key: number
  value: string
}[]

const useProductsListContainer = () => {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()
  const [allProducts, setAllProducts] = useState<ProductsListData>()
  const [allProductsGroups, setAllProductsGroups] = useState<GroupsListData>()
  const [page, setPage] = useState(1)
  const [groupId, setGroupId] = useState<number>()
  const [search, setSearch] = useState<string>()
  const [debouncedSearch, setDebouncedSearch] = useState<string>()

  const { data, isLoading, isSuccess, isFetching } = useGetAllProduct(
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
  } = useGetAllProductGroups({
    request: { headers },
    query: { enabled: !!headers },
  })

  const mappingData = async () => {
    if (data && data !== 'null') {
      const products = data.products.map(product => ({
        id: product.id,
        description: product.description,
      }))

      setAllProducts(products)
    }
  }

  const mappingGroupsData = async () => {
    if (groups) {
      const mappedGroups = groups?.groups.map(group => ({
        key: group.id,
        value: group.description,
      }))

      setAllProductsGroups(mappedGroups)
    }
  }

  const setNextPageData = () => {
    if (data && data !== 'null') {
      const products = data.products.map(product => ({
        id: product.id,
        description: product.description,
      }))

      setAllProducts(prev => {
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
    if (allProducts && allProducts.length > 9) {
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
    else setAllProducts([])
  }, [isSuccess, data, page])

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  return {
    allProducts,
    isLoading,
    isFetching,
    setPage,
    search,
    setSearch,
    groupId,
    filterRequest,
    clearFilterRequest,
    allProductsGroups,
    isLoadingGroups,
    infiniteScroll,
  }
}

export { useProductsListContainer, type ProductsListData, type GroupsListData }
