<template lang="pug">
    q-drawer(
      :value='drawer'
      @show='$emit("show")'
      @hide='$emit("hide")'
    )
      q-scroll-area#scroll-area
        q-list(padding)
          q-item-label(header)
            | Navigation

          q-item(
            exact
            v-ripple
            clickable
            @click='setMode(item.path); setDrawer(false)'
            v-for='item in navigation'
            :key='item.name'
          )
            q-item-section(avatar)
              q-icon.mdi-36px(:color='item.color' :name='item.icon')
            q-item-section
              q-item-label.text-subtitle1 {{ item.name }}
              q-item-label.text-grey-7(caption) {{ item.description }}

        q-list(padding)
          q-item-label(header)
            | Essential

          q-item(
            exact
            v-ripple
            clickable
            :to='item.path'
            v-for='item in essential'
            :key='item.name'
          )
            q-item-section(avatar)
              q-icon.mdi-24px(color='grey-7' :name='item.icon')
            q-item-section
              q-item-label.text-subtitle2 {{ item.name }}
              q-item-label.text-grey-7(caption) {{ item.description }}

      q-img.absolute-top(
        @click.native='$router.push("profile")'
        src="statics/material-bg.png"
        style="height: 100px;"
      )
        .absolute-bottom-right.text-caption(
          style="height:36px; padding:10px;"
        )
            q-icon.q-mr-xs(name='mdi-pencil')
            | edit
        div.row.absolute-top.bg-transparent
          .col-4
            q-avatar(size="56px")
              img(src="https://cdn.quasar.dev/img/boy-avatar.png")

          .col-8.vertical-middle
            div.text-weight-bold Deniz True
            div.text-caption molfar.devs@gmail.com
            div.text-caption +38 (096) 703-00-33

      .flex.flex-center.absolute-bottom.q-my-sm
        locale-switcher
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const Layout = namespace('layout')

import { Navigation } from 'src/assets/menu/navigation'
import { Essential } from 'src/assets/menu/essential'

@Component({
  components: {
    LocaleSwitcher: () => import('./locale-switcher.vue')
  }
})
export default class LeftDrawer extends Vue {
  @Prop({ default: false })
  readonly drawer!: Boolean

  @Layout.Action('setMode') setMode
  @Layout.Action('setDrawer') setDrawer

  navigation: any = Navigation
  essential: any = Essential
}
</script>

<style lang="stylus" scoped>
  #scroll-area
    height calc(100% - 100px)
    margin-top 100px
    border-right 1px solid #ddd
    color $grey-7
</style>
