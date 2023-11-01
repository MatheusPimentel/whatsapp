import { describe, expect, it } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { mount, shallowMount } from '@vue/test-utils'
import { QBtn } from 'quasar'
import AppButton from 'src/components/AppButton/AppButton.vue'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin();

describe('AppButton', () => {
  window.app = {
    config: {
      globalProperties: {
        $q: {
          dark: {
            isActive: false
          }
        }
      }
    }
  }

  it('has props', () => {
    const wrapper = mount(AppButton, {
      propsData: {
        label: 'test',
        color: 'red',
        outlined: true,
        round: true,
        icon: 'icon',
        size: null,
        style: null
      }
    })
    const { vm } = wrapper

    expect(vm.label).toEqual('test')
    expect(vm.color).toEqual('red')
    expect(vm.outlined).toEqual(true)
    expect(vm.round).toEqual(true)
    expect(vm.icon).toEqual('icon')
    expect(vm.size).toEqual(null)
    expect(vm.style).toEqual(null)
  })

  it('has getOutlined computed', () => {
    const wrapper = mount(AppButton)
    const { vm } = wrapper

    expect(typeof vm.getOutlined).toBe('boolean')
  })

  it('can check the text content', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        label: 'test'
      }
    })
    const button = wrapper.findComponent(QBtn)

    expect(button.componentVM.label).toEqual('test')
  })

  it('can check the color content', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        color: 'red'
      }
    })
    const button = wrapper.findComponent(QBtn)

    expect(button.componentVM.color).toEqual('red')
  })

  it('can check the outlined content', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        outline: true
      }
    })
    const button = wrapper.findComponent(QBtn)

    expect(button.componentVM.outline).toEqual(true)
  })

  it('can check the round content', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        round: true
      }
    })
    const button = wrapper.findComponent(QBtn)

    expect(button.componentVM.round).toEqual(true)
  })

  it('can check the size content', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        size: null
      }
    })
    const button = wrapper.findComponent(QBtn)

    expect(button.componentVM.size).toEqual(null)
  })

  it('can check the icon content', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        icon: 'fas fa-check'
      }
    })
    const button = wrapper.findComponent(QBtn)

    expect(button.componentVM.icon).toEqual('fas fa-check')
  })

  it('can check the style content', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        style: { width: '30px' }
      }
    })
    const button = wrapper.findComponent(QBtn)

    expect(button.wrapperElement.style._values).toEqual({ width: '30px' })
  })

  it('check the event was trigged', async () => {
    const wrapper = shallowMount(AppButton)

    const button = wrapper.findComponent(QBtn)
    await button.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
