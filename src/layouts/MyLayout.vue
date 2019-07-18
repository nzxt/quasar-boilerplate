<template lang='pug'>
  q-layout(view='lHh Lpr lFf')
    q-header(elevated)
      q-toolbar
        q-btn(flat dense round @click='leftDrawerOpen = !leftDrawerOpen' aria-label='Menu')
          q-icon(name='mdi-menu')

        q-toolbar-title
          | Quasar App

        div Quasar v{{ $q.version }}

    q-drawer(v-model='leftDrawerOpen' bordered content-class='bg-grey-2')
      q-list
        q-item-label(header) Essential Links

        q-item(clickable exact to='/')
          q-item-section(avatar)
            q-icon(name='mdi-school').
          q-item-section
            q-item-label Index Page
            q-item-label(caption) Go to Index Page

        q-item(clickable tag='a' target='_blank' href='https://github.quasar.dev')
          q-item-section(avatar)
            q-icon(name='mdi-github-circle').
          q-item-section
            q-item-label Github
            q-item-label(caption) github.com/quasarframework

        q-item(clickable tag='a' target='_blank' href='https://chat.quasar.dev')
          q-item-section(avatar)
            q-icon(name='mdi-chat').
          q-item-section
            q-item-label Discord Chat Channel
            q-item-label(caption) chat.quasar.dev

    q-page-container
      router-view
</template>

<script lang="ts">
import { openURL } from 'quasar'

import Vue from 'vue'

export default Vue.extend({
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
})
</script>

<style>
</style>
