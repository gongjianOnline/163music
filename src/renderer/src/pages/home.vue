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
          <Slide class="slideContent" v-for="index in 10" :key="index">
            <div class="carousel__item" @click="handelToSS">
              <Album urlImg="/img/home5.jpg" 
                playNum="123.4" 
                playTitle="2023那些超级好听流行音乐推荐(更新快)"></Album>
            </div>
          </Slide>
        </template>
      </SingleRowComponent>
      
      <!-- 双列表歌单 -->
      <Biserial
      titleName="歌声里藏着故事"
      :pageA="biserialPageA"
      :pageB="biserialPageB"></Biserial>


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

const biserialPageA = reactive([
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
]);

const biserialPageB = reactive([
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
  {
    BPAImg:"/img/home6.jpg",
    BPATitle:"听我说",
    BPATag:'超81.5%人播放',
    BPAAuthor:"周深"
  },
]);

/* 跳转到歌单页面 */
const router = useRouter();
const handelToSS = ()=>{
  router.push('/songSheet');
}


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