import { describe, expect, it } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { mount } from '@vue/test-utils'
import App from 'src/App.vue'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin()

describe('App', () => {
  it('component initialization', () => {
    const wrapper = mount(App)

    expect(typeof wrapper === 'object').toBeTruthy()
  })
})
