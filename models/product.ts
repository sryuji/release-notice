import Item from './item'
import ProductQuery from './product-query'

export default interface Product {
  id: string
  title?: string
  updatedAt: Date
  query: ProductQuery
  imageUrl?: string
  items: Item[]
  description?: string
}
