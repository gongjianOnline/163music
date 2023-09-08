<!-- 歌手详情 -->
<template>
  <!-- 专辑 -->
  <div class="songSheetContainer">  
    <!-- header -->
    <HeaderComponents></HeaderComponents>
    <div class="mainContainer">
      <SingerInfoComponent :data="singerInfo.data"></SingerInfoComponent>
      <!-- 导航栏组件 -->
      <div class="tabsContainer">
        <div :class="{'tabsSelected':tabsIndex == 0}" @click="handelTabs(0)">
          <span>歌曲</span>
          <span>{{playList.data.length}}</span>
        </div>
        <!-- <div :class="{'tabsSelected':tabsIndex == 1}" @click="handelTabs(1)">
          <span>评论</span>
          <span>{{commitList.data.length}}</span>
        </div> -->
      </div>
      
      <!-- 歌曲列表模块 -->
      <TableComponent v-if="tabsIndex == 0" :data="playList.data"></TableComponent>
      <!-- 评论模块 -->
      <!-- <CommitComponent v-if="tabsIndex == 1" :data="commitList.data"></CommitComponent> -->

    </div>
    
  </div>
</template>

<script lang="ts" setup>
import HeaderComponents from "../components/mainView/headerComponents.vue";
import SingerInfoComponent from "../components/singer/singerInfo.vue";
import TableComponent from "../components/globalComponent/table.vue";
// import CommitComponent from "../components/globalComponent/commit.vue";
import { reactive, ref} from "vue";
import {useRoute} from "vue-router";
import api from "../api/api";
import {SingerInfo} from "../module/singerInfo"
import {SSListSong} from "../module/songSheetList";
// import {SongSheetCommitComment} from "../module/songSheetCommit"

const router = useRoute();

const tabsIndex = ref(0);
const handelTabs = (index)=>{
  tabsIndex.value = index;
}

/* 获取专辑信息 */
const singerInfo = reactive<{data:any}>({data:{}})
const getInfo = ()=>{
  let id = router.query.id;
  api.finechoiceApi.artistDetail(id).then((response)=>{
    console.log("歌手信息",response);
    let res = response as SingerInfo;
    singerInfo.data = res.data;
    console.log("111",singerInfo.data)
  })
}

// /* 歌曲列表 */
const playList = reactive<{data:SSListSong[]}>({data:[]})
// const playInfo = reactive({data:[]})
const getAlbumContent =  ()=>{
  let id = router.query.id;
  api.finechoiceApi.artistsList(id).then((response:any)=>{
    console.log("专辑内容",response)
    playList.data = response.hotSongs;
    // playInfo.data = response.album;
  })
}

// /* 专辑评论 */
// const commitList = reactive<{data:SongSheetCommitComment[]}>({data:[]});
// const getAlbumComment = ()=>{
//   let id = router.query.id;
//   api.finechoiceApi.albumComment(id).then((response:any)=>{
//     console.log("专辑评论",response)
//     commitList.data = response.comments;
//   })
// }



getInfo();
getAlbumContent();
// getAlbumComment();
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