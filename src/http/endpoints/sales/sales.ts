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
  GetLastTenSales200,
  GetLastTenSales204,
  GetProductSalesHistory200,
  GetProductSalesHistory204,
  GetSalesByDaysOfTheLastWeek200,
  GetSalesByProductGroup200,
  GetSalesByProductGroup204,
} from '../../models'

/**
 * @summary Get products sales history
 */
export const getGetProductSalesHistoryUrl = (id: string) => {
  return `http://192.168.1.167:3333/sales/products/history/${id}`
}

export const getProductSalesHistory = async (
  id: string,
  options?: RequestInit
): Promise<GetProductSalesHistory200 | GetProductSalesHistory204> => {
  const res = await fetch(getGetProductSalesHistoryUrl(id), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetProductSalesHistory200 | GetProductSalesHistory204 = body
    ? JSON.parse(body)
    : {}

  return data
}

export const getGetProductSalesHistoryQueryKey = (id: string) => {
  return [`http://192.168.1.167:3333/sales/products/history/${id}`] as const
}

export const getGetProductSalesHistoryQueryOptions = <
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = unknown,
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
    fetch?: RequestInit
  }
) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetProductSalesHistoryQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getProductSalesHistory>>
  > = ({ signal }) => getProductSalesHistory(id, { signal, ...fetchOptions })

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
export type GetProductSalesHistoryQueryError = unknown

export function useGetProductSalesHistory<
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = unknown,
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
    fetch?: RequestInit
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetProductSalesHistory<
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = unknown,
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
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetProductSalesHistory<
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = unknown,
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
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get products sales history
 */

export function useGetProductSalesHistory<
  TData = Awaited<ReturnType<typeof getProductSalesHistory>>,
  TError = unknown,
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
    fetch?: RequestInit
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetProductSalesHistoryQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Sales count by days of the last last 7 days
 */
export const getGetSalesByDaysOfTheLastWeekUrl = () => {
  return `http://192.168.1.167:3333/sales/last/week`
}

export const getSalesByDaysOfTheLastWeek = async (
  options?: RequestInit
): Promise<GetSalesByDaysOfTheLastWeek200> => {
  const res = await fetch(getGetSalesByDaysOfTheLastWeekUrl(), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSalesByDaysOfTheLastWeek200 = body ? JSON.parse(body) : {}

  return data
}

export const getGetSalesByDaysOfTheLastWeekQueryKey = () => {
  return [`http://192.168.1.167:3333/sales/last/week`] as const
}

export const getGetSalesByDaysOfTheLastWeekQueryOptions = <
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetSalesByDaysOfTheLastWeekQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>
  > = ({ signal }) => getSalesByDaysOfTheLastWeek({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetSalesByDaysOfTheLastWeekQueryResult = NonNullable<
  Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>
>
export type GetSalesByDaysOfTheLastWeekQueryError = unknown

export function useGetSalesByDaysOfTheLastWeek<
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = unknown,
>(options: {
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
  fetch?: RequestInit
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetSalesByDaysOfTheLastWeek<
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = unknown,
>(options?: {
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
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetSalesByDaysOfTheLastWeek<
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Sales count by days of the last last 7 days
 */

export function useGetSalesByDaysOfTheLastWeek<
  TData = Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getSalesByDaysOfTheLastWeek>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetSalesByDaysOfTheLastWeekQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get sales grouped by product group
 */
export const getGetSalesByProductGroupUrl = () => {
  return `http://192.168.1.167:3333/sales/group`
}

export const getSalesByProductGroup = async (
  options?: RequestInit
): Promise<GetSalesByProductGroup200 | GetSalesByProductGroup204> => {
  const res = await fetch(getGetSalesByProductGroupUrl(), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSalesByProductGroup200 | GetSalesByProductGroup204 = body
    ? JSON.parse(body)
    : {}

  return data
}

export const getGetSalesByProductGroupQueryKey = () => {
  return [`http://192.168.1.167:3333/sales/group`] as const
}

export const getGetSalesByProductGroupQueryOptions = <
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getSalesByProductGroup>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetSalesByProductGroupQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getSalesByProductGroup>>
  > = ({ signal }) => getSalesByProductGroup({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getSalesByProductGroup>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetSalesByProductGroupQueryResult = NonNullable<
  Awaited<ReturnType<typeof getSalesByProductGroup>>
>
export type GetSalesByProductGroupQueryError = unknown

export function useGetSalesByProductGroup<
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = unknown,
>(options: {
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
  fetch?: RequestInit
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetSalesByProductGroup<
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = unknown,
>(options?: {
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
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetSalesByProductGroup<
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getSalesByProductGroup>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get sales grouped by product group
 */

export function useGetSalesByProductGroup<
  TData = Awaited<ReturnType<typeof getSalesByProductGroup>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getSalesByProductGroup>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetSalesByProductGroupQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get the last ten sales
 */
export const getGetLastTenSalesUrl = () => {
  return `http://192.168.1.167:3333/sales/last/ten`
}

export const getLastTenSales = async (
  options?: RequestInit
): Promise<GetLastTenSales200 | GetLastTenSales204> => {
  const res = await fetch(getGetLastTenSalesUrl(), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetLastTenSales200 | GetLastTenSales204 = body
    ? JSON.parse(body)
    : {}

  return data
}

export const getGetLastTenSalesQueryKey = () => {
  return [`http://192.168.1.167:3333/sales/last/ten`] as const
}

export const getGetLastTenSalesQueryOptions = <
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getLastTenSales>>, TError, TData>
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetLastTenSalesQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getLastTenSales>>> = ({
    signal,
  }) => getLastTenSales({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getLastTenSales>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetLastTenSalesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getLastTenSales>>
>
export type GetLastTenSalesQueryError = unknown

export function useGetLastTenSales<
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getLastTenSales>>, TError, TData>
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getLastTenSales>>,
        TError,
        Awaited<ReturnType<typeof getLastTenSales>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetLastTenSales<
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getLastTenSales>>, TError, TData>
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getLastTenSales>>,
        TError,
        Awaited<ReturnType<typeof getLastTenSales>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetLastTenSales<
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getLastTenSales>>, TError, TData>
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get the last ten sales
 */

export function useGetLastTenSales<
  TData = Awaited<ReturnType<typeof getLastTenSales>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getLastTenSales>>, TError, TData>
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetLastTenSalesQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
