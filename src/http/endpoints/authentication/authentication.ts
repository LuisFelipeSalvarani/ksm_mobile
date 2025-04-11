// biome-ignore-all lint:
import { useMutation, useQuery } from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryClient,
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

import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType, BodyType } from '../../mutator/custom-instance'

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1]

/**
 * @summary Login
 */
export const login = (
  loginBody: BodyType<LoginBody>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<Login200>(
    {
      url: `/auth/login`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: loginBody,
      signal,
    },
    options
  )
}

export const getLoginMutationOptions = <
  TError = ErrorType<Login404>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof login>>,
    TError,
    { data: BodyType<LoginBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof login>>,
  TError,
  { data: BodyType<LoginBody> },
  TContext
> => {
  const mutationKey = ['login']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof login>>,
    { data: BodyType<LoginBody> }
  > = props => {
    const { data } = props ?? {}

    return login(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>
export type LoginMutationBody = BodyType<LoginBody>
export type LoginMutationError = ErrorType<Login404>

/**
 * @summary Login
 */
export const useLogin = <TError = ErrorType<Login404>, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof login>>,
      TError,
      { data: BodyType<LoginBody> },
      TContext
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof login>>,
  TError,
  { data: BodyType<LoginBody> },
  TContext
> => {
  const mutationOptions = getLoginMutationOptions(options)

  return useMutation(mutationOptions, queryClient)
}
/**
 * @summary Check user authentication
 */
export const checkAuthentication = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<CheckAuthentication204>(
    { url: `/auth/check`, method: 'GET', signal },
    options
  )
}

export const getCheckAuthenticationQueryKey = () => {
  return [`/auth/check`] as const
}

export const getCheckAuthenticationQueryOptions = <
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = ErrorType<CheckAuthentication401>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof checkAuthentication>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getCheckAuthenticationQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof checkAuthentication>>
  > = ({ signal }) => checkAuthentication(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof checkAuthentication>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type CheckAuthenticationQueryResult = NonNullable<
  Awaited<ReturnType<typeof checkAuthentication>>
>
export type CheckAuthenticationQueryError = ErrorType<CheckAuthentication401>

export function useCheckAuthentication<
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = ErrorType<CheckAuthentication401>,
>(
  options: {
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useCheckAuthentication<
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = ErrorType<CheckAuthentication401>,
>(
  options?: {
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
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useCheckAuthentication<
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = ErrorType<CheckAuthentication401>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof checkAuthentication>>,
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
 * @summary Check user authentication
 */

export function useCheckAuthentication<
  TData = Awaited<ReturnType<typeof checkAuthentication>>,
  TError = ErrorType<CheckAuthentication401>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof checkAuthentication>>,
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
  const queryOptions = getCheckAuthenticationQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
