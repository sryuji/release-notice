<template>
  <div class="back is-size-5">
    <a href="javascript: void(0);" @click.prevent="back">
      <i class="fas fa-chevron-left"></i> 戻る
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Back extends Vue {
  @Prop()
  history: boolean
  @Prop()
  route: object

  back() {
    console.log('back')
    console.log(this.$route.params)
    if (this.history) {
      this.$router.back()
    } else {
      const route = Object.assign({ params: { blockBack: null } }, this.route)
      route.params.blockBack = true
      this.$router.replace(route)
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  margin-bottom: 1rem;
}
</style>
