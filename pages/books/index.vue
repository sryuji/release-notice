<template>
  <section class="container">
    <back :history="canBack" :route="{ name: 'index', query: { tab: 'music' }}"></back>
    <div class="title-bar title">
      <div>
        <h1 class="is-size-3">タイトル/作者</h1>
      </div>
      <div class="buttons">
        <a class="button is-invert-accent" href="" @click.stop.prevent="">
          <i class="fas fa-plus-circle"></i>
        </a>
      </div>
    </div>
    <div class="columns is-multiline">
      <div v-for="product in products" :key="product.id" class="column is-one-quarter">
        <product :value="product"></product>
      </div>
    </div>
    <jump-top></jump-top>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
import Product from '@/components/product.vue'
import BasePage from '@/components/base-page'
import Back from '@/components/back.vue'
import JumpTop from '@/components/jump-top.vue'

const booksModule = namespace('books')

@Component({
  components: { Product, Back, JumpTop },
})
export default class Books extends BasePage {
  @booksModule.Getter('products')
  products

  beforeMount() {}

  head() {
    return {
      title: 'タイトル/作者',
      meta: [],
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
