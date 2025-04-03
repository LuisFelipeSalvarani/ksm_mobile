// biome-ignore-all lint:
import { useMutation } from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'

import type {
  CreateCompany201,
  CreateCompany400,
  CreateCompanyBody,
} from '../../models'

/**
 * @summary Register a company
 */
export const getCreateCompanyUrl = () => {
  return `http://192.168.1.167:3333/companies`
}

export const createCompany = async (
  createCompanyBody: CreateCompanyBody,
  options?: RequestInit
): Promise<CreateCompany201> => {
  const res = await fetch(getCreateCompanyUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createCompanyBody),
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CreateCompany201 = body ? JSON.parse(body) : {}

  return data
}

export const getCreateCompanyMutationOptions = <
  TError = CreateCompany400,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createCompany>>,
    TError,
    { data: CreateCompanyBody },
    TContext
  >
  fetch?: RequestInit
}): UseMutationOptions<
  Awaited<ReturnType<typeof createCompany>>,
  TError,
  { data: CreateCompanyBody },
  TContext
> => {
  const mutationKey = ['createCompany']
  const { mutation: mutationOptions, fetch: fetchOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, fetch: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createCompany>>,
    { data: CreateCompanyBody }
  > = props => {
    const { data } = props ?? {}

    return createCompany(data, fetchOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateCompanyMutationResult = NonNullable<
  Awaited<ReturnType<typeof createCompany>>
>
export type CreateCompanyMutationBody = CreateCompanyBody
export type CreateCompanyMutationError = CreateCompany400

/**
 * @summary Register a company
 */
export const useCreateCompany = <
  TError = CreateCompany400,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createCompany>>,
    TError,
    { data: CreateCompanyBody },
    TContext
  >
  fetch?: RequestInit
}): UseMutationResult<
  Awaited<ReturnType<typeof createCompany>>,
  TError,
  { data: CreateCompanyBody },
  TContext
> => {
  const mutationOptions = getCreateCompanyMutationOptions(options)

  return useMutation(mutationOptions)
}
