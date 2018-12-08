<template>
  <div class="jump-icon has-background-link" :style="jumpIconStyle" @click="jumpTop"><i class="fa fa-angle-up"></i></div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'

@Component
export default class JumpTop extends Vue {
  @Prop()
  position: object

  get jumpIconStyle(): object {
    const position = this.position || { bottom: '5px', right: '5px' }
    return position
  }

  jumpTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.jump-icon {
  width: 45px;
  height: 45px;
  position: fixed;
  opacity: 0.6;
  border-radius: 50%;
  text-align: center;

  i {
    padding-top: 5px;
    font-size: 30px;
    color: #fff;
    font-weight: 1000;
  }
}
</style>
