<template>
  <section class="container">
    <back :history="canBack" :route="{ name: 'index', query: { tab: 'music' }}"></back>
    <div class="title-bar title">
      <div>
        <h1 class="is-size-3">タイトル/作者</h1>
      </div>
      <div class="buttons">
        <a class="button is-invert-accent" href="" @click.prevent="openForm(null)">
          <i class="fas fa-plus-circle"></i>
        </a>
      </div>
    </div>
    <div class="columns is-multiline">
      <div v-for="product in products" :key="product.id" class="column is-one-quarter">
        <product :value="product" @edit="openForm(product)"></product>
      </div>
    </div>
    <jump-top></jump-top>
    <form-modal v-if="formModal.active" v-bind="formModal" @close="formModal.active = false"></form-modal>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
import Product from '@/components/product.vue'
import BasePage from '@/components/base-page'
import Back from '@/components/back.vue'
import JumpTop from '@/components/jump-top.vue'
import FormModal from './-form-modal.vue'
import ProductModel from '@/models/product'

const booksModule = namespace('books')

@Component({
  components: { Product, Back, JumpTop, FormModal },
})
export default class Books extends BasePage {
  @booksModule.Getter('products')
  products
  formModal = { active: false, id: null }

  async openForm(product: ProductModel) {
    this.formModal.id = product && product.id
    this.formModal.active = true
  }
}
</script>

<style lang="scss" scoped>
</style>
