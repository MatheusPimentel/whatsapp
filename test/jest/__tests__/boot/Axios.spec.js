import { describe, it } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { config } from '@vue/test-utils'
import { default as axios, api } from 'boot/axios'


installQuasarPlugin()

describe('Axios', () => {
  it('API must exists', () => {
    expect(typeof api.request === 'function').toBeTruthy()
  })

  it('insert global properties of axios and api', () => {
    config.globalProperties = {}
    const app = {
      config
    }
    axios({ app })
    expect(typeof app.config.globalProperties.$axios === 'function' &&
      typeof app.config.globalProperties.$api === 'function').toBeTruthy()
  })
})
