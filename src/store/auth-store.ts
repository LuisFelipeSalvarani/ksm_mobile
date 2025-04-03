import { create } from 'zustand'

interface AuthStore {
  id: string
  name: string
  email: string
  role: string
  companyId: string
  tradeName: string
  headerToken: string
  setUserData: (user: {
    id: string
    name: string
    email: string
    role: string
    companyId: string
    tradeName: string
    headerToken: string
  }) => void
  unsetUserData: () => void
}

export const useAuthStore = create<AuthStore>(set => ({
  id: '',
  name: '',
  email: '',
  role: '',
  companyId: '',
  tradeName: '',
  headerToken: '',

  setUserData: ({
    id,
    name,
    email,
    role,
    companyId,
    tradeName,
    headerToken = '',
  }) => {
    set({ id, name, email, role, companyId, tradeName, headerToken })
  },

  unsetUserData: () => {
    set({
      id: '',
      name: '',
      email: '',
      role: '',
      companyId: '',
      tradeName: '',
      headerToken: '',
    })
  },
}))
