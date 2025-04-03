// biome-ignore-all lint:

export type CreateCompanyBody = {
  cnpj: string
  companyName: string
  tradeName: string
  cep: string
  street: string
  number: number
  complement?: string
  district: string
  city: string
  state: string
}
