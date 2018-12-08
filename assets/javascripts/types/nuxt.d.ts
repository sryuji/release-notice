import Vue from 'vue'
import { Store } from 'vuex'
import VueRouter, { Route } from 'vue-router'
import { MetaInfo } from 'vue-meta'

declare module 'vue/types/options' {
  interface ErrorParams {
    statusCode?: string
    message?: string
  }

  interface Context {
    app: Vue
    isClient: boolean
    isServer: boolean
    isStatic: boolean
    isDev: boolean
    isHMR: boolean
    route: Route
    store: Store<any>
    env: object
    query: Route['query']
    nuxtState: object
    req: Request
    res: Response
    params: Route['params']
    redirect(path: string, query?: Route['query']): void
    redirect(status: number, path: string, query?: Route['query']): void
    error(params: ErrorParams): void
    beforeNuxtRender({ Conmponents, nuxtState }: any): void
  }

  interface Transition {
    name?: string
    mode?: string
    css?: boolean
    duration?: number
    type?: string
    enterClass?: string
    enterToClass?: string
    enterActiveClass?: string
    leaveClass?: string
    leaveToClass?: string
    leaveActiveClass?: string
  }

  interface ComponentOptions<V extends Vue> {
    layout?: string | ((ctx: Context) => string)
    middleware?: string | string[]
    scrollToTop?: boolean
    transition?: string | Transition | ((to: Route, from: Route) => string)
    head?: MetaInfo | (() => MetaInfo)
    fetch?(ctx: Context): Promise<void> | void
    asyncData?(ctx: Context): object
    validate?(ctx: Context): Promise<boolean> | boolean
  }
}
