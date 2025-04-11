// biome-ignore-all lint:
import { useMutation } from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryClient,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'

import type {
  CreateUser201,
  CreateUser400,
  CreateUser404,
  CreateUserBody,
} from '../../models'

import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType, BodyType } from '../../mutator/custom-instance'

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1]

/**
 * @summary Register a user
 */
export const createUser = (
  createUserBody: BodyType<CreateUserBody>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<CreateUser201>(
    {
      url: `/users`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createUserBody,
      signal,
    },
    options
  )
}

export const getCreateUserMutationOptions = <
  TError = ErrorType<CreateUser400 | CreateUser404>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createUser>>,
    TError,
    { data: BodyType<CreateUserBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof createUser>>,
  TError,
  { data: BodyType<CreateUserBody> },
  TContext
> => {
  const mutationKey = ['createUser']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createUser>>,
    { data: BodyType<CreateUserBody> }
  > = props => {
    const { data } = props ?? {}

    return createUser(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof createUser>>
>
export type CreateUserMutationBody = BodyType<CreateUserBody>
export type CreateUserMutationError = ErrorType<CreateUser400 | CreateUser404>

/**
 * @summary Register a user
 */
export const useCreateUser = <
  TError = ErrorType<CreateUser400 | CreateUser404>,
  TContext = unknown,
>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof createUser>>,
      TError,
      { data: BodyType<CreateUserBody> },
      TContext
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof createUser>>,
  TError,
  { data: BodyType<CreateUserBody> },
  TContext
> => {
  const mutationOptions = getCreateUserMutationOptions(options)

  return useMutation(mutationOptions, queryClient)
}
