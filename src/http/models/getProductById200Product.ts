// biome-ignore-all lint:
import type { GetProductById200ProductPriceVariationItem } from './getProductById200ProductPriceVariationItem'
import type { GetProductById200ProductMainBuyersItem } from './getProductById200ProductMainBuyersItem'

export type GetProductById200Product = {
  id: string
  description: string
  groupDescription: string
  priceVariation: GetProductById200ProductPriceVariationItem[]
  mainBuyers: GetProductById200ProductMainBuyersItem[]
}
