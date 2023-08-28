<template>
  <!-- logo模块 -->
  <div class="logoComponent">
    <svg class="icon musicLogo" aria-hidden="true">
      <use xlink:href="#icon-wangyiyunyinle-"></use>
    </svg>
  </div>

  <!-- 通用菜单 -->
  <div class="currentComponent"> 
    <div v-for="(item,index) in currentMenu" :key="index">
      <div class="rowComponent" 
        :class="{'rowComponentActive':index == currentMenuIndex}"
        @click="handelCurrentMenuClick(index,item)"
        v-if="item.text !== '分割'">
        <!-- 菜单 -->
        <div> 
          <svg class="icon currentIcon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </div>
        <div class="currentContent">{{item.text}}</div>
      </div>

      <!-- 分割线 -->
      <div v-if="item.text == '分割'" class="partition"></div>
    </div>
    

  </div>


  

</template>
<script lang="ts" setup>
import {reactive, ref} from "vue"
import { useRouter } from "vue-router";
const router = useRouter();
/* 通用菜单下标 */
const currentMenuIndex = ref(0);
/* 通用菜单 */
const currentMenu = reactive([
  {
    "text":"为我推荐",
    "icon":"#icon-rementuijian",
    "routerName":'home',
  },
  {
    "text":"云音乐精选",
    "icon":"#icon-weibiaoti-8_huaban1",
    "routerName":"Choice"
  },
  {
    "text":"播客",
    "icon":"#icon-tianchongxing-",
    "routerName":"Podcast"
  },
  {
    "text":"社区",
    "icon":"#icon-shequ",
    "routerName":"Community"
  },
  {
    "text":"分割"
  },
  {
    "text":"我喜欢的音乐",
    "icon":"#icon-tuijian1",
    "routerName":"SongSheet"
  },
  {
    "text":"本地音乐",
    "icon":"#icon-xiazai2",
    "routerName":"LocalMusic"
  },
])
/* 通用菜单事件 */
const handelCurrentMenuClick = (index,item)=>{
  if(index == 4){return}
  currentMenuIndex.value = index;
  router.replace({name:item.routerName})
}


</script>
<style lang="less">
.logoComponent{
  width: 100%;
  padding: 20px;
  text-align: center;
  overflow: hidden;
  -webkit-app-region:drag
}
.musicLogo{
  transform: scale(11) translateY(.1rem);
}

/* 通用列表 */
.currentComponent{
  padding: 0px 20px;
  margin-top: 20px;
}
.rowComponent{
  display: flex;
  align-items: center;
  padding: 10px 14px;
  margin-top: 6px;
  cursor: pointer;
  border-radius: 0.6rem;
  transition: all 0.25s;
}
.rowComponent:hover{
  background: var(--colorHover);
}
.rowComponentActive{
  border-radius: 0.6rem;
  background: linear-gradient(90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%) !important;
}
.rowComponentActive .currentIcon{
  fill: #fff !important;
}
.rowComponentActive>.currentContent{
  color: #fff;
}
.currentIcon{
  font-size: 20px;
  fill: RGB(120,127,141);
}
.currentContent{
  font-size: 1.0rem;
  margin-left: 0.5rem;
  color: RGB(120,127,141);
}

/* 分割 */
.partitionContainer{
  display: flex;
  justify-content: center;
}
.partition{
  border-bottom: 1.5px solid #e4e8ec;
  width: 100%;
  margin: 10px 0px;
}


</style>