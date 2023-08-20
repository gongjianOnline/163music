<template>
  <!-- 网易云标题 -->
  <div class="homeComponent">
    <HeaderComponents></HeaderComponents>
  </div>

  <!-- 轮播 -->
  <div class="swiperComponent">
      <SwiperComponent :spaceBetween="360">
        <template #swiperSlide>
          <swiper-slide class="swiperSlide">
            <div>
              <img class="swiperImg" src="/img/home1.jpg" alt="">
            </div>
          </swiper-slide>
          <swiper-slide class="swiperSlide">
            <div>
              <img class="swiperImg" src="/img/home2.jpg" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class=""></div>
          </swiper-slide>
        </template>
      </SwiperComponent>
    </div>

  


</template>

<script lang="ts" setup>
import HeaderComponents from  "../components/mainView/headerComponents.vue"
import SwiperComponent from "../components/globalComponent/swiper.vue"
import { SwiperSlide } from 'swiper/vue';


</script>

<style lang="less" scoped>
.homeComponent{
  padding: 30px 20px;
  -webkit-app-region:drag
}

.swiperComponent{
  margin-top: 22px;
  width: 100%;
  -webkit-app-region:no-drag;
}
/* 轮播内容容器 */
.swiperSlide{
  width:50% !important;
  margin-right:2px !important;
  margin-left: 5px !important;
  padding-right:6px !important ;
  height: 100%;
}
.swiperSlide>div{
  width: 100%;
  height: 100%;
}
.swiperImg{
  width: 100%;
}


</style>