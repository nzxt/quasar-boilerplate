import { TLocale } from 'src/i18n/locales'

interface IState {
  drawer: Boolean
  locale: TLocale
}

export const state: IState = {
  drawer: false,
  locale: null
}
