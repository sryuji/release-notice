<template>
  <section class="container">
    <div class="columns is-multiline">
      <div v-for="item in items" :key="item.title" class="column is-one-quarter">
        <item :value="item" type="release"></item>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
import Item from '@/components/item'

const booksModule = namespace('books')

@Component({
  components: { Item },
})
export default class Home extends Vue {
  @Getter('releaseItems')
  items

  beforeMount() {}
}
</script>
