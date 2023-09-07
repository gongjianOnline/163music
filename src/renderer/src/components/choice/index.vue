<template>
  <div>
    <SingleRowComponent>
        <template #titleName>
          <div class="singleTitleContent">官方歌单</div>
        </template>
        <template #slideComponent>
          <Slide class="slideContent" v-for="item in FPDataList.data" :key="item.id">
            <div class="carousel__item" @click="handelToSS(item)">
              <Album 
                :urlImg="item.coverImgUrl" 
                :playNum="item.commentCount"
                :playTitle="item.name"></Album>
            </div>
          </Slide>
        </template>
      </SingleRowComponent>

      <BiserialComponent
        titleName="网易出品"
        :pageA="biserialPageA.data"
        :pageB="biserialPageB.data"></BiserialComponent>

      <AlbumComponent
        titleName="最新专辑"
        :pageA="newAlbumDataA.data"
        :pageB="newAlbumDataB.data"></AlbumComponent>


  </div>
</template>

<script lang="ts" setup>
import SingleRowComponent from  "../homeComponent/singleRowComponent.vue";
import BiserialComponent from  "./biserialComponent.vue"
import Album from "../globalComponent/album.vue";
import AlbumComponent from "./albumComponent.vue"
import { Slide } from 'vue3-carousel';
import {useRouter} from "vue-router";
import {reactive} from "vue";
import api from "../../api/api"
import {FPItem,FPData} from "../../module/finechoicePlayModule"
import {FMVItem,FMVData} from "../../module/finechoiceMVModule"
import {AlbumData,AlbumItem} from "../../module/finechoiceNewAlbum"

const router = useRouter();

const handelToSS = (item)=>{
  router.push({
    name:"SongSheet",
    query:{
      id:item.id
    }
  })
}


/* 网易出品MV */
const biserialPageA = reactive<{data:FMVItem[]}>({data:[]});
const biserialPageB = reactive<{data:FMVItem[]}>({data:[]});
const geteExclusive = ()=>{
  api.finechoiceApi.exclusive().then((response)=>{
    console.log("网易出品MV")
    console.log(response)
    let res = response as FMVData;
    var groupedArr: FMVItem[][] = [];
    for (let i = 0; i < res.data.length; i += 6) {
      groupedArr.push(res.data.slice(i, i + 6));
    }
    biserialPageA.data = groupedArr[0];
    biserialPageB.data = groupedArr[1];
  })
} 
/* 精选歌单 */
const FPDataList = reactive<{data:FPItem[]}>({data:[]});
const getPlaylist = ()=>{
  console.log("精选歌单")
  api.finechoiceApi.playlist().then((response)=>{
    console.log(response)
    let res = response as FPData;
    FPDataList.data = res.playlists;
  })
} 

/* 最新专辑 */
const newAlbumDataA = reactive<{data:AlbumItem[]}>({data:[]});
const newAlbumDataB = reactive<{data:AlbumItem[]}>({data:[]});
const getNewAlbum = ()=>{
  api.finechoiceApi.newAlbum().then((response)=>{
    console.log("最新专辑");
    console.log(response)
    let res = response as AlbumData;
    var groupedArr: AlbumItem[][] = [];
    for (let i = 0; i < res.albums.length; i += 6) {
      groupedArr.push(res.albums.slice(i, i + 6));
    }
    newAlbumDataA.data = groupedArr[0];
    newAlbumDataB.data = groupedArr[1]
  })
}

getPlaylist();
geteExclusive();
getNewAlbum();

</script>

<style lang="less" scoped>
/* 精选试图 */
.singleTitleContent{
  font-size: 20px;
  color: #283248;
  font-weight: bold;
}
.carousel__item{
  height: 100%;
  width: 155px;
  margin-left: 5px;
  margin-right: 5px;
}
.carousel__item>img{
  width: 100%;
  height: 100%;
}
</style>