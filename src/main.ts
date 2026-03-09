import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { router } from '@/router/router.ts'

const app = createApp(App)

app
  .use(createPinia())
  .use(
    createVuetify({
      components,
      directives,
    }),
  )
  .use(router)

app.mount('#app')
