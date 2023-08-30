<template>
  <div>
    <SingleRowComponent>
        <template #titleName>
          <div class="singleTitleContent">官方歌单</div>
        </template>
        <template #slideComponent>
          <Slide class="slideContent" v-for="item in FPDataList.data" :key="item.id">
            <div class="carousel__item" @click="handelToSS">
              <Album 
                :urlImg="item.coverImgUrl" 
                :playNum="item.commentCount"
                :playTitle="item.name"></Album>
            </div>
          </Slide>
        </template>
      </SingleRowComponent>

      <!-- <BiserialComponent
        titleName="最新音乐"
        :pageA="biserialPageA"
        :pageB="biserialPageB"></BiserialComponent> -->




  </div>
</template>

<script lang="ts" setup>
import SingleRowComponent from  "../homeComponent/singleRowComponent.vue";
// import BiserialComponent from  "../homeComponent/biserialComponent.vue"
import Album from "../globalComponent/album.vue";
import { Slide } from 'vue3-carousel';
import {useRouter} from "vue-router";
import {reactive} from "vue";
import api from "../../api/api"
import {FPItem,FPData} from "../../module/finechoicePlayModule"

const router = useRouter();

const handelToSS = ()=>{
  router.push({name:"SongSheet"})
}

/* 数据 */
// const biserialPageA = reactive<{data:FPItem[]}>({data:[]});

// const biserialPageB = reactive<{data:FPItem[]}>({data:[]});
// /* 获取精选歌单 */
// const getPlaylist = ()=>{
//   console.log("精选歌单")
//   api.finechoiceApi.playlist().then((response)=>{
//     console.log(response)
//     let res = response as FPData;
//     var groupedArr: FPItem[][] = [];
//     for (let i = 0; i < res.playlists.length; i += 6) {
//       groupedArr.push(res.playlists.slice(i, i + 6));
//     }
//     biserialPageA.data = groupedArr[0];
//     biserialPageB.data = groupedArr[1];

//   })
// } 

const FPDataList = reactive<{data:FPItem[]}>({data:[]});
const getPlaylist = ()=>{
  console.log("精选歌单")
  api.finechoiceApi.playlist().then((response)=>{
    console.log(response)
    let res = response as FPData;
    FPDataList.data = res.playlists;
  })
} 

getPlaylist();

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