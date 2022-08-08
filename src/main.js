import { createApp } from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { dictList } from '@/api'

window.axios = axios

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
console.log(router, app)
router.beforeEach((to, from, next) => {
  dictList().then(res => {
    if (res.success) {
      console.log(res.data)
    } else {
      next(false)
    }
  }).catch(err => {
    next(false)
  })
})
