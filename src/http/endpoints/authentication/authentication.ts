// biome-ignore-all lint:
import { useMutation, useQuery } from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import type {
  CheckAuthentication204,
  CheckAuthentication401,
  Login200,
  Login404,
  LoginBody,
} from '../../models'

/**
 * @summary Login
 */
export const getLoginUrl = () => {
  return `http://192.168.1.167:3333/auth/login`
}

export const login = async (
  loginBody: LoginBody,
  options?: RequestInit
): Promise<Login200> => {
  const res = await fetch(getLoginUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(loginBody),
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: Login200 = body ? JSON.parse(body) : {}

  return data
}

export const getLoginMutationOptions = <
  TError = Login404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof login>>,
    TError,
    { data: LoginBody },
    TContext
  >
  fetch?: RequestInit
}): UseMutationOptions<
  Awaited<ReturnType<typeof login>>,
  TError,
  { data: LoginBody },
  TContext
> => {
  const mutationKey = ['login']
  const { mutation: mutationOptions, fetch: fetchOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, fetch: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof login>>,
    { data: LoginBody }
  > = props => {
    const { data } = props ?? {}

    return login(data, fetchOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>
export type LoginMutationBody = LoginBody
export type LoginMutationError = Login404

/**
 * @summary Login
 */
export const useLogin = <TError = Login404, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof login>>,
    TError,
    { data: LoginBody },
    TContext
  >
  fetch?: RequestInit
}): UseMutationResult<
  Awaited<ReturnType<typeof login>>,
  TError,
  { data: LoginBody },
  TContext
> => {
  const mutationOptions = getLoginMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Check user authentication
 */
export const getCheckAuthenticationUrl = () => {
  return `http://192.168.1.167:3333/auth/check`
}

export const checkAuthentication = async (
  options?: RequestInit
): Promise<CheckAuthentication204> => {
  const res = await fetch(getCheckAuthenticationUrl(), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CheckAuthentication204 = body ? JSON.parse(body) : {}

  return data
}

export const getCheckAuthenticationQueryKey = () => {
  return [`http://192.168.1.167:3333/auth/check`] as const
}

export const getCheckAuthenticationQueryOptions = <
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = CheckAuthentication401,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof checkAuthentication>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getCheckAuthenticationQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof checkAuthentication>>
  > = ({ signal }) => checkAuthentication({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof checkAuthentication>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type CheckAuthenticationQueryResult = NonNullable<
  Awaited<ReturnType<typeof checkAuthentication>>
>
export type CheckAuthenticationQueryError = CheckAuthentication401

export function useCheckAuthentication<
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = CheckAuthentication401,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof checkAuthentication>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof checkAuthentication>>,
        TError,
        Awaited<ReturnType<typeof checkAuthentication>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useCheckAuthentication<
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = CheckAuthentication401,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof checkAuthentication>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof checkAuthentication>>,
        TError,
        Awaited<ReturnType<typeof checkAuthentication>>
      >,
      'initialData'
    >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useCheckAuthentication<
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = CheckAuthentication401,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof checkAuthentication>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Check user authentication
 */

export function useCheckAuthentication<
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = CheckAuthentication401,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof checkAuthentication>>,
      TError,
      TData
    >
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getCheckAuthenticationQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
