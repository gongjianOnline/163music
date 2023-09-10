<template>
  <div class="singerContainer"> 
    <div class="tagsContainer">
      <div class="tagsItem"
        @click="handelAreaTags(index)"
        :class="{'tagsItemActive':index == tagsAreaIndex}"
        v-for="(item,index) in tagsAreaData" 
        :key="index" >{{item.name}}</div>
    </div>

    <div class="tagsContainer marginTop10">
      <div class="tagsItem"
        @click="handelResultantTags(index)"
        :class="{'tagsItemActive':index == ResultantTagsIndex}"
        v-for="(item,index) in resultantTagsData" 
        :key="index" >{{item.name}}</div>
    </div>

    <!-- 检索 -->
    <div class="retrievalContainer">
      <span
        :class="{'RCActive':index==BeyIndex}"
        v-for="(item,index) in BeyData" 
        :key="index"
        @click="handelBeyIndex(index)">{{ item.name }}</span>
    </div>

    <div class="singerListContainer">
      <div class="SSCItem" 
        v-for="(item) in artistListData.data" 
        :key="item.id"
        @click="handelClick(item)">
        <div class="SSCImg">
          <div class="SSCHover">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofangqi-bofang"></use>
            </svg>
          </div>
          <img :src="item.img1v1Url" alt="">
        </div>
        <div class="SSCAuthor">{{item.name}}</div>
        <div class="SSCDoc">单曲:{{ item.musicSize }}</div>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import api from "../../api/api";
import {FALData,FALItem} from "../../module/finechoiceArtistList";
import {useRouter} from "vue-router"

const router = useRouter();
/* 标签 */
const tagsAreaIndex = ref(0);
const tagsAreaData = reactive([
  {name:'全部',value:-1},
  {name:'华语',value:7},
  {name:'欧美',value:96},
  {name:'日本',value:8},
  {name:'韩国',value:16},
  {name:'其他',value:0},
])
const handelAreaTags = (index)=>{
  tagsAreaIndex.value = index;
  getArtistList(
    resultantTagsData[ResultantTagsIndex.value].value,
    tagsAreaData[tagsAreaIndex.value].value,
    BeyData[BeyIndex.value].name == "热门"?-1:BeyData[BeyIndex.value].name.toLowerCase())
}

/* 组合 */
const resultantTagsData = reactive([
  {name:"全部",value:-1},
  {name:"男歌手",value:1},
  {name:"女歌手",value:2},
  {name:"乐队组合",value:3}
])
const ResultantTagsIndex = ref(0);
const handelResultantTags = (index)=>{
  ResultantTagsIndex.value = index;
  getArtistList(
    resultantTagsData[ResultantTagsIndex.value].value,
    tagsAreaData[tagsAreaIndex.value].value,
    BeyData[BeyIndex.value].name == "热门"?-1:BeyData[BeyIndex.value].name.toLowerCase())
}

/* 检索 */
const BeyIndex = ref(0);
const BeyData = reactive([
  {name:'热门'},
  {name:'A'},
  {name:'B'},
  {name:'C'},
  {name:'D'},
  {name:'E'},
  {name:'F'},
  {name:'G'},
  {name:'H'},
  {name:'I'},
  {name:'G'},
  {name:'K'},
  {name:'L'},
  {name:'M'},
  {name:'N'},
  {name:'O'},
  {name:'P'},
  {name:'Q'},
  {name:'R'},
  {name:'S'},
  {name:'T'},
  {name:'U'},
  {name:'V'},
  {name:'W'},
  {name:'S'},
  {name:"Y"},
  {name:"Z"}
])
const handelBeyIndex = (index)=>{
  BeyIndex.value = index;
  getArtistList(
    resultantTagsData[ResultantTagsIndex.value].value,
    tagsAreaData[tagsAreaIndex.value].value,
    BeyData[BeyIndex.value].name == "热门"?-1:BeyData[BeyIndex.value].name.toLowerCase())
}

/* 获取歌手列表 */
const artistListData = reactive<{data:FALItem[]}>({data:[]})
const getArtistList = (type,area,initial)=>{
  artistListData.data = [];
  api.finechoiceApi.artistList(type,area,initial).then((response)=>{
    let res = response as FALData;
    artistListData.data = res.artists;
  })
}

/* 歌手详情 */
const handelClick = (item)=>{
  router.push({
    path:"/singer",
    query:{
      id:item.id
    }
  })
}

getArtistList(-1,-1,-1);
</script>

<style lang="less" scoped> 
.singerContainer{
  padding: 10px;
}
/* 标签页 */
.tagsContainer{
  display: flex;
}
.marginTop10{
  margin-top: 20px;
}
.tagsItem{
  border-radius: 10px;
  padding: 4px 15px;
  margin-right: 10px;
  border: 1px solid #e2e5e9;
  background: #f7f9fc;
  color: #283248;
  cursor: pointer;
  font-size: 14px;
}
.tagsItemActive,
.moreTagsChildActive{
  border: 1px solid #f8d8db !important;
  background: #f8eaed !important;
  color: #ff3a3a !important;
}

/* 检索 */
.retrievalContainer{
  display: flex;
  margin-top: 14px;
}
.retrievalContainer span{
  color: #283248;
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  cursor: pointer;
}
.RCActive{
  color: #ff3a3a !important;
}

/* 歌手列表 */
.singerListContainer{
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 10px;
}

.SSCItem{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px 0px;
  border-radius: 10px;
  transition: all 0.25s;
  cursor: pointer;
}
.SSCItem:hover{
  background: #fff;
}
.SSCItem:hover .SSCHover{
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.SSCItem:hover .icon{
  opacity: 1;
}
.SSCHover .icon{
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  fill: #fff;
  font-size: 60px;
  transition: all 0.25s;
}

/* 收藏者图片 */
.SSCImg{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
  overflow: hidden;
  position: relative;
}
.SSCImg img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.SSCAuthor{
  font-size: 14px;
  color: #3c455a;
  margin-top: 10px;
}

.SSCDoc{
  color: #7b8290;
  font-size: 12px;
  margin-top: 10px;
}
</style>