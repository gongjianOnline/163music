<template>
  <div class="singRowContainer">
    <!-- 标题 -->
    <div class="titleName">
      <div class="singRowTitle">推荐歌单</div>
      <div>
        <svg class="icon singIcon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
    </div>
    
    <!-- 轮播cesium -->
    <div class="swiperContainer">
      <swiper 
        style="height: 100%;"
        :modules="modules"
        :slides-per-view="3"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :navigation="true" 
        class="SRSwiperContainer">
        <swiper-slide class="SRSItem">Slide 1</swiper-slide>
        <swiper-slide class="SRSItem">Slide 2</swiper-slide>
        <swiper-slide class="SRSItem">Slide 3</swiper-slide>
        <swiper-slide class="SRSItem">Slide 4</swiper-slide>
        <swiper-slide class="SRSItem">Slide 5</swiper-slide>
        <swiper-slide class="SRSItem">Slide 6</swiper-slide>
        <swiper-slide class="SRSItem">Slide 7</swiper-slide>
        <swiper-slide class="SRSItem">Slide 8</swiper-slide>
      </swiper>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const modules = [Navigation,Pagination,Scrollbar,A11y]

</script>

<style lang="less" scoped> 
.singRowContainer{
  margin-top: 20px;
  border: 1px solid red;
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
}
.titleName{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.singIcon{
  transform: rotate(180deg);
  font-size: 20px;
  fill: #283248;
  font-weight: bold;
}
.singRowTitle{
  color:#283248;
  font-size: 20px;
  font-weight: bold;
}
/* 轮播容器 */
.swiperContainer{
  border: 1px solid #111;
  margin-top: 10px;
  width: 100%;
  height: 100%;
}
.SRSwiperContainer{
  height: 100%;
}
/* 推荐歌单 */
.SRSItem{
  width: 190px !important;
  height: 100% !important;
  border: 1px solid red;
  margin-right: 10px;
}
</style>