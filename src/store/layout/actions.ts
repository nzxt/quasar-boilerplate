import { TLocale } from "src/types/_interfaces"

export function setDrawer ({ commit }, value: Boolean) {
  commit('SET_DRAWER', value)
}

export function setLocale ({ commit }, value: TLocale) {
  commit('SET_LOCALE', value)
}
