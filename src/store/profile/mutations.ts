import { IUser } from 'src/types/_interfaces'

export function SET_USER (state, value: IUser) {
  state.user = value
}
