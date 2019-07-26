import { TLocale } from 'src/i18n/locales'

export function setDrawer ({ commit }, value: Boolean) {
  commit('SET_DRAWER', value)
}

export function setLocale ({ commit }, value: TLocale) {
  commit('SET_LOCALE', value)
}
