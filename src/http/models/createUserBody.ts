// biome-ignore-all lint:
import type { CreateUserBodyRole } from './createUserBodyRole'

export type CreateUserBody = {
  name: string
  email: string
  password: string
  role: (typeof CreateUserBodyRole)[keyof typeof CreateUserBodyRole]
  /** @pattern ^[0-9a-z]+$ */
  companyId: string
}
