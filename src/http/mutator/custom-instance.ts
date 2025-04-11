import Axios, { type AxiosError, type AxiosRequestConfig } from 'axios'
import { env } from '@/utils/env'

export const AXIOS_INSTANCE = Axios.create({ baseURL: env.EXPO_PUBLIC_API_URL })

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source()
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data)

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Consulta foi cancelada')
  }

  return promise
}

export type ErrorType<Error> = AxiosError<Error>

export type BodyType<BodyData> = BodyData
