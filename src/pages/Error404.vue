<template lang="pug">
  .fixed-center.text-center
    p.q-mb-lg
      img(
        src='~assets/sad.svg'
        style='width:30vw;max-width:150px;'
      )

    p.text-faded {{ $t('error404') }}
      strong.q-ml-xs (404)

    q-btn(
      color='secondary'
      style='width:200px;'
      @click='$router.push("/")'
     )
      q-icon(left name='mdi-reply-all')
      | {{ $t('button.back') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class PageError404 extends Vue {}
</script>
