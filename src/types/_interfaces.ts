export type TLocale = 'en-us' | 'uk' | 'ru' | null

export interface ILocale {
  iso: TLocale
  flag: string
  name: string
}

export interface IUser {
  name: string
  email: string
  phone: string
  birthday: string
}
