import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppText from '@/components/ui/AppText.vue'

const wrapper = mount(AppText, {
  props: {
    as: 'p',
  },
  slots: {
    default: 'Texto',
  },
})

describe('AppText', () => {
  it('component should render correctly', () => {
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.html()).toContain('Texto')
  })
})
