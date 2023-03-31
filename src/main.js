import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn } from 'vuetify/components'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  aliases: {
    VBtnMenu: VBtn,
  },
  defaults: {
    VBtn: {
      color: '#4388c4',
      variant: 'flat',
    },
    VBtnMenu: {
      color: '#2c4e6b',
      variant: 'text',
    },
  },
  // icons: {
  //   defaultSet: 'mdi',
  //   aliases,
  //   sets: {
  //     mdi,
  //   }
  // },
})

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')
