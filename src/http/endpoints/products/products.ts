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
  GetAllProduct200,
  GetAllProduct204,
  GetAllProductGroups200,
  GetAllProductParams,
  GetProductById200,
  GetProductById400,
  GetTopSellingProducts200,
  GetTopSellingProducts204,
} from '../../models'

/**
 * @summary Get all products
 */
export const getGetAllProductUrl = (params?: GetAllProductParams) => {
  const normalizedParams = new URLSearchParams()

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  })

  const stringifiedParams = normalizedParams.toString()

  return stringifiedParams.length > 0
    ? `http://192.168.1.167:3333/products?${stringifiedParams}`
    : `http://192.168.1.167:3333/products`
}

export const getAllProduct = async (
  params?: GetAllProductParams,
  options?: RequestInit
): Promise<GetAllProduct200 | GetAllProduct204> => {
  const res = await fetch(getGetAllProductUrl(params), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetAllProduct200 | GetAllProduct204 = body ? JSON.parse(body) : {}

  return data
}

export const getGetAllProductQueryKey = (params?: GetAllProductParams) => {
  return [
    `http://192.168.1.167:3333/products`,
    ...(params ? [params] : []),
  ] as const
}

export const getGetAllProductQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = unknown,
>(
  params?: GetAllProductParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getAllProduct>>, TError, TData>
    >
    fetch?: RequestInit
  }
) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetAllProductQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllProduct>>> = ({
    signal,
  }) => getAllProduct(params, { signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllProduct>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetAllProductQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllProduct>>
>
export type GetAllProductQueryError = unknown

export function useGetAllProduct<
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = unknown,
>(
  params: undefined | GetAllProductParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getAllProduct>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAllProduct>>,
          TError,
          Awaited<ReturnType<typeof getAllProduct>>
        >,
        'initialData'
      >
    fetch?: RequestInit
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllProduct<
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = unknown,
>(
  params?: GetAllProductParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getAllProduct>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAllProduct>>,
          TError,
          Awaited<ReturnType<typeof getAllProduct>>
        >,
        'initialData'
      >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllProduct<
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = unknown,
>(
  params?: GetAllProductParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getAllProduct>>, TError, TData>
    >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get all products
 */

export function useGetAllProduct<
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = unknown,
>(
  params?: GetAllProductParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getAllProduct>>, TError, TData>
    >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetAllProductQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get all product groups
 */
export const getGetAllProductGroupsUrl = () => {
  return `http://192.168.1.167:3333/products/groups`
}

export const getAllProductGroups = async (
  options?: RequestInit
): Promise<GetAllProductGroups200> => {
  const res = await fetch(getGetAllProductGroupsUrl(), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetAllProductGroups200 = body ? JSON.parse(body) : {}

  return data
}

export const getGetAllProductGroupsQueryKey = () => {
  return [`http://192.168.1.167:3333/products/groups`] as const
}

export const getGetAllProductGroupsQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllProductGroups>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetAllProductGroupsQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getAllProductGroups>>
  > = ({ signal }) => getAllProductGroups({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllProductGroups>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetAllProductGroupsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllProductGroups>>
>
export type GetAllProductGroupsQueryError = unknown

export function useGetAllProductGroups<
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllProductGroups>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getAllProductGroups>>,
        TError,
        Awaited<ReturnType<typeof getAllProductGroups>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllProductGroups<
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllProductGroups>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getAllProductGroups>>,
        TError,
        Awaited<ReturnType<typeof getAllProductGroups>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllProductGroups<
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllProductGroups>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get all product groups
 */

export function useGetAllProductGroups<
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllProductGroups>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetAllProductGroupsQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get product by id
 */
export const getGetProductByIdUrl = (id: string) => {
  return `http://192.168.1.167:3333/products/${id}`
}

export const getProductById = async (
  id: string,
  options?: RequestInit
): Promise<GetProductById200> => {
  const res = await fetch(getGetProductByIdUrl(id), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetProductById200 = body ? JSON.parse(body) : {}

  return data
}

export const getGetProductByIdQueryKey = (id: string) => {
  return [`http://192.168.1.167:3333/products/${id}`] as const
}

export const getGetProductByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = GetProductById400,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getProductById>>, TError, TData>
    >
    fetch?: RequestInit
  }
) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetProductByIdQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProductById>>> = ({
    signal,
  }) => getProductById(id, { signal, ...fetchOptions })

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getProductById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetProductByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProductById>>
>
export type GetProductByIdQueryError = GetProductById400

export function useGetProductById<
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = GetProductById400,
>(
  id: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getProductById>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductById>>,
          TError,
          Awaited<ReturnType<typeof getProductById>>
        >,
        'initialData'
      >
    fetch?: RequestInit
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetProductById<
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = GetProductById400,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getProductById>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductById>>,
          TError,
          Awaited<ReturnType<typeof getProductById>>
        >,
        'initialData'
      >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetProductById<
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = GetProductById400,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getProductById>>, TError, TData>
    >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get product by id
 */

export function useGetProductById<
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = GetProductById400,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getProductById>>, TError, TData>
    >
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetProductByIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get top 10 selling products
 */
export const getGetTopSellingProductsUrl = () => {
  return `http://192.168.1.167:3333/products/top/selling`
}

export const getTopSellingProducts = async (
  options?: RequestInit
): Promise<GetTopSellingProducts200 | GetTopSellingProducts204> => {
  const res = await fetch(getGetTopSellingProductsUrl(), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetTopSellingProducts200 | GetTopSellingProducts204 = body
    ? JSON.parse(body)
    : {}

  return data
}

export const getGetTopSellingProductsQueryKey = () => {
  return [`http://192.168.1.167:3333/products/top/selling`] as const
}

export const getGetTopSellingProductsQueryOptions = <
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getTopSellingProducts>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetTopSellingProductsQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getTopSellingProducts>>
  > = ({ signal }) => getTopSellingProducts({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getTopSellingProducts>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetTopSellingProductsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getTopSellingProducts>>
>
export type GetTopSellingProductsQueryError = unknown

export function useGetTopSellingProducts<
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getTopSellingProducts>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getTopSellingProducts>>,
        TError,
        Awaited<ReturnType<typeof getTopSellingProducts>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetTopSellingProducts<
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getTopSellingProducts>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getTopSellingProducts>>,
        TError,
        Awaited<ReturnType<typeof getTopSellingProducts>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetTopSellingProducts<
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getTopSellingProducts>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get top 10 selling products
 */

export function useGetTopSellingProducts<
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getTopSellingProducts>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetTopSellingProductsQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
