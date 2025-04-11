// biome-ignore-all lint:
import { useMutation } from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryClient,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'

import type {
  CreateCompany201,
  CreateCompany400,
  CreateCompanyBody,
} from '../../models'

import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType, BodyType } from '../../mutator/custom-instance'

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1]

/**
 * @summary Register a company
 */
export const createCompany = (
  createCompanyBody: BodyType<CreateCompanyBody>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<CreateCompany201>(
    {
      url: `/companies`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createCompanyBody,
      signal,
    },
    options
  )
}

export const getCreateCompanyMutationOptions = <
  TError = ErrorType<CreateCompany400>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createCompany>>,
    TError,
    { data: BodyType<CreateCompanyBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof createCompany>>,
  TError,
  { data: BodyType<CreateCompanyBody> },
  TContext
> => {
  const mutationKey = ['createCompany']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createCompany>>,
    { data: BodyType<CreateCompanyBody> }
  > = props => {
    const { data } = props ?? {}

    return createCompany(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateCompanyMutationResult = NonNullable<
  Awaited<ReturnType<typeof createCompany>>
>
export type CreateCompanyMutationBody = BodyType<CreateCompanyBody>
export type CreateCompanyMutationError = ErrorType<CreateCompany400>

/**
 * @summary Register a company
 */
export const useCreateCompany = <
  TError = ErrorType<CreateCompany400>,
  TContext = unknown,
>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof createCompany>>,
      TError,
      { data: BodyType<CreateCompanyBody> },
      TContext
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof createCompany>>,
  TError,
  { data: BodyType<CreateCompanyBody> },
  TContext
> => {
  const mutationOptions = getCreateCompanyMutationOptions(options)

  return useMutation(mutationOptions, queryClient)
}
