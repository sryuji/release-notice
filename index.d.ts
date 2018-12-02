declare module '*.vue' {
  import Vue from 'vue'
  const _default: Vue
  export default _default
}

declare namespace NodeJS {
  interface Process {
    server: boolean
    browser: boolean
  }
}
