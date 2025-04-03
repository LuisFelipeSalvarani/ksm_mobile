// biome-ignore-all lint:
import { useQuery } from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import type {
  GetAllCustomerGroups200,
  GetAllCustomerGroups204,
  GetAllCustomers200,
  GetAllCustomers204,
  GetAllCustomersParams,
  GetTopBuyersProduct200,
  GetTopBuyersProduct204,
} from '../../models'

/**
 * @summary Get all customers
 */
export const getGetAllCustomersUrl = (params?: GetAllCustomersParams) => {
  const normalizedParams = new URLSearchParams()

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  })

  const stringifiedParams = normalizedParams.toString()

  return stringifiedParams.length > 0
    ? `http://192.168.1.167:3333/customers?${stringifiedParams}`
    : `http://192.168.1.167:3333/customers`
}

export const getAllCustomers = async (
  params?: GetAllCustomersParams,
  options?: RequestInit
): Promise<GetAllCustomers200 | GetAllCustomers204> => {
  const res = await fetch(getGetAllCustomersUrl(params), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetAllCustomers200 | GetAllCustomers204 = body
    ? JSON.parse(body)
    : {}

  return data
}

export const getGetAllCustomersQueryKey = (params?: GetAllCustomersParams) => {
  return [
    `http://192.168.1.167:3333/customers`,
    ...(params ? [params] : []),
  ] as const
}

export const getGetAllCustomersQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = unknown,
>(
  params?: GetAllCustomersParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    >
    fetch?: RequestInit
  }
) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetAllCustomersQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllCustomers>>> = ({
    signal,
  }) => getAllCustomers(params, { signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllCustomers>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetAllCustomersQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllCustomers>>
>
export type GetAllCustomersQueryError = unknown

export function useGetAllCustomers<
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = unknown,
>(
  params: undefined | GetAllCustomersParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAllCustomers>>,
          TError,
          Awaited<ReturnType<typeof getAllCustomers>>
        >,
        'initialData'
      >
    fetch?: RequestInit
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllCustomers<
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = unknown,
>(
  params?: GetAllCustomersParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAllCustomers>>,
          TError,
          Awaited<ReturnType<typeof getAllCustomers>>
        >,
        'initialData'
      >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllCustomers<
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = unknown,
>(
  params?: GetAllCustomersParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get all customers
 */

export function useGetAllCustomers<
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = unknown,
>(
  params?: GetAllCustomersParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetAllCustomersQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get all customer groups
 */
export const getGetAllCustomerGroupsUrl = () => {
  return `http://192.168.1.167:3333/customers/groups`
}

export const getAllCustomerGroups = async (
  options?: RequestInit
): Promise<GetAllCustomerGroups200 | GetAllCustomerGroups204> => {
  const res = await fetch(getGetAllCustomerGroupsUrl(), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetAllCustomerGroups200 | GetAllCustomerGroups204 = body
    ? JSON.parse(body)
    : {}

  return data
}

export const getGetAllCustomerGroupsQueryKey = () => {
  return [`http://192.168.1.167:3333/customers/groups`] as const
}

export const getGetAllCustomerGroupsQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllCustomerGroups>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetAllCustomerGroupsQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getAllCustomerGroups>>
  > = ({ signal }) => getAllCustomerGroups({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllCustomerGroups>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetAllCustomerGroupsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllCustomerGroups>>
>
export type GetAllCustomerGroupsQueryError = unknown

export function useGetAllCustomerGroups<
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllCustomerGroups>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getAllCustomerGroups>>,
        TError,
        Awaited<ReturnType<typeof getAllCustomerGroups>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllCustomerGroups<
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllCustomerGroups>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getAllCustomerGroups>>,
        TError,
        Awaited<ReturnType<typeof getAllCustomerGroups>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllCustomerGroups<
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllCustomerGroups>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get all customer groups
 */

export function useGetAllCustomerGroups<
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllCustomerGroups>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetAllCustomerGroupsQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get top 10 buyers of a product
 */
export const getGetTopBuyersProductUrl = (id: string) => {
  return `http://192.168.1.167:3333/customers/top/${id}`
}

export const getTopBuyersProduct = async (
  id: string,
  options?: RequestInit
): Promise<GetTopBuyersProduct200 | GetTopBuyersProduct204> => {
  const res = await fetch(getGetTopBuyersProductUrl(id), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetTopBuyersProduct200 | GetTopBuyersProduct204 = body
    ? JSON.parse(body)
    : {}

  return data
}

export const getGetTopBuyersProductQueryKey = (id: string) => {
  return [`http://192.168.1.167:3333/customers/top/${id}`] as const
}

export const getGetTopBuyersProductQueryOptions = <
  TData = Awaited<ReturnType<typeof getTopBuyersProduct>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getTopBuyersProduct>>,
        TError,
        TData
      >
    >
    fetch?: RequestInit
  }
) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetTopBuyersProductQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getTopBuyersProduct>>
  > = ({ signal }) => getTopBuyersProduct(id, { signal, ...fetchOptions })

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getTopBuyersProduct>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetTopBuyersProductQueryResult = NonNullable<
  Awaited<ReturnType<typeof getTopBuyersProduct>>
>
export type GetTopBuyersProductQueryError = unknown

export function useGetTopBuyersProduct<
  TData = Awaited<ReturnType<typeof getTopBuyersProduct>>,
  TError = unknown,
>(
  id: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getTopBuyersProduct>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getTopBuyersProduct>>,
          TError,
          Awaited<ReturnType<typeof getTopBuyersProduct>>
        >,
        'initialData'
      >
    fetch?: RequestInit
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetTopBuyersProduct<
  TData = Awaited<ReturnType<typeof getTopBuyersProduct>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getTopBuyersProduct>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getTopBuyersProduct>>,
          TError,
          Awaited<ReturnType<typeof getTopBuyersProduct>>
        >,
        'initialData'
      >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetTopBuyersProduct<
  TData = Awaited<ReturnType<typeof getTopBuyersProduct>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getTopBuyersProduct>>,
        TError,
        TData
      >
    >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get top 10 buyers of a product
 */

export function useGetTopBuyersProduct<
  TData = Awaited<ReturnType<typeof getTopBuyersProduct>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getTopBuyersProduct>>,
        TError,
        TData
      >
    >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetTopBuyersProductQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
