import VueI18n from 'vue-i18n'
import messages from 'src/i18n'
import Quasar from 'quasar'

import { TLocale } from 'src/types/_interfaces'

export default async ({ app, Vue }) => {
  Vue.use(VueI18n)

  const locale: string = app.store.state.layout.locale || Quasar.lang.getLocale().toLowerCase()

  let langIso: TLocale
  switch (locale) {
    case 'uk':
    case 'uk-ua':
    case 'ru-ua':
      langIso = 'uk'
      break
    case 'ru':
    case 'uk-ru':
    case 'ru-ru':
      langIso = 'ru'
      break
    default:
      langIso = 'en-us'
  }

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: langIso,
    fallbackLocale: 'en-us',
    messages
  })
}
