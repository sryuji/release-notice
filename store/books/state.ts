import BooksState from '@/models/books/state'
import Product from '~/models/product'
import Item from '~/models/item'
import ProductQuery from '~/models/product-query'

const items: Item[] = [
  {
    id: '1',
    publicId: '1',
    title: '信長のシェフ　23',
    releaseDate: new Date(2018, 2, 3),
    creators: [],
    images: [],
  },
]
const product: Product = {
  id: '1',
  title: '信長のシェフ',
  updatedAt: new Date(),
  items: items,
  query: { title: '信長のシェフ' } as ProductQuery,
}

export default (): BooksState => ({
  products: [product],
  updatedAt: null,
})
