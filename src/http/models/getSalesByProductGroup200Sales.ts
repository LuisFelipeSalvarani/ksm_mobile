// biome-ignore-all lint:
import type { GetSalesByProductGroup200SalesGroupedSalesItem } from './getSalesByProductGroup200SalesGroupedSalesItem'

export type GetSalesByProductGroup200Sales = {
  total: number
  groupedSales: GetSalesByProductGroup200SalesGroupedSalesItem[]
}
