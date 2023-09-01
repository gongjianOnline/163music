<template>
  <div class="podcastTitle">{{ titleName }}</div>
  <div class="swiperContainer">
    <Carousel>
      <Slide v-for="(slide,index) in data" :key="index">
        <div class="gridContainer">
          <!-- 单项 -->
          <div v-for="(item) in slide" :key="item.id" class="gridContainerItem">
            <div class="podcastImg"><img :src="item.picUrl" alt=""></div>
            <div>
              <div class="podcastNewsTitle">{{ item.rcmdtext }}</div>
              <div class="podcastHeat">总编辑热度 {{item.programCount}}</div>
            </div>
          </div>
        </div>

      </Slide>

      <template #addons>
        <Navigation />
      </template>
      
    </Carousel>
  </div>


</template>

<script lang="ts" setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import {PDHItem} from "../../module/podcastDjHost"

withDefaults(defineProps<{
  titleName:string,
  data:PDHItem[][]
}>(),{
  titleName:"新闻推荐",
  data:()=>[] as PDHItem[][]
})

</script>

<style lang="less" scoped>
.podcastTitle{
  font-size: 20px;
  color: #283248;
  font-weight: bold;
  margin-top: 20px;
}

/* 轮播样式 */
.swiperContainer{
  margin-top: 10px;
  width: 100%;
  height: 300px;
}
.swiperContainer:deep(.carousel),
.swiperContainer:deep(.carousel__viewport),
.swiperContainer:deep(ol){
  width: 100%;
  height: 100%;
  margin: 0 !important;
}
.swiperContainer:deep(.carousel__next){
  right: -37px;
}
.swiperContainer:deep(.carousel__prev){
  left: -37px;
}

/* 新闻表格 */
.gridContainer{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 10px;
  width: 100%;
}
.gridContainer>div{
  display: flex;
  padding: 10px;
  cursor: pointer;
}
.gridContainer> div >div:nth-child(2){
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  text-align: left;
}
.gridContainerItem:hover{
  background: #fff !important;
  border-radius: 20px !important;
}
.podcastImg{
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
}
.podcastImg img{
  width: 100%;
  height: 100%;
}
.podcastNewsTitle{
  color: #283248;
  font-size: 14px;
}
.podcastHeat{
  color: #bcbfc6;
  font-size: 12px;
}



</style>