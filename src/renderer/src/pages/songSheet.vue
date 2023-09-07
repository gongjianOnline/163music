<template>
  <div class="songSheetContainer">  
    <!-- header -->
    <HeaderComponents></HeaderComponents>
    <div class="mainContainer">
      <SSInfo :data="playListDetail.data"></SSInfo>
      <!-- 导航栏组件 -->
      <div class="tabsContainer">
        <div :class="{'tabsSelected':tabsIndex == 0}" @click="handelTabs(0)">
          <span>歌曲</span>
          <span>{{playList.data.length}}</span>
        </div>
        <div :class="{'tabsSelected':tabsIndex == 1}" @click="handelTabs(1)">
          <span>评论</span>
          <!-- <span>198</span> -->
        </div>
        <div :class="{'tabsSelected':tabsIndex == 2}" @click="handelTabs(2)">
          <span>收藏者</span>
          <!-- <span>355</span> -->
        </div>
      </div>
      
      <!-- 歌曲列表模块 -->
      <TableComponent v-if="tabsIndex == 0" :data="playList.data"></TableComponent>
      <!-- 评论模块 -->
      <CommitComponent v-if="tabsIndex == 1"></CommitComponent>
      <!-- 收藏者列表 -->
      <SSCollect v-if="tabsIndex == 2"></SSCollect>

    </div>
    
  </div>
</template>

<script lang="ts" setup>
import HeaderComponents from "../components/mainView/headerComponents.vue";
import SSInfo from "../components/songSheet/SSInfo.vue";
import TableComponent from "../components/globalComponent/table.vue";
import CommitComponent from "../components/globalComponent/commit.vue";
import SSCollect from "../components/songSheet/SSCollect.vue"
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import api from "../api/api";
import {SSInfoData,SSInfoPlaylist} from "../module/songSheetInfo";
import {SSListData,SSListSong} from "../module/songSheetList";

const router = useRoute();

const tabsIndex = ref(0);
const handelTabs = (index)=>{
  tabsIndex.value = index;
}

/* 歌单信息 */
let playListDetail = reactive<{data:SSInfoPlaylist}>({data:{
  creator:{}
}});
const getPlayListDetail = ()=>{
  let listId = router.query.id;
  api.finechoiceApi.playListDetail(listId).then((response)=>{
    let res = response as SSInfoData;
    playListDetail.data = res.playlist;
  })
}

/* 歌单列表 */
let playList = reactive<{data:SSListSong[]}>({data:[]})
const getPlayList = ()=>{
  let listId = router.query.id;
  api.finechoiceApi.playlistDynamic(listId).then((response)=>{
    console.log("歌单详情",response);
    let res = response as SSListData;
    playList.data = res.songs;
  })
}


getPlayListDetail();
getPlayList();
</script>

<style lang="less" scoped>
.songSheetContainer{
  -webkit-app-region:drag;
}
.mainContainer{
  -webkit-app-region:no-drag;
  // padding: 0px 20px;
}

/* 分页部分 */
.tabsContainer{
  display: flex;
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  position: sticky;
  top: 70px;
  background: #f7f9fc;
  z-index: 5;
}
.tabsContainer div{
  margin-right: 70px;
  position: relative;
  color: #7b808d;
  cursor: pointer;
}
.tabsContainer div>span:nth-child(1){
  font-size: 20px;
  font-weight: bold;
}
.tabsContainer div>span:nth-child(2){
  font-size: 14px;
  position: absolute;
  right: -30px;
  top: 0;
  font-weight: bold;
}
.tabsSelected{
  color:  #283248 !important;
}
.tabsSelected::before{
  content:"";
  position:absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  width: 32px;
  height: 4px;
  background: linear-gradient(-90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%);
  border-radius: 20px;
}
</style>