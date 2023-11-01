import { describe, expect, it } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { mount } from '@vue/test-utils'
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

  it('can check the label content', () => {
    const wrapper = mount(AppInput, {
      propsData: {
        label: 'test'
      }
    })
    const input = wrapper.findComponent(QInput)

    expect(input.componentVM.label).toEqual('test')
  })

  it('can check the outlined content', () => {
    const wrapper = mount(AppInput, {
      propsData: {
        outlined: true
      }
    })
    const input = wrapper.findComponent(QInput)

    expect(input.componentVM.outlined).toEqual(true)
  })

  it('can check the rules content equal string', () => {
    const wrapper = mount(AppInput, {
      propsData: {
        rules: [ false || 'false check']
      }
    })
    const input = wrapper.findComponent(QInput)

    expect(input.componentVM.rules[0]).toEqual('false check')
  })

  it('can check the rules content equal true', () => {
    const wrapper = mount(AppInput, {
      propsData: {
        rules: [ true || 'false check']
      }
    })
    const input = wrapper.findComponent(QInput)

    expect(input.componentVM.rules[0]).toEqual(true)
  })

  it('can check the type content', () => {
    const wrapper = mount(AppInput, {
      propsData: {
        type: 'password'
      }
    })
    const input = wrapper.findComponent(QInput)

    expect(input.componentVM.type).toEqual('password')
  })
})
