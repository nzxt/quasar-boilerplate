<template lang="pug">
  q-layout(view='lHh Lpr lFf')
    q-header.bg-white(elevated reveal)
      q-toolbar
        q-btn(
          flat
          round
          @click='setDrawer(!drawer)'
          aria-label='Menu'
        )
          burger-button(
            :bar-color='drawer ? "#FF554C" : "#1976D2"'
            :bar-height='4'
            :bar-width='25'
            :active='drawer'
          )

        q-toolbar-title
          span.title.text-h5.text-weight-light.cursor-pointer(@click='$router.push("/")') Quasar Starter
          q-badge.q-ml-sm(glossy transparent text-color='grey-7' color='grey-3' align='top') v{{ $q.version }}

        //- locale-switcher
        q-btn(
          flat
          round
          @click='loggedIn = !loggedIn'
        )
          q-icon(
            color='grey-7'
            :name='loggedIn ? "mdi-logout-variant" : "mdi-login-variant"'
          )
          q-tooltip(
            :value="true"
            content-class='bg-primary'
            transition-show="flip-right"
            transition-hide="flip-left"
            anchor="center left"
            self="center right"
            :offset="[10, 10]"
          )
            | {{ loggedIn ? "Sign Out" : "Sign In" }}

    left-drawer(
      :drawer='drawer'
      @show='setDrawer(true)'
      @hide='setDrawer(false)'
    )

    q-page-container
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const Layout = namespace('layout')

@Component({
  components: {
    LocaleSwitcher: () => import('src/components/common/locale-switcher.vue'),
    LeftDrawer: () => import('src/components/common/left-drawer.vue'),
    BurgerButton: () => import('vue-burger-button')
  }
})
export default class LayoutDefault extends Vue {
  @Layout.State('drawer') drawer
  @Layout.Action('setDrawer') setDrawer

  loggedIn: Boolean = false

  created (): void {
    (this as any).$q.screen.gt.sm
      ? this.setDrawer(true)
      : this.setDrawer(false)
  }
}
</script>

<style lang="stylus" scoped>
  .title
    text-shadow 1px 1px 2px black
</style>
