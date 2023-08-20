<template>
  <div class="swiperComponent">
    <SwiperComponent :spaceBetween="390">
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
        <swiper-slide class="fitSwiperSlide">
          <div>
            <img style="height: 153px;" class="swiperImg" src="/img/home3.jpg" alt="">
          </div>
        </swiper-slide>
        <swiper-slide class="fitSwiperSlide">
          <div>
            <img style="height: 153px;" class="swiperImg" src="/img/home3.jpg" alt="">
          </div>
        </swiper-slide>
      </template>
    </SwiperComponent>
  </div>
</template>

<script lang="ts" setup>
import SwiperComponent from "../globalComponent/swiper.vue";
import { SwiperSlide } from 'swiper/vue';

</script>

<style lang="less" scoped>
.swiperComponent{
  margin-top: 22px;
  width: 100%;
  -webkit-app-region:no-drag;
}
/* 轮播内容容器 */
.swiperSlide{
  width:50% !important;
  margin-right:5px !important;
  margin-left: 5px !important;
  padding-right:6px !important ;
  height: 100%;
}
.swiperSlide>div,
.fitSwiperSlide>div{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
/* 副内容 */
.fitSwiperSlide{
  width: 25% !important;
  height: 100% !important;
  margin-right:10px !important;
}
.swiperImg{
  width: 100%;
  object-fit: cover;
}
</style>