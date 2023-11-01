import { describe, expect, it } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { mount, shallowMount } from '@vue/test-utils'
import { QIcon } from 'quasar'
import AppIcon from 'src/components/AppIcon/AppIcon.vue'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin()

describe('AppIcon', () => {
  it('has props', () => {
    const wrapper = mount(AppIcon, {
      propsData: {
        name: 'fas fa-check',
        size: '10px'
      }
    })
    const { vm } = wrapper

    expect(vm.name).toEqual('fas fa-check')
    expect(vm.size).toEqual('10px')
  })

  it('can check the text content', () => {
    const wrapper = shallowMount(AppIcon, {
      propsData: {
        name: 'test',
        size: '10px'
      }
    })
    const icon = wrapper.findComponent(QIcon)

    expect(icon.componentVM.name).toEqual('test')
  })

  it('can check the size content', () => {
    const wrapper = shallowMount(AppIcon, {
      propsData: {
        name: 'test',
        size: '10px'
      }
    })
    const icon = wrapper.findComponent(QIcon)

    expect(icon.componentVM.size).toEqual('10px')
  })

  it('can check the icon content', () => {
    const wrapper = shallowMount(AppIcon, {
      propsData: {
        name: 'fas fa-check',
        size: '10px'
      }
    })
    const icon = wrapper.findComponent(QIcon)

    expect(icon.componentVM.name).toBe('fas fa-check')
  })
})
