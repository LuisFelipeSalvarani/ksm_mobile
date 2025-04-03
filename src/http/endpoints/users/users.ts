// biome-ignore-all lint:
import { useMutation } from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'

import type {
  CreateUser201,
  CreateUser400,
  CreateUser404,
  CreateUserBody,
} from '../../models'

/**
 * @summary Register a user
 */
export const getCreateUserUrl = () => {
  return `http://192.168.1.167:3333/users`
}

export const createUser = async (
  createUserBody: CreateUserBody,
  options?: RequestInit
): Promise<CreateUser201> => {
  const res = await fetch(getCreateUserUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createUserBody),
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CreateUser201 = body ? JSON.parse(body) : {}

  return data
}

export const getCreateUserMutationOptions = <
  TError = CreateUser400 | CreateUser404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createUser>>,
    TError,
    { data: CreateUserBody },
    TContext
  >
  fetch?: RequestInit
}): UseMutationOptions<
  Awaited<ReturnType<typeof createUser>>,
  TError,
  { data: CreateUserBody },
  TContext
> => {
  const mutationKey = ['createUser']
  const { mutation: mutationOptions, fetch: fetchOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, fetch: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createUser>>,
    { data: CreateUserBody }
  > = props => {
    const { data } = props ?? {}

    return createUser(data, fetchOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof createUser>>
>
export type CreateUserMutationBody = CreateUserBody
export type CreateUserMutationError = CreateUser400 | CreateUser404

/**
 * @summary Register a user
 */
export const useCreateUser = <
  TError = CreateUser400 | CreateUser404,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createUser>>,
    TError,
    { data: CreateUserBody },
    TContext
  >
  fetch?: RequestInit
}): UseMutationResult<
  Awaited<ReturnType<typeof createUser>>,
  TError,
  { data: CreateUserBody },
  TContext
> => {
  const mutationOptions = getCreateUserMutationOptions(options)

  return useMutation(mutationOptions)
}
