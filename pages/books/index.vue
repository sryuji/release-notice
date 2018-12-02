<template>
  <section class="container">
    <div class="columns is-multiline">
      <div v-for="item in items" :key="item.title" class="column is-one-quarter">
        <item :value="item" type="product"></item>
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
export default class Books extends Vue {
  items: object[] = items
}
</script>
