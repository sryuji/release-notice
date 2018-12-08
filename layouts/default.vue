<template>
  <div>
    <header>
      <nav-header></nav-header>
    </header>
    <section class="main-content section">
      <keep-alive :include="/^index/">
        <nuxt />
      </keep-alive>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import NavHeader from '@/components/nav-header.vue'

@Component({
  components: { NavHeader },
})
export default class Default extends Vue {}
</script>

<style lang="scss">
@import '~assets/stylesheets/app';
</style>
