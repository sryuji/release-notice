import { GetterTree } from 'vuex'
import RootState from '@/models/state'
import BooksState from '@/models/books/state'
import Item from '@/models/item'
import { sortItems } from '@/store/-helpers'
import Product from '@/models/product'

export default {
  releaseItems(state): Item[] {
    const items = state.products.reduce((result, r): Item[] => {
      result.push(...r.items)
      return result
    }, [])
    sortItems(items)
    return items
  },
  products(state): Product[] {
    return state.products
  },
  findProduct(state, getters): Function {
    return (id): Product => {
      return getters.products.find(r => r.id === id)
    }
  },
} as GetterTree<BooksState, RootState>
