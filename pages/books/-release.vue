<template>
  <section class="container">
    <div class="title-bar title">
      <h1 class="is-size-3">新刊</h1>
      <div class="buttons links">
        <a class="button is-invert-accent" href @click.stop.prevent>
          <i class="fas fa-sync-alt"></i>
        </a>
        <a class="button is-invert-accent" @click.stop.prevent="openForm(null)">
          <i class="fas fa-plus-circle"></i>
        </a>
        <nuxt-link class="button is-invert-accent" :to="{ name: 'books' }">
          <i class="fas fa-list-ul">
          </i>
        </nuxt-link>
      </div>
    </div>
    <div class="columns is-multiline">
      <div v-for="item in items" :key="item.title" class="column is-one-quarter">
        <item :value="item" :list-route="{ name: 'books-id', params: { id: item.productId } }"></item>
      </div>
    </div>
    <form-modal v-if="formModal.active" v-bind="formModal" @close="formModal.active = false"></form-modal>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
import Item from '@/components/item.vue'
import FormModal from './-form-modal.vue'
import Product from '@/models/product'
import { ProductType } from '@/models/enums'

const booksModule = namespace('books')

@Component({
  components: { Item, FormModal },
})
export default class BooksRelease extends Vue {
  @booksModule.Getter('releaseItems')
  items
  formModal = { active: false, id: null }

  beforeMount() {}

  async openForm(product: Product) {
    this.formModal.id = product && product.id
    this.formModal.active = true
  }
}
</script>

<style lang="scss" scoped>
</style>
