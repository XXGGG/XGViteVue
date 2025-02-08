import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'  // 导入生成的路由

import '@unocss/reset/tailwind.css' //重置样式表
import 'uno.css' // 导入Unocss
import './style.css'

import { createHead } from '@unhead/vue'
const head = createHead() // 注册 @unhead/vue
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,  // 使用自动生成的路由
})

app.use(router)
app.use(createPinia()) //注册 Pinia
app.use(head)
app.mount('#app')