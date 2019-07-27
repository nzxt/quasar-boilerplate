import { IUser } from 'src/types/_interfaces'

interface IState {
  user: IUser
}

export const state: IState = {
  user: {
    name: 'molfarDevs',
    email: 'molfar.devs@gmail.com',
    phone: '+38 (096) 703-00-33',
    birthday: '1985/01/31',
    avatar: 'statics/nzxtua.png'
  }
}
