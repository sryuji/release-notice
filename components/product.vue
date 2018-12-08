<template>
  <div>
    <div class="card" v-if="value">
      <div class="card-content">
        <div class="content has-text-centered">
          <img :src="value.image | suitableImage(300)" class="img-responsive" :alt="query.title || query.creator" />
          <div>
            <span v-if="query.title">{{query.title}}<br/></span>
            <br v-if="query.title && query.creator" />
            <span v-if="query.creator">{{ query.creator }}</span>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <nuxt-link class="" :to="listRoute">
            一覧
          </nuxt-link>
        </div>
        <div class="card-footer-item">
          <a href="" @click.stop.prevent="openSettingModal">
            設定
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import ProductQuery from '@/models/product-query'
import Product from '@/models/product'
import { ProductType } from '@/models/enums'

@Component
export default class ProductView extends Vue {
  @Prop()
  value!: Product
  settingModal = { active: false }

  get query(): ProductQuery {
    return this.value.query
  }
  get listRoute(): object {
    if (!this.value.type) return null
    switch (this.value.type as ProductType) {
      case ProductType.Book:
        return { name: 'books-id', params: { id: this.value.id } }
      case ProductType.Music:
        return { name: 'musics-id', params: { id: this.value.id } }
      case ProductType.Movie:
        return { name: 'movies-id', params: { id: this.value.id } }
    }
    return null
  }

  openSettingModal(): void {
    this.settingModal.active = true
  }
}
</script>

<style lang="scss" scoped>
</style>
