import BooksState from '@/models/books/state'
import Product from '~/models/product'
import Item from '~/models/item'
import ProductQuery from '~/models/product-query'
import { ProductType } from '@/models/enums'

const items: Item[] = [
  {
    id: '1',
    productId: '1',
    title: '信長のシェフ　23',
    releaseDate: new Date(2018, 2, 3),
    creators: [],
    images: [],
  },
  {
    id: '2',
    productId: '1',
    title: '信長のシェフ　22',
    releaseDate: new Date(2017, 9, 3),
    creators: [],
    images: [],
  },
  {
    id: '3',
    productId: '1',
    title: '信長のシェフ　21',
    releaseDate: new Date(2017, 3, 3),
    creators: [],
    images: [],
  },
]
const product: Product = {
  id: '1',
  type: ProductType.Book,
  updatedAt: new Date(),
  items: items,
  query: { title: '信長のシェフ' } as ProductQuery,
}

const items2: Item[] = [
  {
    id: '23',
    productId: '2',
    title: '美味しんぼ 999',
    releaseDate: null,
    creators: [],
    images: [],
  },
  {
    id: '21',
    productId: '2',
    title: '美味しんぼ 100',
    releaseDate: new Date(2018, 1, 3),
    creators: [],
    images: [],
  },
  {
    id: '22',
    productId: '2',
    title: '美味しんぼ　99',
    releaseDate: new Date(2017, 7, 23),
    creators: [],
    images: [],
  },
]
const product2: Product = {
  id: '2',
  type: ProductType.Book,
  updatedAt: new Date(),
  items: items2,
  query: { title: '美味しんぼ' } as ProductQuery,
}
const products = [product, product2]

export default (): BooksState => ({
  products: products,
  updatedAt: null,
})
