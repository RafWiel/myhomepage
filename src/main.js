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
})

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')
