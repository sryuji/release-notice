import Item from './item'
import ProductQuery from './product-query'
import { ProductType } from './enums'

export default interface Product {
  id: string
  type: ProductType
  updatedAt: Date
  query: ProductQuery
  imageUrl?: string
  items: Item[]
}
