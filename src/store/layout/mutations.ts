import { TLocale } from "src/types/_interfaces"

export function SET_DRAWER (state, value: Boolean) {
  state.drawer = value
}

export function SET_LOCALE (state, value: TLocale) {
  state.locale = value
}
