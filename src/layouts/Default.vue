<template lang="pug">
  q-layout(view='lHh Lpr lFf')
    q-header(elevated reveal)
      q-toolbar
        q-btn(
          flat
          round
          @click='setDrawer(!drawer)'
          aria-label='Menu'
        )
          burger-button(
            :bar-color='drawer ? "#FF554C" : "#FFFFFF"'
            :bar-height='4'
            :bar-width='25'
            :active='drawer'
          )

        q-toolbar-title
          span.title.text-weight-thin.cursor-pointer(exact to='/') Quasar Starter
          q-badge.glossy.q-ml-sm.text-grey-9(transparent color='grey-3' align='top') v{{ $q.version }}

        //- locale-switcher
        q-btn(
          flat
          round
        )
          q-icon(name='mdi-login-variant')

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
