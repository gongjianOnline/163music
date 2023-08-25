

import { createRouter,createWebHashHistory } from 'vue-router'
import Layout from "../pages/layout.vue";
import Home from "../pages/home.vue";
import SongSheet from "../pages/songSheet.vue"
import Choice from "../pages/choice.vue";
import ChoiceIndex from "../components/choice/index.vue";
import ChoiceSquare from "../components/choice/square.vue";
import ChoiceRanking from "../components/choice/ranking.vue";
import ChoiceSinger from "../components/choice/singer.vue";
import ChoiceVIP from "../components/choice/vipComponent.vue";

const routes = [
  { 
    path: '/', 
    component: Layout,
    children:[
      {
        path:"/",
        name:"home",
        component:Home
      },
      {
        path:"/songSheet",
        name:"SongSheet",
        component:SongSheet
      },
      {
        path:"/choice",
        name:"Choice",
        component:Choice,
        redirect: { name: "ChoiceIndex" },
        children:[
          {
            path:"",
            name:'ChoiceIndex',
            component:ChoiceIndex
          },
          {
            path:"/choiceSquare",
            name:"ChoiceSquare",
            component:ChoiceSquare
          },
          {
            path:"/choiceRanking",
            name:"ChoiceRanking",
            component:ChoiceRanking
          },
          {
            path:"/choiceSinger",
            name:"ChoiceSinger",
            component:ChoiceSinger
          },
          {
            path:"/choiceVIP",
            name:"ChoiceVIP",
            component:ChoiceVIP
          },
          
        ]
      },
    ] 
  },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router;

