import { describe, expect, it } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { mount, shallowMount } from '@vue/test-utils'
import { QInput } from 'quasar'
import AppInput from 'src/components/AppInput/AppInput.vue'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin();

describe('AppInput', () => {
  it('has props', () => {
    const wrapper = mount(AppInput, {
      propsData: {
        value: null,
        label: 'label',
        outlined: true,
        rules: null
      }
    })
    const { vm } = wrapper

    expect(vm.value).toEqual(null)
    expect(vm.label).toEqual('label')
    expect(vm.outlined).toEqual(true)
    expect(vm.rules).toEqual(null)
    expect(vm.type).toEqual('text')
  })

  it('can check the value content', () => {
    const wrapper = mount(AppInput, {
      propsData: {
        value: 'test'
      }
    })
    const input = wrapper.findComponent(QInput)

    expect(input.componentVM.modelValue).toEqual('test')
  })
})
