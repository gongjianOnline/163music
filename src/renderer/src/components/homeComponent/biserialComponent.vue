<template>
  <div class="biserialContainer">
    <div class="titleName">{{titleName}}</div>
    <div class="swiperContainer">
      <Carousel>
        <Slide key="1">
          <div class="pageContainer" >
            <div class="pageContainerItem" v-for="(item,index) in pageA" :key="index">
              <!-- 图片 -->
              <div class="pageContainerItemContainer"> 
                <img src="/img/home6.jpg" alt="">
              </div>
              <div class="PCIInfoContainer">
                <div class="PCITitle">{{item.BPATitle}}</div>
                <div>
                  <span class="PCITag">{{ item.BPATag }}</span>
                  <span class="PCIAuthor">{{item.BPAAuthor}}</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide key="2">
          <div class="pageContainer" >
            <div class="pageContainerItem" v-for="(item,index) in pageB" :key="index">
              <!-- 图片 -->
              <div class="pageContainerItemContainer"> 
                <img src="/img/home6.jpg" alt="">
              </div>
              <div class="PCIInfoContainer">
                <div class="PCITitle">{{item.BPATitle}}</div>
                <div>
                  <span class="PCITag">{{ item.BPATag }}</span>
                  <span class="PCIAuthor">{{item.BPAAuthor}}</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

withDefaults(defineProps<{
  titleName:string,
  pageA:any[],
  pageB:any[]
}>(),{
  titleName:"",
  pageA:()=>new Array(),
  pageB:()=>new Array()
})

</script>

<style lang="less" scoped> 
.biserialContainer{
  margin-top: 20px;
}
.titleName{
  font-size: 20px;
  font-weight: bold;
  color: #283248;
}
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


/* 首屏布局 */
.pageContainer{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.pageContainerItem{
  width: 50%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0px 14px;
  border-radius: 10px;
  transition: all 0.25s;
  cursor: pointer;
}
.pageContainerItem:hover{
  background: #fff;
}

.pageContainerItemContainer{
  width: 80px;
  height: 80px;
  border-radius: 10px;
}
.pageContainerItemContainer>img{
  width: 100%;
  height: 100%;
}
.PCIInfoContainer{
  text-align: left;
  margin-left: 10px;
}
.PCITitle{
  color: #283248;
  font-size: 16px;
  margin-bottom: 6px;
}
.PCITag{
  background: #f8e7e9;
  border: 1px solid #f8dcde;
  border-radius: 10px;
  width: 150px;
  font-size: 10px;
  color: #ff3a3a;
  padding: 2px 2px;
  font-weight: bold;
}
.PCIAuthor{
  font-size: 12px;
  margin-left: 6px;
}
</style>