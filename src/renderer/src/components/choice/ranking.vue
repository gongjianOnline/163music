<template>
  <div class="rankingContainer"> 
    <div class="rankingTitle">榜单推荐</div>
    <di class="rankingGrid"> 
      <div v-for="item in topListData.data" :key="item.id" @click="handleClick(item)">
        <PieceComponent
          :imgUrl="item.coverImgUrl"
          :update="item.updateFrequency"></PieceComponent>
      </div>
    </di>
  </div>

  <div class="officialRanking" data-color="">
    <div class="rankingTitle">官方推荐</div>
    <div class="officialGrid">
      <div v-for="(item,index) in officialDetailsData.data" :key="index" @click="handleClick(item)"> 
        <EntryComponent 
          :data="item"></EntryComponent>
      </div>
    </div>
  </div>

  <div class="rankingContainer"> 
    <div class="rankingTitle">全部榜单</div>
    <div class="rankingGrid"> 
      <div v-for="item in otherListData.data" :key="item.id" @click="handleClick(item)">
        <PieceComponent
          :imgUrl="item.coverImgUrl"
          :isHideLine="false"></PieceComponent>
      </div>
    </div>
  </div>

  
</template>

<script lang="ts" setup>
import PieceComponent from "../globalComponent/piece.vue";
import EntryComponent from "../globalComponent/entry.vue";
import api from "../../api/api";
import {FSSItem,FSSData} from "../../module/finechoiceSongSheet";
import {FODData } from "../../module/finechoiceOfficialDetails";
import {FODIData} from "../../module/finechoiceOfficialDetailsItem"
import { reactive } from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

/* 排行榜 */
const topListData = reactive<{data:FSSItem[]}>({data:[]})
const officialListData =  reactive<{data:FSSItem[]}>({data:[]});
const otherListData = reactive<{data:FSSItem[]}>({data:[]});
const getToplist = ()=>{
  api.finechoiceApi.toplist().then((response)=>{
    let res = response as FSSData;
    officialListData.data = res.list.slice(0,4);
    topListData.data = res.list.slice(4,9);
    otherListData.data= res.list.slice(9,res.list.length-1);
    getOfficialDetails()
  })
}
/* 官方推荐 */
let officialDetailsData = reactive<{data:FODIData[]}>({data:[]});
const getOfficialDetails = ()=>{
  let itemData = officialListData.data;
  for(let i=0;i<itemData.length;i++){ 
    officialDetailsData.data[i] = {
      name:itemData[i].name,
      id:itemData[i].id,
      updateFrequency:itemData[i].updateFrequency,
      imgUrl:"",
      musicData:[]
    }
    /* 获取歌单详情列表 */
    api.finechoiceApi.playlistDetail(itemData[i].id).then((response)=>{
      let res = response as FODData;
      officialDetailsData.data[i].musicData = res.songs;
      officialDetailsData.data[i].imgUrl = res.songs[0].al.picUrl;
    })
  }
}


const handleClick = (item)=>{
  router.push({
    path:"/songSheet",
    query:{
      id:item.id
    }
  });
}

getToplist();
</script>

<style lang="less" scoped> 
.rankingTitle{
  font-size: 18px;
  color: #283248;
  font-weight: bold;
}
.rankingGrid{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-gap: 10px;
  margin-top: 10px;
}
.officialRanking{
  margin-top: 10px;
}
/* 官方推荐 */
.officialGrid{
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2,1fr);
  margin-top: 10px;
}
</style>