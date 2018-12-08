<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import Product from '@/models/product'
import ProductQuery from '@/models/product-query'
import BaseForm from '@/components/base-form'
import { ProductType } from '@/models/enums.ts'

@Component({
  components: {},
})
export default class BooksSettingModal extends BaseForm {
  @Prop()
  value!: Product

  created() {
    if (!this.value) {
      this.value = {
        id: null,
        type: ProductType.Book,
        updatedAt: null,
        query: { title: '', creator: '', genre: '' },
        items: [],
      }
    }
  }

  get query(): ProductQuery {
    return this.value.query
  }
}
</script>

<style lang="scss" scoped>
</style>
