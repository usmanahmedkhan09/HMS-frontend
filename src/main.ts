import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import UI, { BaseTheme } from '@indielayer/ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(UI, {
    theme: BaseTheme,
})

app.mount('#app')
