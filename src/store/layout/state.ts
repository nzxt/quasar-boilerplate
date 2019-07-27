import { TLocale } from "src/types/_interfaces"

interface IState {
  drawer: Boolean
  locale: TLocale
}

export const state: IState = {
  drawer: false,
  locale: null
}
