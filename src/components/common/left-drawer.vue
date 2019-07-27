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
        src="statics/abstract-blue-background.jpg"
        style="height: 93px;"
      )
        .absolute-bottom-right.text-caption.text-weight-light(
          style="height:22px; padding: 0 7px;"
        )
            q-icon.q-mr-xs(name='mdi-account-circle-outline')
            | profile
        div.row.absolute-top.bg-transparent
          .col-3
            q-btn.shadow-2(round size='lg')
              q-avatar
                img(src="statics/nzxtua.png")

          .col-9.vertical-middle.q-pl-xs.text-grey-8
            div.text-weight-bold {{ user.name }}
            div.text-caption {{ user.email }}
            div.text-caption {{ user.phone }}

      .flex.flex-center.absolute-bottom.q-my-sm
        locale-switcher
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const Layout = namespace('layout')
const Profile = namespace('profile')

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
  @Profile.State('user') user

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
