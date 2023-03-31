import { mount, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'

import AppBar from '@/components/AppBar.vue'

describe('AppBar.vue', () => {
  let wrapper
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    
    document.body.setAttribute('data-app', true)

    wrapper = mount(AppBar, {
      vuetify,      
    })
  })

  afterEach(() => {
    wrapper.destroy();
  })

  it('exists', () => {
    expect(wrapper.exists()).toBe(true)
  })

  // it('renders components', () => {
  //   expect(wrapper.findComponent({ref: 'search'}).exists()).toBe(true)
  // })

  // it('renders parameter from query', () => {
  //   expect(wrapper.findComponent({ref: 'search'}).props('value')).toBe($route.query.search)
  // })

  // it('emits filter on search change', async () => {
  //   await wrapper.findComponent({ref: 'search'}).get('input').setValue('test')

  //   expect(wrapper.emitted().filter).toBeTruthy()
  // })
});