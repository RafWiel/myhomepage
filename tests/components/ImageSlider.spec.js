import { describe, it, expect, beforeEach } from "vitest"
import { createVuetify } from "vuetify"
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
    wrapper = mount(ImageSlider, {
      global: {
        plugins: [vuetify],
      },
      props: {
        images
      },
    })
  });

  it('exists', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('loads props images', () => {
    expect(wrapper.props().images).toStrictEqual(images)
  })
})

