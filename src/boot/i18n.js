import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'pt-br',
    globalInjection: true,
    messages
  })

  // Set i18n instance on app
  app.i18n = i18n
  app.use(i18n)
  window.app = app
})
