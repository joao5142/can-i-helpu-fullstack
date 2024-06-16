import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppButton from '@/components/ui/AppButton.vue'

const wrapper = mount(AppButton, {
  slots: {
    default: 'Teste',
  },
  props: {
    disabled: true,
    outlined: true,
    full: true,
    isFab: true,
    rounded: true,
    borderColor: 'primary',
    color: 'blue-100',
    background: 'background',
    size: 'md',
    transparent: true,
    width: 25,
    height: 25,
    translucid: true,
  },
})

describe('AppBox', () => {
  it('should render correctly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should be able to see slot on screen', () => {
    expect(wrapper.html()).toContain('Teste')
  })

  it('should add class correctly based on props', () => {
    expect(wrapper.classes()).includes('button--disabled')
    expect(wrapper.classes()).includes('button--outlined')
    expect(wrapper.classes()).includes('button--full')
    expect(wrapper.classes()).includes('button--fab')
    expect(wrapper.classes()).includes('button--rounded')
    expect(wrapper.classes()).includes(`text-${wrapper.props().color}`)

    expect(wrapper.classes()).includes(`button--size-${wrapper.props().size}`)
    expect(wrapper.classes()).includes(`button--transparent`)
    expect(wrapper.classes()).includes(`button--width`)
    expect(wrapper.classes()).includes(`button--height`)
    expect(wrapper.classes()).includes(`button--translucid`)
  })

  it('should add background classes if outlined is disabled', () => {
    const wrapper = mount(AppButton, {
      props: {
        background: 'background',
      },
    })

    expect(wrapper.classes()).includes(`bg-${wrapper.props().background}`)
  })
})
