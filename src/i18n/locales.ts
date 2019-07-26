type TLocale = 'en-us' | 'uk' | 'ru' | null

interface ILocale {
  iso: TLocale
  flag: string
  name: string
}

const locales: ILocale[] = [
  {
    iso: 'en-us',
    flag: 'us',
    name: 'English'
  },
  {
    iso: 'uk',
    flag: 'ua',
    name: 'Українська'
  },
  {
    iso: 'ru',
    flag: 'ru',
    name: 'Русский'
  }
]


export { locales, TLocale, ILocale }
