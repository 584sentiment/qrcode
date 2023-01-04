import Cookies from 'js-cookie'
// ...
export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh',
  // ...
})
// ...
export const mutations = {
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      Cookies.set('lang', locale)
    }
  },
  // ...
}
