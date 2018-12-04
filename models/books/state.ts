import Product from '@/models/product'

export default interface BooksState {
  products: Product[]
  updatedAt: Date
}
