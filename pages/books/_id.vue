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
import Item from '@/components/item'

let items: object[] = [
  {
    title: '信長のシェフ',
    image: '',
    creators: [],
    description: null,
  },
]

@Component({
  components: { Item },
})
export default class Book extends Vue {
  items: object[] = items

  // https://ja.nuxtjs.org/api/pages-validate/
  validate({ params }): boolean {
    return /^\d+$/.test(params.id)
  }
}
</script>
