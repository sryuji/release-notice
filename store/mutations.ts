import { MutationTree } from 'vuex'
import RootState from '@/models/state'

export default {
  setSSR(state, flag) {
    state.ssr = flag
  },
} as MutationTree<RootState>
