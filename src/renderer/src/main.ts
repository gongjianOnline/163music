import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from "./routes/index"
import 'element-plus/dist/index.css'

import {createPinia} from "pinia"
const store = createPinia();


createApp(App)
.use(router)
.use(ElementPlus)
.use(store)
.mount('#app')
