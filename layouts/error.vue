<template>
  <!-- このlayoutはapiではなく、nuxt側でerrorが発生した時に使われる -->
  <div class="container">
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
    <h1 v-else>エラーが発生しました</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
}
</script>
