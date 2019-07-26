/// for when you don't specify quasar.conf.js > framework: 'all'
// import { Quasar } from 'quasar'
// OTHERWISE:
import Quasar from 'quasar'

export default async () => {
  // const langIso = 'en-us' // ... some logic to determine it (use Cookies Plugin?)
  let langIso
  const locale = Quasar.lang.getLocale().toLowerCase()

  switch (locale) {
    case 'uk-ua':
    case 'ru-ua':
      langIso = 'uk'
      break
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
