import { GetterTree } from 'vuex'
import RootState from '@/models/state'
import BooksState from '@/models/books/state'
import Item from '@/models/item'
import Constant from '@/models/constant'
import compareAsc from 'date-fns/compare_asc'
import { sortItems } from '@/store/-helpers'

export default {} as GetterTree<BooksState, RootState>
