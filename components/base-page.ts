import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { State, Getter, Action, Mutation } from 'vuex-class'
import { Route } from 'vue-router'

interface WithRoute {
  $route: Route
}

@Component({})
export default class BasePage extends Vue implements WithRoute {
  @Mutation('setSSR')
  public setSSR
  @State('ssr')
  public ssr: boolean

  public created() {
    if (process.server) {
      this.setSSR(true)
    }
  }
  public beforeRouteLeave(to, from, next) {
    this.setSSR(false)
    next()
  }

  public get canBack(): boolean {
    return !this.ssr && !this.$route.params.blockBack
  }

  public saveQuery(parameters): void {
    this.$router.replace({ query: parameters })
  }

  public restoreQuery(parameters): void {
    const query = this.$route.query
    Object.keys(query).forEach(key => {
      this.$set(parameters, key, query[key])
    })
  }
}
