<template lang="pug">
  q-page.flex.flex-center
    img(
      height='225px'
      alt="molfarDevs Logo"
      src="~assets/molfar-devs-vertical.svg"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class PageAbout extends Vue {}
</script>
