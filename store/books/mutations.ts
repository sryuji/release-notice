import { MutationTree } from 'vuex'
import BooksState from '@/models/books/state'

export default {
  createProduct(state, { id, product }) {
    if (!id || !product) throw new Error()
    product.id = id
    state.products.push(product)
  },
  updateProduct(state, { dest, product }) {
    Object.assign(dest, product)
  },
} as MutationTree<BooksState>
