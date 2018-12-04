<template>
  <div>
    <div class="" v-if="isRelease">
      <p class="release-date has-text-grey">
        <span v-if="value.releaseDate">{{ value.releaseDate | formatDate }}</span>
        <span v-else>未定</span>
      </p>
    </div>
    <div class="card" v-if="value">
      <div class="card-content">
        <div class="content has-text-centered">
          <img :src="value.image | suitableImage(300)" class="img-responsive" :alt="value.title" />
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>{{value.title}}</span><br/>
          <div v-for="(creator, i) in value.creators" :key="creator">
            <span>{{ creator }}</span>
            <span v-if="i !== value.creators.length - 1">/</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
''
enum ItemType {
  Release = 'release',
  Product = 'product',
}

@Component
export default class Item extends Vue {
  @Prop()
  value!: object // !で必須値だがinjectされるのでcheckはdisabled.
  @Prop()
  type!: ItemType

  get isRelease(): boolean {
    return this.type === ItemType.Release
  }
  get isProduct(): boolean {
    return this.type === ItemType.Product
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/config/_variables.scss';

.release-date {
  padding-left: 0.3rem;
  font-size: 18px;
  font-weight: bold;
}
</style>
