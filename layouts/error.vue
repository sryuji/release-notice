<template>
  <!-- nuxt側でerrorが発生した時のみ使われる. 404はroutingで処理している -->
  <div class="container">
    <h1 class="is-size-4">
      <span v-if="error.statusCode === 404">ページが見つかりません</span>
      <span v-else>エラーが発生しました。</span>
    </h1>
    <br/>
    <div class="columns">
      <div class="column">
      <nuxt-link class="is-size-5" :to="{ name: 'index' }">TOPへ戻る</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'

@Component
export default class Error extends Vue {
  layout: string = 'default'
  @Prop()
  error: object
}
</script>

<style lang="scss">
@import '~assets/stylesheets/app';
</style>
