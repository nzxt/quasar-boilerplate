/// for when you don't specify quasar.conf.js > framework: 'all'
// import { Quasar } from 'quasar'
// OTHERWISE:
import Quasar from 'quasar'
import { TLocale } from 'src/i18n/locales'

export default async ({ app }) => {
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

  try {
    await import(`quasar/lang/${langIso}`)
      .then(lang => {
        Quasar.lang.set(lang.default)
      })
  } catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
