<template>
  <div class="choiceComponent">
    <HeaderComponents></HeaderComponents>
    <div class="swiperContainer"> 
      <!-- 二级菜单 -->
      <div class="choiceMenuContainer">
        <div :class="{'choiceMenuActive':choiceMenuIndex==1}" @click="handelCMIndex(1,'ChoiceIndex')">精选</div>
        <div :class="{'choiceMenuActive':choiceMenuIndex==2}" @click="handelCMIndex(2,'ChoiceSquare')">歌单广场</div>
        <div :class="{'choiceMenuActive':choiceMenuIndex==3}" @click="handelCMIndex(3,'ChoiceRanking')">排行榜</div>
        <div :class="{'choiceMenuActive':choiceMenuIndex==4}" @click="handelCMIndex(4,'ChoiceSinger')">歌手 </div>
        <!-- <div :class="{'choiceMenuActive':choiceMenuIndex==5}" @click="handelCMIndex(5,'ChoiceVIP')">VIP </div> -->
      </div>
      <!-- 三级视图 -->
      <div class="viewContainer">
        <router-view></router-view>
      </div>
    
    </div>
  </div>

</template>

<script lang="ts" setup>
import HeaderComponents from "../components/mainView/headerComponents.vue"

import {ref} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
/* 菜单下标及事件 */
const choiceMenuIndex = ref(1);
const handelCMIndex = (index,routerName)=>{
  choiceMenuIndex.value = index;
  router.push({name:routerName});
}

</script>

<style lang="less" scoped>
.choiceComponent{
  -webkit-app-region:drag
}
.swiperContainer{
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  -webkit-app-region:no-drag
}

/* 菜单列表 */
.choiceMenuContainer{
  display: flex;
  position: sticky;
  top: 75px;
  height: 30px;
  background: #f7f9fc;
  z-index: 5;
}
.choiceMenuContainer div{
  margin-right: 14px;
  color: #7b8290;
  cursor: pointer;
}
.choiceMenuActive{
  color: #283248 !important;
  font-weight: bold;
  position: relative;
}
.choiceMenuActive::before{
  content:"";
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translate(-50%);
  width: 30px;
  height: 4px;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%);
}
/* 三级菜单 */
.viewContainer{  
  margin-top: 10px;
  width: 100%;
}


</style>