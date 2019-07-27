import { IUser } from 'src/types/_interfaces'

export function setUser ({ commit }, value: IUser) {
  commit('SET_USER', value)
}
