<template>
  <div>
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

      <BiserialComponent
        titleName="最新音乐"
        :pageA="biserialPageA"
        :pageB="biserialPageB"></BiserialComponent>




  </div>
</template>

<script lang="ts" setup>
import SingleRowComponent from  "../homeComponent/singleRowComponent.vue";
import BiserialComponent from  "../homeComponent/biserialComponent.vue"
import Album from "../globalComponent/album.vue";
import { Slide } from 'vue3-carousel';
import {useRouter} from "vue-router";
import {reactive} from "vue";

const router = useRouter();

const handelToSS = ()=>{
  router.push({name:"SongSheet"})
}

/* 数据 */
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