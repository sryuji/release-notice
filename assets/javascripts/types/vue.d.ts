import Vue from 'vue'

declare module '*.vue' {
  const _default: Vue
  export default _default
}

// https://jp.vuejs.org/v2/guide/typescript.html
declare module 'vue/types/vue' {
  interface Vue {
    $modal: {
      open(props: object): void
    }
  }
}
