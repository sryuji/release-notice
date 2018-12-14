<template>
  <b-modal :active="active" has-modal-card :onCancel="close">
    <form @submit.prevent="" class="" v-if="product">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <span v-if="product.id">設定</span>
            <span v-else>追加</span>
          </p>
        </header>
        <section class="modal-card-body">
          <b-field label="タイトル">
            <b-input v-model="query.title" ></b-input>
          </b-field>

          <b-field label="作者">
            <b-input v-model="query.creator"></b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click.prevent="close">閉じる</button>
          <button class="button is-primary" @click.prevent="save">保存</button>
        </footer>
      </div>
    </form>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
import Product from '@/models/product'
import ProductQuery from '@/models/product-query'
import BaseForm from '@/components/base-form'
import { ProductType } from '@/models/enums.ts'
import { cloneObject } from '@/assets/javascripts/modules/object-functions.ts'
const booksModule = namespace('books')

@Component({
  components: {},
})
export default class BooksFormModal extends BaseForm {
  @Prop()
  id: string
  @Prop()
  active: boolean
  @booksModule.Getter('findProduct')
  findProduct
  @booksModule.Action('initProduct')
  initProduct
  @booksModule.Action('saveProduct')
  saveProduct
  product: Product = null

  async beforeMount() {
    this.product = this.id ? cloneObject(this.findProduct(this.id)) : await this.initProduct({ type: ProductType.Book })
  }

  get query(): ProductQuery {
    return this.product.query
  }

  close() {
    this.$emit('close')
  }
  save() {
    this.saveProduct({ product: this.product })
    this.close()
  }
}
</script>

<style lang="scss" scoped>
</style>
