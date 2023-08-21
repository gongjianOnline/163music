<template>
  <div class="singleRowContainer">
    <div class="SRTitle">
      <div>
        <slot name="titleName"></slot>
      </div>
      <div class="SRTitleIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
    </div>
    <Carousel :items-to-show="3">
      <slot name="slideComponent"></slot>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>


</template>

<script lang="ts" setup>
import { Carousel, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
</script>

<style lang="less" scoped> 
.singleRowContainer{
  width: 100%;
  height: 250px;
  border:1px solid red;
  margin-top: 20px;
}
.SRTitle{
  display: flex;
  align-items: center;
  color: #283248;
  font-weight: bold;
  margin-bottom: 10px;
}
.SRTitleIcon{
  transform: rotate(180deg);
  margin-top: 4px;
  fill: #283248;
  font-weight: 800;
}
.singleRowContainer:deep(.carousel){
  height: calc(100% - 22.4px);
}
.singleRowContainer:deep(.carousel__next){
  right: -10px;
}
.singleRowContainer:deep(.carousel__prev){
  left: -20px;
}
/* 轮播轮播图调整 */
.singleRowContainer:deep(ol){
  margin: 0px !important;
  height: 100%;
}
.singleRowContainer:deep(li),
.singleRowContainer:deep(.carousel__viewport),
.singleRowContainer:deep(.carousel){
  height: calc(100% - 11px) !important;
}
.slideContent{
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
.carousel__item{
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
</style>