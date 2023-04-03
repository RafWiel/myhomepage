import { describe, it, expect } from "vitest"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import { mount } from "@vue/test-utils"
import AppBar from "@/components/AppBar.vue"

describe("AppBar", () => {
  const vuetify = createVuetify({ components, directives })

  https://stackoverflow.com/questions/72350551/combination-of-vue-3-vuetify-3-vue-test-utils-results-in-could-not-find-in

  it('exists', () => {
    let el = document.createElement("div");
    el.setAttribute("data-app", true);
    document.body.appendChild(el);

    document.body.setAttribute('data-app', true)

    const wrapper = mount(AppBar, {
      global: {
        plugins: [vuetify],
      },
      props: {},
    })

    expect(wrapper.exists()).toBe(true);
  });

  // it("renders properly", () => {


  //   expect(wrapper.text()).toContain("Hello Vitest")
  // })
})

// import { mount } from "@vue/test-utils";
// import { describe, expect, it } from "vitest";
// import AppBar from "../components/AppBar.vue"
// import { createVuetify } from "vuetify"
// import * as components from "vuetify/components"
// import * as directives from "vuetify/directives"

// describe('AppBar', () => {
//   //let wrapper
//   //let vuetify

//   // beforeEach(() => {


//   //   //document.body.setAttribute('data-app', true)

//   //   // wrapper = mount(AppBar, {
//   //   //   vuetify,
//   //   // })
//   // })

//   // afterEach(() => {
//   //   wrapper.destroy();
//   // })

//   it('Mounts properly', async () => {
//     //const wrapper = mount(AppBar)
//     const vuetify = createVuetify({ components, directives })

//     document.body.setAttribute('data-app', true)

//     const wrapper = mount(AppBar, {
//       props: {},
//       global: {
//         plugins: [vuetify]
//       }
//   });
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
