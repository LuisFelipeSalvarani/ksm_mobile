// biome-ignore-all lint:
import type { GetCustomerById200Customer } from './getCustomerById200Customer'
import type { GetCustomerById200LastSalesItem } from './getCustomerById200LastSalesItem'
import type { GetCustomerById200TotalPurchasePerMonthItem } from './getCustomerById200TotalPurchasePerMonthItem'

export type GetCustomerById200 = {
  customer: GetCustomerById200Customer
  lastSales: GetCustomerById200LastSalesItem[]
  totalPurchasePerMonth: GetCustomerById200TotalPurchasePerMonthItem[]
}
