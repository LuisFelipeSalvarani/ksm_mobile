// biome-ignore-all lint:
import type { Login200User } from './login200User'

export type Login200 = {
  user: Login200User
  /** @pattern ^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$ */
  token: string
}
