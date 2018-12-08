<template>
  <div>
    <nav class="navbar has-shadow is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" :to="{ name: 'index' }">
          <span class="site-title">時間泥棒の誘惑</span>
        </nuxt-link>
        <!-- navbar-burger is visible on mobile/tablet only -->
        <div class="navbar-burger" @click="isVisibleMenu = !isVisibleMenu" aria-label="menu" aria-expanded="false">
          <span />
          <span />
          <span />
        </div>
      </div>
      <!-- navbar-menu is visible on desktop only -->
      <div class="navbar-menu">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <div class="navbar-burger is-desktop" @click="isVisibleMenu = !isVisibleMenu" aria-label="menu" aria-expanded="false">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </nav>

    <div class="drawer-overlay" v-show="isVisibleMenu" @click="isVisibleMenu = false"></div>
    <transition name="drawer-menu">
      <nav class="drawer-menu" v-show="isVisibleMenu" @click="isVisibleMenu = false">
        <div class="panel" >
          <p class="panel-heading">本・漫画</p>
          <nuxt-link class="panel-block" :to="{ name: 'index', query: { tab: 'book' } }">
            新刊
          </nuxt-link>
          <nuxt-link class="panel-block" :to="{ name: 'books', params: { blockBack: true } }">
            タイトル/作者
          </nuxt-link>
        </div>
        <div class="panel" >
          <p class="panel-heading">音楽</p>
          <nuxt-link class="panel-block" :to="{ name: 'index', query: { tab: 'music' } }">
            新作
          </nuxt-link>
          <nuxt-link class="panel-block" :to="{ name: 'musics', params: { blockBack: true } }">
            アーティスト
          </nuxt-link>
        </div>
        <div class="panel" >
          <p class="panel-heading">映像</p>
          <nuxt-link class="panel-block" :to="{ name: 'index', query: { tab: 'movie' } }">
            新作
          </nuxt-link>
          <nuxt-link class="panel-block" :to="{ name: 'movies', params: { blockBack: true } }">
            作品
          </nuxt-link>
        </div>
        <div class="panel settings">
          <p class="panel-heading">設定・その他</p>
          <nuxt-link class="panel-block" :to="{ name: 'settings', params: { blockBack: true } }">
            ログアウト
          </nuxt-link>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'nuxt-property-decorator'

@Component
export default class NavHeader extends Vue {
  isVisibleMenu: boolean = false

  signOut(): void {}
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/config/_variables.scss';
@import '~/assets/stylesheets/modules/_overlay.scss';

.site-title {
  font-size: 20px;
}

.navbar-burger {
  &.is-desktop {
    display: block;
  }
}

.drawer-menu {
  background-color: $background;
  width: 15em;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  padding: 1em 1em;

  .panel-block {
    border-bottom: 1px solid $primary;
    border-left: 1px solid $primary;
    border-right: 1px solid $primary;
  }

  .panel-heading {
    border: 1px solid $accent;
    font-size: 16px;
    background: $accent;
    color: $accent-invert;
    font-weight: 500;
    padding: 0.3em 0.75em;
  }

  .settings {
    font-size: 14px;

    .panel-heading {
      background: rgba($accent, 0.7);
      color: $accent-invert;
    }
  }
}

.drawer-overlay {
  @include overlay(rgba(0, 0, 0, 0.5), 1040);
}

.drawer-menu-enter-active,
.drawer-menu-leave-active {
  transition: all 250ms ease-in-out;
}

.drawer-menu-enter,
.drawer-menu-leave-to {
  transform: translateX(20em);
  opacity: 0;
}
</style>
