

import { createRouter,createWebHashHistory } from 'vue-router'
import Layout from "../pages/layout.vue";
import Home from "../pages/home.vue";

const routes = [
  { 
    path: '/', 
    component: Layout,
    children:[
      {
        path:"/",
        component:Home
      }
    ] 
  },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router;

