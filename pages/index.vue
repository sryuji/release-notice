<template>
  <section class="container">
    <b-tabs position="is-centered" v-model="tabIndex" @change="saveQuery({ tab: tabName })">
      <b-tab-item label="本" icon-pack="fas" icon="book-open"></b-tab-item>
      <b-tab-item label="音楽" icon-pack="fas" icon="music"></b-tab-item>
      <b-tab-item label="映像" icon-pack="fas" icon="video"></b-tab-item>
    </b-tabs>
    <component
      ref="section"
      :is="releaseComponentNames[tabIndex]"
      >
    </component>
    <jump-top></jump-top>
  </section>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import BasePage from '@/components/base-page.ts'
import BooksRelease from '@/pages/books/-release.vue'
import JumpTop from '@/components/jump-top.vue'
// import MusicsRelease from '@/pages/musics/-release.vue'
// import MoviesRelease from '@/pages/movies/-release.vue'

@Component({
  components: { BooksRelease, JumpTop },
})
export default class Home extends BasePage {
  private tabNames: string[] = ['book', 'music', 'movie']
  tabIndex: number = 0
  releaseComponentNames: string[] = ['booksRelease', 'booksRelease', 'booksRelease']

  created() {
    this.changeTabByRouting(this.$route)
  }

  get tabName(): string {
    return this.tabNames[this.tabIndex]
  }

  public head() {
    return {
      title: '',
      titleTemplate: '時間泥棒の誘惑',
      meta: [],
    }
  }

  private changeTabByRouting(route) {
    const tab = route.query.tab
    if (tab && tab !== this.tabName) {
      const i = this.tabNames.findIndex(name => name === tab)
      this.tabIndex = i < 0 ? 0 : i
    }
  }
}
</script>


<style lang="scss" scoped>
.b-tabs {
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>
