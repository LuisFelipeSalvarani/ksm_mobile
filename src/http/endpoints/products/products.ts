// biome-ignore-all lint:
import { useQuery } from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryClient,
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
  GetProductById404,
  GetTopSellingProducts200,
  GetTopSellingProducts204,
  GetTotalDistinctProductsSoldByDayOfTheLastWeekRoute200,
  GetTotalDistinctProductsSoldByDayOfTheLastWeekRoute204,
} from '../../models'

import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType } from '../../mutator/custom-instance'

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1]

/**
 * @summary Get all products
 */
export const getAllProduct = (
  params?: GetAllProductParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetAllProduct200 | GetAllProduct204>(
    { url: `/products`, method: 'GET', params, signal },
    options
  )
}

export const getGetAllProductQueryKey = (params?: GetAllProductParams) => {
  return [`/products`, ...(params ? [params] : [])] as const
}

export const getGetAllProductQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = ErrorType<unknown>,
>(
  params?: GetAllProductParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getAllProduct>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetAllProductQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllProduct>>> = ({
    signal,
  }) => getAllProduct(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllProduct>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetAllProductQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllProduct>>
>
export type GetAllProductQueryError = ErrorType<unknown>

export function useGetAllProduct<
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = ErrorType<unknown>,
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllProduct<
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = ErrorType<unknown>,
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllProduct<
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = ErrorType<unknown>,
>(
  params?: GetAllProductParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getAllProduct>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get all products
 */

export function useGetAllProduct<
  TData = Awaited<ReturnType<typeof getAllProduct>>,
  TError = ErrorType<unknown>,
>(
  params?: GetAllProductParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getAllProduct>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetAllProductQueryOptions(params, options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get all product groups
 */
export const getAllProductGroups = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetAllProductGroups200>(
    { url: `/products/groups`, method: 'GET', signal },
    options
  )
}

export const getGetAllProductGroupsQueryKey = () => {
  return [`/products/groups`] as const
}

export const getGetAllProductGroupsQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllProductGroups>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetAllProductGroupsQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getAllProductGroups>>
  > = ({ signal }) => getAllProductGroups(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllProductGroups>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetAllProductGroupsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllProductGroups>>
>
export type GetAllProductGroupsQueryError = ErrorType<unknown>

export function useGetAllProductGroups<
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = ErrorType<unknown>,
>(
  options: {
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllProductGroups<
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = ErrorType<unknown>,
>(
  options?: {
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllProductGroups<
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllProductGroups>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get all product groups
 */

export function useGetAllProductGroups<
  TData = Awaited<ReturnType<typeof getAllProductGroups>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllProductGroups>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetAllProductGroupsQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get product by id
 */
export const getProductById = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetProductById200>(
    { url: `/products/${id}`, method: 'GET', signal },
    options
  )
}

export const getGetProductByIdQueryKey = (id: string) => {
  return [`/products/${id}`] as const
}

export const getGetProductByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = ErrorType<GetProductById404>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getProductById>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetProductByIdQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProductById>>> = ({
    signal,
  }) => getProductById(id, requestOptions, signal)

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
export type GetProductByIdQueryError = ErrorType<GetProductById404>

export function useGetProductById<
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = ErrorType<GetProductById404>,
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetProductById<
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = ErrorType<GetProductById404>,
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetProductById<
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = ErrorType<GetProductById404>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getProductById>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get product by id
 */

export function useGetProductById<
  TData = Awaited<ReturnType<typeof getProductById>>,
  TError = ErrorType<GetProductById404>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getProductById>>, TError, TData>
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetProductByIdQueryOptions(id, options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get top 10 selling products
 */
export const getTopSellingProducts = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetTopSellingProducts200 | GetTopSellingProducts204>(
    { url: `/products/top/selling`, method: 'GET', signal },
    options
  )
}

export const getGetTopSellingProductsQueryKey = () => {
  return [`/products/top/selling`] as const
}

export const getGetTopSellingProductsQueryOptions = <
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getTopSellingProducts>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetTopSellingProductsQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getTopSellingProducts>>
  > = ({ signal }) => getTopSellingProducts(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getTopSellingProducts>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetTopSellingProductsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getTopSellingProducts>>
>
export type GetTopSellingProductsQueryError = ErrorType<unknown>

export function useGetTopSellingProducts<
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = ErrorType<unknown>,
>(
  options: {
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetTopSellingProducts<
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = ErrorType<unknown>,
>(
  options?: {
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetTopSellingProducts<
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getTopSellingProducts>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get top 10 selling products
 */

export function useGetTopSellingProducts<
  TData = Awaited<ReturnType<typeof getTopSellingProducts>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getTopSellingProducts>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetTopSellingProductsQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get the count of distinct products by day of the last 7 days
 */
export const getTotalDistinctProductsSoldByDayOfTheLastWeekRoute = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<
    | GetTotalDistinctProductsSoldByDayOfTheLastWeekRoute200
    | GetTotalDistinctProductsSoldByDayOfTheLastWeekRoute204
  >({ url: `/products/count/last/week`, method: 'GET', signal }, options)
}

export const getGetTotalDistinctProductsSoldByDayOfTheLastWeekRouteQueryKey =
  () => {
    return [`/products/count/last/week`] as const
  }

export const getGetTotalDistinctProductsSoldByDayOfTheLastWeekRouteQueryOptions =
  <
    TData = Awaited<
      ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
    >,
    TError = ErrorType<unknown>,
  >(options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
        >,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  }) => {
    const { query: queryOptions, request: requestOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getGetTotalDistinctProductsSoldByDayOfTheLastWeekRouteQueryKey()

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
      >
    > = ({ signal }) =>
      getTotalDistinctProductsSoldByDayOfTheLastWeekRoute(
        requestOptions,
        signal
      )

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
      Awaited<
        ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
      >,
      TError,
      TData
    > & { queryKey: DataTag<QueryKey, TData, TError> }
  }

export type GetTotalDistinctProductsSoldByDayOfTheLastWeekRouteQueryResult =
  NonNullable<
    Awaited<
      ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
    >
  >
export type GetTotalDistinctProductsSoldByDayOfTheLastWeekRouteQueryError =
  ErrorType<unknown>

export function useGetTotalDistinctProductsSoldByDayOfTheLastWeekRoute<
  TData = Awaited<
    ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
  >,
  TError = ErrorType<unknown>,
>(
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
        >,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute
            >
          >,
          TError,
          Awaited<
            ReturnType<
              typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute
            >
          >
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetTotalDistinctProductsSoldByDayOfTheLastWeekRoute<
  TData = Awaited<
    ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
  >,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
        >,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute
            >
          >,
          TError,
          Awaited<
            ReturnType<
              typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute
            >
          >
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetTotalDistinctProductsSoldByDayOfTheLastWeekRoute<
  TData = Awaited<
    ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
  >,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
        >,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get the count of distinct products by day of the last 7 days
 */

export function useGetTotalDistinctProductsSoldByDayOfTheLastWeekRoute<
  TData = Awaited<
    ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
  >,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getTotalDistinctProductsSoldByDayOfTheLastWeekRoute>
        >,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions =
    getGetTotalDistinctProductsSoldByDayOfTheLastWeekRouteQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
