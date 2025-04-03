// biome-ignore-all lint:
import type { Login200UserRole } from './login200UserRole'

export type Login200User = {
  /** @pattern ^[0-9a-z]+$ */
  id: string
  name: string
  email: string
  role: (typeof Login200UserRole)[keyof typeof Login200UserRole]
  /** @pattern ^[0-9a-z]+$ */
  companyId: string
  tradeName: string
}
