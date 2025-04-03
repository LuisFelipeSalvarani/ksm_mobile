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

import type { HealthCheck200 } from '../../models'

/**
 * @summary Health check from api
 */
export const getHealthCheckUrl = () => {
  return `http://192.168.1.167:3333/`
}

export const healthCheck = async (
  options?: RequestInit
): Promise<HealthCheck200> => {
  const res = await fetch(getHealthCheckUrl(), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: HealthCheck200 = body ? JSON.parse(body) : {}

  return data
}

export const getHealthCheckQueryKey = () => {
  return [`http://192.168.1.167:3333/`] as const
}

export const getHealthCheckQueryOptions = <
  TData = Awaited<ReturnType<typeof healthCheck>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getHealthCheckQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof healthCheck>>> = ({
    signal,
  }) => healthCheck({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof healthCheck>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type HealthCheckQueryResult = NonNullable<
  Awaited<ReturnType<typeof healthCheck>>
>
export type HealthCheckQueryError = unknown

export function useHealthCheck<
  TData = Awaited<ReturnType<typeof healthCheck>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof healthCheck>>,
        TError,
        Awaited<ReturnType<typeof healthCheck>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useHealthCheck<
  TData = Awaited<ReturnType<typeof healthCheck>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof healthCheck>>,
        TError,
        Awaited<ReturnType<typeof healthCheck>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useHealthCheck<
  TData = Awaited<ReturnType<typeof healthCheck>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Health check from api
 */

export function useHealthCheck<
  TData = Awaited<ReturnType<typeof healthCheck>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getHealthCheckQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
