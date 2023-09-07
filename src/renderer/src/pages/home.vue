<template>
  <!-- 网易云标题 -->
  <div class="homeComponent">
    <HeaderComponents></HeaderComponents>
    <div class="swiperContainer">
      <BannerComponent></BannerComponent>
      <!-- 推荐歌单 -->
      <SingleRowComponent>
        <template #titleName>
          <div class="singleTitleContent">推荐歌单</div>
        </template>
        <template #slideComponent>
          <Slide class="slideContent" v-for="(personalizedItem,index) in personalizedData.data" :key="index">
            <div class="carousel__item" @click="handelToSS(personalizedItem.id)">
              <Album :urlImg="personalizedItem.picUrl" 
                :playNum="personalizedItem.trackCount" 
                :playTitle="personalizedItem.name"></Album>
            </div>
          </Slide>
        </template>
      </SingleRowComponent>
      
      <!-- 双列表歌单 -->
      <Biserial
        titleName="歌声里藏着故事"
        :pageA="PNDataA.data"
        :pageB="PNDataB.data"></Biserial>


    </div>
    
  </div>

  


</template>

<script lang="ts" setup>
import HeaderComponents from  "../components/mainView/headerComponents.vue";
import BannerComponent from "../components/homeComponent/bannerComponent.vue"
import SingleRowComponent from "../components/homeComponent/singleRowComponent.vue"
import Album from "../components/globalComponent/album.vue";
import Biserial from "../components/homeComponent/biserialComponent.vue";
import { Slide } from 'vue3-carousel';
import {reactive} from "vue";
import {useRouter} from 'vue-router';
import api from "../api/api"
import {PersonalizedItem,PersonalizedData} from "../module/PersonalizedModule"
import {PNData,PNItem} from "../module/personalizwdNewsongModule"


/* 跳转到歌单页面 */
const router = useRouter();
const handelToSS = (id)=>{
  router.push({
    path:"/songSheet",
    query:{
      id:id
    }
  });
}

/* 获取推荐歌单 */
const personalizedData = reactive<{data:PersonalizedItem[]}>({data:[]})
const getPersonalized = ()=>{
  api.homeApi.personalized().then((response)=>{
    const res = response as PersonalizedData;
    personalizedData.data = res.result;
    console.log(personalizedData.data)
  })
}

/* 获取推荐音乐 */
const PNDataA = reactive<{data:PNItem[]}>({data:[]});
const PNDataB = reactive<{data:PNItem[]}>({data:[]});
const getPersonalizedNewsong = ()=>{
  api.homeApi.personalizedNewsong().then((response)=>{
    console.log("推荐音乐")
    console.log(response)
    const res = response as PNData;
    var groupedArr: PNItem[][] = [];
    for (let i = 0; i < res.result.length; i += 6) {
      groupedArr.push(res.result.slice(i, i + 6));
    }
    console.log("-----")
    console.log(groupedArr[1])
    PNDataA.data = groupedArr[0];
    PNDataB.data = groupedArr[1];
    
  })
}


getPersonalized();
getPersonalizedNewsong()
</script>

<style lang="less" scoped>
.homeComponent{
  -webkit-app-region:drag
}
.swiperContainer{
  padding: 30px 20px;
  -webkit-app-region:no-drag
}
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