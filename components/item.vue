<template>
  <div>
    <div class="">
      <p class="release-date has-text-grey">
        <span v-if="value.releaseDate">{{ value.releaseDate | formatDate }}</span>
        <span v-else>未定</span>
      </p>
    </div>
    <div class="card" v-if="value">
      <div class="card-content">
        <div class="content has-text-centered">
          <img :src="value.image | suitableImage(300)" class="img-responsive" :alt="value.title || value.creators[0]" />
          <div class="">
            <nuxt-link :class="{ 'is-inactive': listRoute.inactive }" :to="listRoute">
              <span>{{value.title}}<br/></span>
              <br v-if="value.title && value.creators.length > 0" />
              <div v-for="(creator, i) in value.creators" :key="creator">
                <span>{{ creator }}</span>
                <span v-if="i !== value.creators.length - 1">/</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item shop-logo-box">
          <a class="shop-logo" href="" target="_blank">
            amazon
          </a>
        </div>
        <div class="card-footer-item shop-logo-box">
          <a class="shop-logo" href="" target="_blank">
            楽天
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import Item from '@/models/item'

@Component
export default class ItemView extends Vue {
  @Prop()
  value!: Item // !で必須値だがinjectされるのでcheckはdisabled.
  @Prop({ default: () => ({ inactive: true }) })
  listRoute: object
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/config/_variables.scss';

.release-date {
  padding-left: 0.3rem;
  font-size: 18px;
  font-weight: bold;
}

.shop-logo-box {
  padding: 8px 12px;
}

.shop-logo {
  width: 100%;
  text-align: center;
  color: $grey-dark;
}
</style>
