<template>
  <section class="container">
    <back :history="canBack" :route="{ name: 'books' }"></back>
    <div class="title-bar title">
      <h1 class="is-size-3">
        {{query.title}}<span v-if="query.title && query.creator"> / </span>{{query.creator}}
      </h1>
      <div class="buttons links">
        <a class="button is-invert-accent" href="" @click.prevent.stop="">
          <i class="fas fa-sync-alt"></i>
        </a>
      </div>
    </div>
    <div class="columns is-multiline">
      <div v-for="item in items" :key="item.title" class="column is-one-quarter">
        <item :value="item"></item>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
import Back from '@/components/back.vue'
import Item from '@/components/item.vue'
import ProductQuery from '@/models/product-query'
import Product from '@/models/product'
import ItemModel from '@/models/item'
import BasePage from '@/components/base-page'

const booksModule = namespace('books')

@Component({
  components: { Item, Back },
})
export default class BooksId extends BasePage {
  id: string
  @booksModule.Getter('findProduct')
  findProduct

  constructor() {
    super()
  }

  created() {}

  get product(): Product {
    return this.findProduct(this.id)
  }
  get items(): ItemModel[] {
    return this.product ? this.product.items : []
  }
  get query(): ProductQuery {
    return this.product ? this.product.query : {}
  }

  async validate({ params, query, store, error }) {
    const id = params.id
    const product = store.getters['books/findProduct'](id)
    if (!product) {
      error({ statusCode: 404 })
      return false
    }
    return true
  }

  async asyncData({ params, error }) {
    return { id: params.id }
  }

  head() {
    return {
      title: this.query.title || this.query.creator,
      meta: [],
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
