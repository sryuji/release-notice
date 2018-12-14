import { ActionTree } from 'vuex'
import RootState from '@/models/state'
import BooksState from '@/models/books/state'
import { ProductType } from '@/models/enums'
import Product from '@/models/product'
import { issueID } from '../-helpers/generators'

export default {
  async initProduct({ commit, dispatch, getters }, { type }) {
    return {
      id: null,
      type: type,
      updatedAt: null,
      query: { title: '', creator: '' },
      items: [],
    }
  },
  async saveProduct({ commit, dispatch, getters }, { product }) {
    if (product.id) {
      await dispatch('updateProduct', { product })
    } else {
      await dispatch('createProduct', { product })
    }
  },
  async createProduct({ commit, dispatch, getters }, { product }) {
    const uid = '1'
    const id = issueID(uid)
    commit('createProduct', { id, product })
  },
  async updateProduct({ commit, dispatch, getters }, { product }) {
    const dest = getters.findProduct(product.id)
    commit('updateProduct', { dest, product })
  },
} as ActionTree<BooksState, RootState>
