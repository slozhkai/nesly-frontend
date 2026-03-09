import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from '@/router/router.ts'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(createPinia()).use(router).use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')
