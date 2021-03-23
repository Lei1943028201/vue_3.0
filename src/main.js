import { createApp } from 'vue'
import './assets/css/reset.css'
import './assets/css/animation.less'
import './assets/css/common.less'
import './assets/icon/iconfont.js'
import router from './router/index.js'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
