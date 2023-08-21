<template>
  <!-- 网易云标题 -->
  <div class="homeComponent">
    <HeaderComponents></HeaderComponents>
    <div class="swiperContainer">
      <BannerComponent></BannerComponent>
      <!-- 推荐歌单 -->
      <SingleRowComponent>
        <template #titleName>推荐歌单</template>
        <template #slideComponent>
          <Slide class="slideContent">
            <div class="carousel__item">
              <img src="/img/hone5.jpg" alt="">
            </div>
          </Slide>
          <Slide class="slideContent">
            <div class="carousel__item"><img src="/img/hone5.jpg" alt=""></div>
          </Slide>
          <Slide class="slideContent">
            <div class="carousel__item"><img src="/img/hone5.jpg" alt=""></div>
          </Slide>
          <Slide class="slideContent">
            <div class="carousel__item"><img src="/img/hone5.jpg" alt=""></div>
          </Slide>
          <Slide class="slideContent">
            <div class="carousel__item"><img src="/img/hone5.jpg" alt=""></div>
          </Slide>
          <Slide class="slideContent">
            <div class="carousel__item"><img src="/img/hone5.jpg" alt=""></div>
          </Slide>
        </template>
      </SingleRowComponent>
      
      <!--  -->

    </div>
    
  </div>

  


</template>

<script lang="ts" setup>
import HeaderComponents from  "../components/mainView/headerComponents.vue";
import BannerComponent from "../components/homeComponent/bannerComponent.vue"
import SingleRowComponent from "../components/homeComponent/singleRowComponent.vue"
import { Slide } from 'vue3-carousel';

</script>

<style lang="less" scoped>
.homeComponent{
  -webkit-app-region:drag
}
.swiperContainer{
  padding: 30px 20px;
  -webkit-app-region:no-drag
}
.carousel__item{
  height: 100%;
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
}
.carousel__item>img{
  width: 100%;
  height: 100%;
}
</style>