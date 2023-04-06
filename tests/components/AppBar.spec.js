import { describe, it, expect, beforeEach, vi } from "vitest"
import { createVuetify } from "vuetify"
import { VApp } from "vuetify/components";
import { h } from "vue";
import { useRouter } from 'vue-router'
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { mount } from "@vue/test-utils"
import AppBar from "@/components/AppBar.vue"

//https://runthatline.com/vitest-mock-vue-router/

vi.mock('vue-router')

describe("AppBar", () => {
  let wrapper;
  const vuetify = createVuetify({ components, directives })

  useRouter.mockReturnValue({
    push: vi.fn(),
  })

  beforeEach(() => {
    useRouter().push.mockReset()

    wrapper = mount(VApp, {
      slots: {
        default: h(AppBar), //workaround to have component inside <v-app> tag
      },
      global: {
        plugins: [vuetify],
      },
      props: {},
    })
  });

  it('exists', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('renders menu items', () => {
    expect(wrapper.text()).toContain('Firma')
    expect(wrapper.text()).toContain('Oferta')
    expect(wrapper.text()).toContain('Rozwiązania')
    expect(wrapper.text()).toContain('Realizacje')
  });

  it(`navigates 'home' after logo is clicked`, async () => {
    await wrapper.find('img').trigger('click')

    expect(useRouter().push).toHaveBeenCalledWith({
      name: 'home',
    })
  })

  it(`navigates 'about' after menu item is clicked`, async () => {
    await wrapper.find('[data-test-id="solutions"]').trigger('click')

    expect(useRouter().push).toHaveBeenCalledWith({
      name: 'solutions',
    })
  })

  //todo
  //mail click


  // it('renders submenu items', async () => {
  //   const button = wrapper.find('[data-testid="company"]')

  //   expect(button.exists()).toBe(true)
  //   await button.trigger("click")
  //   await wrapper.vm.$nextTick();

  //   const list = wrapper.find('[data-testid="companyItems"]')
  //   expect(list.exists()).toBe(true)
  // });


})




//     // vuetify = new Vuetify()
//     // wrapper = mount(AppBar, {
//     //   vuetify,
//     // })

//     expect(wrapper).toBeTruthy()
//     // expect(wrapper.text()).toContain('Documentation')

//     // const svg = wrapper.find('svg')
//     // expect(svg).toBeTruthy()

//     // const a = wrapper.find('a')
//     // const spyOnA = vi.spyOn(a, 'trigger')

//     // await a.trigger('click')
//     // expect(spyOnA).toHaveBeenCalledOnce()
//   })
// })



// import { mount, shallowMount } from '@vue/test-utils'
// import Vuetify from 'vuetify'

// import AppBar from '@/components/AppBar.vue'

// describe('AppBar.vue', () => {
//   let wrapper
//   let vuetify

//   beforeEach(() => {
//     vuetify = new Vuetify()

//     document.body.setAttribute('data-app', true)

//     wrapper = mount(AppBar, {
//       vuetify,
//     })
//   })

//   afterEach(() => {
//     wrapper.destroy();
//   })

//   it('exists', () => {
//     expect(wrapper.exists()).toBe(true)
//   })

//   // it('renders components', () => {
//   //   expect(wrapper.findComponent({ref: 'search'}).exists()).toBe(true)
//   // })

//   // it('renders parameter from query', () => {
//   //   expect(wrapper.findComponent({ref: 'search'}).props('value')).toBe($route.query.search)
//   // })

//   // it('emits filter on search change', async () => {
//   //   await wrapper.findComponent({ref: 'search'}).get('input').setValue('test')

//   //   expect(wrapper.emitted().filter).toBeTruthy()
//   // })
// });
