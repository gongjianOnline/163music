<template>
  <div class="rankingContainer"> 
    <div class="rankingTitle">榜单推荐</div>
    <di class="rankingGrid"> 
      <div v-for="item in topListData.data" :key="item.id">
        <PieceComponent
          :imgUrl="item.coverImgUrl"
          :update="item.updateFrequency"></PieceComponent>
      </div>
    </di>
  </div>

  <div class="officialRanking" data-color="">
    <div class="rankingTitle">官方推荐</div>
    <div class="officialGrid">
      <EntryComponent></EntryComponent>
      <EntryComponent></EntryComponent>
      <EntryComponent></EntryComponent>
      <EntryComponent></EntryComponent>
    </div>


  </div>

  
</template>

<script lang="ts" setup>
import PieceComponent from "../globalComponent/piece.vue";
import EntryComponent from "../globalComponent/entry.vue";
import api from "../../api/api";
import {FSSItem,FSSData} from "../../module/finechoiceSongSheet"
import { reactive } from "vue";

/* 排行榜 */
const topListData = reactive<{data:FSSItem[]}>({data:[]})
const getToplist = ()=>{
  api.finechoiceApi.toplist().then((response)=>{
    console.log("榜单");
    console.log(response)
    let res = response as FSSData;
    topListData.data = res.list.slice(0,5)
    console.log(topListData.data)
  })
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