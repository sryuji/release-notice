import { GetterTree } from 'vuex'
import RootState from '@/models/state'
import BooksState from '@/models/books/state'
import Item from '@/models/item'
import Constant from '@/models/constant'
import compareAsc from 'date-fns/compare_asc'
import { sortItems } from '~/assets/javascripts/modules/data-helpers'

export default {
  releaseItems(state, getters): Item[] {
    const items = [].concat(getters['books/releaseItems'])
    sortItems(items)
    return items
  },
} as GetterTree<BooksState, RootState>
