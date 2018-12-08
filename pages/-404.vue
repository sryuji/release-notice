<template>
  <section class="container">
    <h1 class="is-size-4">ページが見つかりません</h1>
    <br/>
    <div class="columns">
      <div class="column">
      <nuxt-link class="is-size-5" :to="{ name: 'index' }">TOPへ戻る</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'

@Component
export default class NotFound extends Vue {}
</script>
