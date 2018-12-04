import { GetterTree } from 'vuex'
import RootState from '@/models/state'
import BooksState from '@/models/books/state'
import Item from '@/models/item'
import { sortItems } from '@/assets/javascripts/modules/data-helpers'

export default {
  releaseItems(state): Item[] {
    const items = state.products.reduce((result, r): Item[] => {
      result.push(...r.items)
      return result
    }, [])
    sortItems(items)
    return items
  },
} as GetterTree<BooksState, RootState>
