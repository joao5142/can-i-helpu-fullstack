import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppBox from '@/components/ui/AppBox.vue'

const wrapper = mount(AppBox, {
  slots: {
    default: 'Texto',
  },
})

describe('AppBox', () => {
  it('should render correctly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should be able to see slot on screen', () => {
    expect(wrapper.html()).toContain('Texto')
  })
})
