import { boot } from 'quasar/wrappers'
import * as components from 'src/components'

export default boot(({ app }) => {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key])
  })
})
