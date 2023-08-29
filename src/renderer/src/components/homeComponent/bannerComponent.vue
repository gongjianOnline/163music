<template>
  <div class="">
    <SwiperComponent class="swiperContainer">
      <template #swiperSlide>
        <!-- <Slide key="1" class="bigImgContainer">
          <div class="carousel__item">
            <Carousel>
              <Slide v-for="(item,index) in bannerList.data" :key="index">
                <div class="carousel__item">
                  <img :src="item.imageUrl" alt="" class="bigImg"> 
                </div>
              </Slide>

              <template #addons>
                <Pagination />
              </template>
            </Carousel>
          </div>
        </Slide> -->
        <Slide class="bigImgContainer" v-for="(item,index) in bannerList.data" :key="index">
          <div class="carousel__item">
            <img :src="item.imageUrl" alt="" class="bigImg">
          </div>
        </Slide>
        <!-- <Slide key="3" class="minImgContainer">
          <div class="carousel__item">
            <img src="/img/home3.jpg" alt="" class="bigImg">
          </div>
        </Slide>
        <Slide key="4" class="minImgContainer">
          <div class="carousel__item">
            <img src="/img/home3.jpg" alt="" class="bigImg">
          </div>
        </Slide> -->
      </template>
    </SwiperComponent>
  </div>
</template>

<script lang="ts" setup>
import SwiperComponent from "../globalComponent/swiper.vue";
import { Slide } from 'vue3-carousel';
import api from "../../api/api";
import { reactive } from "vue";
import {Banner,bannerData} from "../../module/bannerData";

/* 接口调用  */
reactive<{ data: Banner[] }>({ data: [] });
const bannerList = reactive<{data:Banner[]}>({data:[]});
const getBannerFun = ()=>{
  api.homeApi.getBanner().then((response)=>{
    const res = response as bannerData;
    bannerList.data = res.banners;
  })
}




getBannerFun();
</script>

<style lang="less" scoped>
/* 轮播框架 */
.swiperContainer:deep(.carousel__prev){
  margin: 0px !important;
  left: -27px !important;
}
.swiperContainer:deep(.carousel__next){
  margin: 0px !important;
  right: -27px !important;
}

/* banner的大图 */
.bigImgContainer{
  width: 310px !important;
  margin: 0px 10px;
}
.bigImgContainer:deep(.carousel__item),
.minImgContainer:deep(.carousel__item)
{
  width: 100%;
}
.bigImgContainer:deep(.carousel__pagination){
  margin: 0px !important;
  position: absolute;
  bottom: 7px;
}
.bigImg{
  width: 100% !important;
  border-radius: 10px !important;
}

/* banner小图 */
.minImgContainer{
  height: 150px;
  width: 142px !important;
  overflow: hidden;
  margin-right: 10px;
  margin-left: 10px;
}

</style>