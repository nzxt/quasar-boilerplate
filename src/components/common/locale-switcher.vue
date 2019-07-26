<template lang="pug">
  q-btn.lang-btn(rounded size='sm' color='transparent')
    flag.lang-flag(
      :iso='flagIso'
      :title='langName'
    )
    .q-mx-sm {{ langName }}
    q-icon(size='sm' name='mdi-menu-down')

    q-menu(
      fit
      anchor="bottom left"
      self="top left"
      transition-show='jump-down'
      transition-hide='jump-up'
    )
      q-list(dense)
        q-item.lang-item(
          clickable
          v-close-popup
          v-for='locale in locales'
          :key='locale.iso'
          @click='onLocaleSwitch(locale.iso)'
        )
          q-item-section(avatar)
            flag.lang-flag(
              :iso='locale.flag'
              :title='locale.name'
            )
          q-item-section
            | {{ locale.name }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import locales from 'src/i18n/locales'

@Component({})
export default class LocaleSwitcher extends Vue {
  locales: Array<any> = locales

  get langName () {
    return (this as any).$q.lang.nativeName
  }

  get flagIso () {
    const iso = (this as any).$q.lang.isoName
    return this.locales.find(x => x.iso === iso).flag
  }

  onLocaleSwitch (langIso) {
    this.$i18n.locale = langIso
    import(`quasar/lang/${langIso}`).then(lang => {
      (this as any).$q.lang.set(lang.default)
    })
    // this.$axios.defaults.headers.common['Accept-Language'] = locale.iso
    // document.querySelector('html').setAttribute('lang', locale.iso)
  }
}
</script>

<style scoped lang="stylus">
  .lang-btn
    min-width 146px

  .lang-flag
    font-size 18px
    border-radius 50%

  .lang-item
    >>> .q-item__section--avatar
     min-width 36px
</style>
