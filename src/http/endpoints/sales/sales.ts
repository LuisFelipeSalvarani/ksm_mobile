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
  GetLastTenSales200,
  GetLastTenSales204,
  GetProductSalesHistory200,
  GetProductSalesHistory204,
  GetSalesByDaysOfTheLastWeek200,
  GetSalesByDaysOfTheLastWeek204,
  GetSalesByProductGroup200,
  GetSalesByProductGroup204,
} from '../../models'

import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType } from '../../mutator/custom-instance'

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1]

/**
 * @summary Get products sales history
 */
export const getProductSalesHistory = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetProductSalesHistory200 | GetProductSalesHistory204>(
    { url: `/sales/products/history/${id}`, method: 'GET', signal },
    options
  )
}

export const getGetProductSalesHistoryQueryKey = (id: string) => {
  return [`/sales/products/history/${id}`] as const
}

export const getGetProductSalesHistoryQueryOptions = <
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductSalesHistory>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetProductSalesHistoryQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getProductSalesHistory>>
  > = ({ signal }) => getProductSalesHistory(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getProductSalesHistory>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetProductSalesHistoryQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProductSalesHistory>>
>
export type GetProductSalesHistoryQueryError = ErrorType<unknown>

export function useGetProductSalesHistory<
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductSalesHistory>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductSalesHistory>>,
          TError,
          Awaited<ReturnType<typeof getProductSalesHistory>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetProductSalesHistory<
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductSalesHistory>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductSalesHistory>>,
          TError,
          Awaited<ReturnType<typeof getProductSalesHistory>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetProductSalesHistory<
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductSalesHistory>>,
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
 * @summary Get products sales history
 */

export function useGetProductSalesHistory<
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = ErrorType<unknown>,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductSalesHistory>>,
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
  const queryOptions = getGetProductSalesHistoryQueryOptions(id, options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Sales count by days of the last last 7 days
 */
export const getSalesByDaysOfTheLastWeek = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<
    GetSalesByDaysOfTheLastWeek200 | GetSalesByDaysOfTheLastWeek204
  >({ url: `/sales/last/week`, method: 'GET', signal }, options)
}

export const getGetSalesByDaysOfTheLastWeekQueryKey = () => {
  return [`/sales/last/week`] as const
}

export const getGetSalesByDaysOfTheLastWeekQueryOptions = <
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetSalesByDaysOfTheLastWeekQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>
  > = ({ signal }) => getSalesByDaysOfTheLastWeek(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetSalesByDaysOfTheLastWeekQueryResult = NonNullable<
  Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>
>
export type GetSalesByDaysOfTheLastWeekQueryError = ErrorType<unknown>

export function useGetSalesByDaysOfTheLastWeek<
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = ErrorType<unknown>,
>(
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
          TError,
          Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetSalesByDaysOfTheLastWeek<
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
          TError,
          Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetSalesByDaysOfTheLastWeek<
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
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
 * @summary Sales count by days of the last last 7 days
 */

export function useGetSalesByDaysOfTheLastWeek<
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
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
  const queryOptions = getGetSalesByDaysOfTheLastWeekQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get sales grouped by product group
 */
export const getSalesByProductGroup = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetSalesByProductGroup200 | GetSalesByProductGroup204>(
    { url: `/sales/group`, method: 'GET', signal },
    options
  )
}

export const getGetSalesByProductGroupQueryKey = () => {
  return [`/sales/group`] as const
}

export const getGetSalesByProductGroupQueryOptions = <
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getSalesByProductGroup>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetSalesByProductGroupQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getSalesByProductGroup>>
  > = ({ signal }) => getSalesByProductGroup(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getSalesByProductGroup>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetSalesByProductGroupQueryResult = NonNullable<
  Awaited<ReturnType<typeof getSalesByProductGroup>>
>
export type GetSalesByProductGroupQueryError = ErrorType<unknown>

export function useGetSalesByProductGroup<
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = ErrorType<unknown>,
>(
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSalesByProductGroup>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSalesByProductGroup>>,
          TError,
          Awaited<ReturnType<typeof getSalesByProductGroup>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetSalesByProductGroup<
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSalesByProductGroup>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSalesByProductGroup>>,
          TError,
          Awaited<ReturnType<typeof getSalesByProductGroup>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetSalesByProductGroup<
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSalesByProductGroup>>,
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
 * @summary Get sales grouped by product group
 */

export function useGetSalesByProductGroup<
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSalesByProductGroup>>,
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
  const queryOptions = getGetSalesByProductGroupQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get the last ten sales
 */
export const getLastTenSales = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetLastTenSales200 | GetLastTenSales204>(
    { url: `/sales/last/ten`, method: 'GET', signal },
    options
  )
}

export const getGetLastTenSalesQueryKey = () => {
  return [`/sales/last/ten`] as const
}

export const getGetLastTenSalesQueryOptions = <
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getLastTenSales>>, TError, TData>
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetLastTenSalesQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getLastTenSales>>> = ({
    signal,
  }) => getLastTenSales(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getLastTenSales>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetLastTenSalesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getLastTenSales>>
>
export type GetLastTenSalesQueryError = ErrorType<unknown>

export function useGetLastTenSales<
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = ErrorType<unknown>,
>(
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getLastTenSales>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getLastTenSales>>,
          TError,
          Awaited<ReturnType<typeof getLastTenSales>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetLastTenSales<
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getLastTenSales>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getLastTenSales>>,
          TError,
          Awaited<ReturnType<typeof getLastTenSales>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetLastTenSales<
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getLastTenSales>>,
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
 * @summary Get the last ten sales
 */

export function useGetLastTenSales<
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getLastTenSales>>,
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
  const queryOptions = getGetLastTenSalesQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
