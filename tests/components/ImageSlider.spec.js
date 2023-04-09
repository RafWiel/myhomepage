import { describe, it, expect, beforeEach } from "vitest"
import { createVuetify } from "vuetify"
import { VApp } from "vuetify/components";
import { h } from "vue";
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { mount } from "@vue/test-utils"
import ImageSlider from "@/components/ImageSlider.vue"

describe("ImageSlider", () => {
  let wrapper;
  const vuetify = createVuetify({ components, directives })

  const images = new Array(
    'home/home_1.jpg',
    'home/home_2.jpg',
    'home/home_3.jpg',
  )

  beforeEach(() => {
    wrapper = mount(VApp, {
      slots: {
        default: h(ImageSlider), //workaround to have component inside <v-app> tag
      },
      global: {
        plugins: [vuetify],
      },
      props: {
        images,
        text: 'test123'
      },
    })
  });

  it('exists', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('loads props images', () => {
    expect(wrapper.props().images).toBe(images)
  })

  it('loads props string', () => {
    expect(wrapper.props().text).toBe('test123')
  })
})

